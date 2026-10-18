"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apprenticeshipSchema, ApprenticeshipInput } from "@/lib/validations";
import { FormRow, TextInput, TextArea, Select, Honeypot, SuccessBanner, ErrorBanner } from "@/components/forms/fields";
import { ButtonAction } from "@/components/ui/Button";
import { apprenticeshipsContent } from "@/lib/content";
import { Loader2 } from "lucide-react";

const apprenticeCountRanges = ["1–2 apprentices", "3–5 apprentices", "6–10 apprentices", "10+ apprentices"];

export function ApprenticeshipForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApprenticeshipInput>({ resolver: zodResolver(apprenticeshipSchema) });

  async function onSubmit(data: ApprenticeshipInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/apprenticeship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <SuccessBanner>
        Thanks for your interest in partnering with us — our partnerships team will reach out within 2 business days.
      </SuccessBanner>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Honeypot inputProps={register("company_website")} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormRow label="Company / organisation name" htmlFor="companyName" required error={errors.companyName?.message}>
          <TextInput id="companyName" hasError={!!errors.companyName} {...register("companyName")} />
        </FormRow>
        <FormRow label="Contact person" htmlFor="contactName" required error={errors.contactName?.message}>
          <TextInput id="contactName" hasError={!!errors.contactName} {...register("contactName")} />
        </FormRow>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormRow label="Work email address" htmlFor="email" required error={errors.email?.message}>
          <TextInput id="email" type="email" hasError={!!errors.email} {...register("email")} />
        </FormRow>
        <FormRow label="Phone number" htmlFor="phone" error={errors.phone?.message}>
          <TextInput id="phone" type="tel" hasError={!!errors.phone} {...register("phone")} />
        </FormRow>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormRow label="Industry / sector" htmlFor="sector" required error={errors.sector?.message}>
          <Select id="sector" hasError={!!errors.sector} defaultValue="" {...register("sector")}>
            <option value="" disabled>
              Select a sector
            </option>
            {apprenticeshipsContent.partners.sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </FormRow>
        <FormRow label="How many apprentices can you host?" htmlFor="apprenticeCount" required error={errors.apprenticeCount?.message}>
          <Select id="apprenticeCount" hasError={!!errors.apprenticeCount} defaultValue="" {...register("apprenticeCount")}>
            <option value="" disabled>
              Select a range
            </option>
            {apprenticeCountRanges.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </Select>
        </FormRow>
      </div>

      <FormRow label="Tell us about your business and hiring needs" htmlFor="message" error={errors.message?.message}>
        <TextArea id="message" hasError={!!errors.message} placeholder="Optional — anything that helps us match you well" {...register("message")} />
      </FormRow>

      {status === "error" && <ErrorBanner>Something went wrong. Please try again in a moment.</ErrorBanner>}

      <ButtonAction type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" && <Loader2 className="size-4 animate-spin" aria-hidden />}
        {status === "submitting" ? "Submitting…" : "Submit Inquiry"}
      </ButtonAction>
    </form>
  );
}
