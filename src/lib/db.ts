import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import fs from "node:fs";

// -----------------------------------------------------------------------
// Local SQLite storage for form submissions, using Node's built-in
// node:sqlite module (no native compilation required — unlike
// better-sqlite3, which needs a C++ toolchain and trips up constantly on
// Windows machines without Visual Studio Build Tools installed). Requires
// Node.js 22.5+; no CLI flag needed on Node 22.13+ / 23.4+.
//
// IMPORTANT — read this before deploying:
// This works great for local development and for any host with a
// persistent filesystem (a VPS, Render, Railway, a Docker container with a
// mounted volume, etc.). It does NOT work on serverless platforms with an
// ephemeral filesystem (e.g. Vercel's default runtime) — data written there
// can disappear on the next cold start / deploy.
//
// If you deploy to Vercel, swap this file's implementation for a hosted
// database instead (Vercel Postgres, Supabase, Neon, Turso are all good,
// low-effort options with generous free tiers). Every API route only calls
// the functions exported below, so that's the only file you need to change.
// -----------------------------------------------------------------------

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "studioz.db");

let _db: DatabaseSync | null = null;

function getDb() {
  if (_db) return _db;
  const db = new DatabaseSync(dbPath);
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS enroll_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      dob TEXT NOT NULL,
      program TEXT NOT NULL,
      hear_about TEXT,
      motivation TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new'
    );

    CREATE TABLE IF NOT EXISTS apprenticeship_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      company_name TEXT NOT NULL,
      contact_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      sector TEXT NOT NULL,
      apprentice_count TEXT NOT NULL,
      message TEXT,
      status TEXT NOT NULL DEFAULT 'new'
    );
  `);
  _db = db;
  return db;
}

export function insertContactSubmission(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const stmt = getDb().prepare(
    `INSERT INTO contact_submissions (name, email, subject, message) VALUES (:name, :email, :subject, :message)`
  );
  return stmt.run(data);
}

export function insertEnrollSubmission(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  program: string;
  hearAbout?: string;
  motivation: string;
}) {
  const stmt = getDb().prepare(
    `INSERT INTO enroll_submissions (first_name, last_name, email, phone, dob, program, hear_about, motivation)
     VALUES (:firstName, :lastName, :email, :phone, :dob, :program, :hearAbout, :motivation)`
  );
  return stmt.run({ ...data, hearAbout: data.hearAbout ?? "" });
}

export function insertApprenticeshipSubmission(data: {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  sector: string;
  apprenticeCount: string;
  message?: string;
}) {
  const stmt = getDb().prepare(
    `INSERT INTO apprenticeship_submissions (company_name, contact_name, email, phone, sector, apprentice_count, message)
     VALUES (:companyName, :contactName, :email, :phone, :sector, :apprenticeCount, :message)`
  );
  return stmt.run({ ...data, phone: data.phone ?? "", message: data.message ?? "" });
}
