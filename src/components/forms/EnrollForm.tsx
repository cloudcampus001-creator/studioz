"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enrollSchema, EnrollInput } from "@/lib/validations";
import { FormRow, TextInput, TextArea, Select, Honeypot, SuccessBanner, ErrorBanner } from "@/components/forms/fields";
import { ButtonAction } from "@/components/ui/Button";
import { programs, enrollContent } from "@/lib/content";
import { Loader2 } from "lucide-react";

export function EnrollForm({ defaultProgram }: { defaultProgram?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnrollInput>({
    resolver: zodResolver(enrollSchema),
    defaultValues: { program: defaultProgram ?? "" },
  });

  async function onSubmit(data: EnrollInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/enroll", {
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
        Application received! Our admissions team will reach out within 3 business days.
      </SuccessBanner>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Honeypot inputProps={register("company_website")} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormRow label="First name" htmlFor="firstName" required error={errors.firstName?.message}>
          <TextInput id="firstName" hasError={!!errors.firstName} {...register("firstName")} />
        </FormRow>
        <FormRow label="Last name" htmlFor="lastName" required error={errors.lastName?.message}>
          <TextInput id="lastName" hasError={!!errors.lastName} {...register("lastName")} />
        </FormRow>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormRow label="Email address" htmlFor="email" required error={errors.email?.message}>
          <TextInput id="email" type="email" hasError={!!errors.email} {...register("email")} />
        </FormRow>
        <FormRow label="Phone number" htmlFor="phone" required error={errors.phone?.message}>
          <TextInput id="phone" type="tel" hasError={!!errors.phone} {...register("phone")} />
        </FormRow>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormRow label="Date of birth" htmlFor="dob" required error={errors.dob?.message}>
          <TextInput id="dob" type="date" hasError={!!errors.dob} {...register("dob")} />
        </FormRow>
        <FormRow label="Program" htmlFor="program" required error={errors.program?.message}>
          <Select id="program" hasError={!!errors.program} defaultValue={defaultProgram ?? ""} {...register("program")}>
            <option value="" disabled>
              Choose a program
            </option>
            {programs.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </Select>
        </FormRow>
      </div>

      <FormRow label="How did you hear about us?" htmlFor="hearAbout" error={errors.hearAbout?.message}>
        <Select id="hearAbout" hasError={!!errors.hearAbout} defaultValue="" {...register("hearAbout")}>
          <option value="">Prefer not to say</option>
          {enrollContent.form.hearAboutOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
      </FormRow>

      <FormRow label="Why do you want to join this program?" htmlFor="motivation" required error={errors.motivation?.message}>
        <TextArea id="motivation" hasError={!!errors.motivation} placeholder="Tell us a bit about yourself and your goals…" {...register("motivation")} />
      </FormRow>

      {status === "error" && <ErrorBanner>Something went wrong. Please try again in a moment.</ErrorBanner>}

      <p className="text-xs text-ink/50">{enrollContent.form.note}</p>

      <ButtonAction type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" && <Loader2 className="size-4 animate-spin" aria-hidden />}
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </ButtonAction>
    </form>
  );
}
