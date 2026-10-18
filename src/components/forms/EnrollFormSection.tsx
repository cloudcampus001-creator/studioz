"use client";

import { useSearchParams } from "next/navigation";
import { EnrollForm } from "@/components/forms/EnrollForm";

export function EnrollFormSection() {
  const searchParams = useSearchParams();
  const program = searchParams.get("program") ?? undefined;
  return <EnrollForm defaultProgram={program} />;
}
