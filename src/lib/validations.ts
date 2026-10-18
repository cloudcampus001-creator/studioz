import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  subject: z.string().trim().min(1, "Choose a subject"),
  message: z.string().trim().min(10, "Message should be at least 10 characters"),
  // Honeypot field — real users never see or fill this in (hidden via CSS).
  // Left unconstrained here so a bot filling it doesn't fail validation —
  // the route handler checks it and silently no-ops the submission instead.
  company_website: z.string().optional().or(z.literal("")),
});
export type ContactInput = z.infer<typeof contactSchema>;

export const enrollSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name"),
  lastName: z.string().trim().min(1, "Enter your last name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(6, "Enter a valid phone number"),
  dob: z.string().trim().min(1, "Enter your date of birth"),
  program: z.string().trim().min(1, "Select a program"),
  hearAbout: z.string().trim().optional().or(z.literal("")),
  motivation: z.string().trim().min(10, "Tell us a little more (at least 10 characters)"),
  company_website: z.string().optional().or(z.literal("")),
});
export type EnrollInput = z.infer<typeof enrollSchema>;

export const apprenticeshipSchema = z.object({
  companyName: z.string().trim().min(2, "Enter your company or organisation name"),
  contactName: z.string().trim().min(2, "Enter a contact person"),
  email: z.string().trim().email("Enter a valid work email address"),
  phone: z.string().trim().optional().or(z.literal("")),
  sector: z.string().trim().min(1, "Select an industry / sector"),
  apprenticeCount: z.string().trim().min(1, "Select a range"),
  message: z.string().trim().optional().or(z.literal("")),
  company_website: z.string().max(0).optional().or(z.literal("")),
});
export type ApprenticeshipInput = z.infer<typeof apprenticeshipSchema>;
