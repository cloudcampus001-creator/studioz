"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactInput } from "@/lib/validations";
import { FormRow, TextInput, TextArea, Select, Honeypot, SuccessBanner, ErrorBanner } from "@/components/forms/fields";
import { ButtonAction } from "@/components/ui/Button";
import { contactContent } from "@/lib/content";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
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
    return <SuccessBanner>Thanks for reaching out — we&apos;ll reply within 1–2 business days.</SuccessBanner>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Honeypot inputProps={register("company_website")} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormRow label="Full name" htmlFor="name" required error={errors.name?.message}>
          <TextInput id="name" hasError={!!errors.name} placeholder="Jane Doe" {...register("name")} />
        </FormRow>
        <FormRow label="Email address" htmlFor="email" required error={errors.email?.message}>
          <TextInput id="email" type="email" hasError={!!errors.email} placeholder="you@example.com" {...register("email")} />
        </FormRow>
      </div>

      <FormRow label="Subject" htmlFor="subject" required error={errors.subject?.message}>
        <Select id="subject" hasError={!!errors.subject} defaultValue="" {...register("subject")}>
          <option value="" disabled>
            Choose a subject
          </option>
          {contactContent.form.subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
      </FormRow>

      <FormRow label="Message" htmlFor="message" required error={errors.message?.message}>
        <TextArea id="message" hasError={!!errors.message} placeholder="How can we help?" {...register("message")} />
      </FormRow>

      {status === "error" && <ErrorBanner>Something went wrong. Please try again in a moment.</ErrorBanner>}

      <ButtonAction type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" && <Loader2 className="size-4 animate-spin" aria-hidden />}
        {status === "submitting" ? "Sending…" : "Send Message"}
      </ButtonAction>
    </form>
  );
}
