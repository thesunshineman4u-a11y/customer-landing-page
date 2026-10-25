"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { content } from "@/lib/content";

type FormValues = {
  fullName: string;
  email: string;
  mobile: string;
  interest: string;
  city: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  mobile: "",
  interest: "",
  city: "",
  message: "",
};

export function CTAForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    if (submitError) setSubmitError("");
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!values.fullName.trim()) nextErrors.fullName = content.form.errors.fullName;
    if (!values.email.trim()) nextErrors.email = content.form.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = content.form.errors.emailInvalid;
    if (!values.mobile.trim()) nextErrors.mobile = content.form.errors.mobile;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting || !validate()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error("Form submission failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 650));
      }
      window.location.assign("/thank-you");
    } catch {
      setSubmitError(content.form.submitError);
      setIsSubmitting(false);
    }
  };

  const fieldError = (field: keyof FormValues) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-2 text-sm font-semibold text-red-700" role="alert">
        {errors[field]}
      </p>
    ) : null;

  return (
    <section id="guide-form" className="relative scroll-mt-4 py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#fff7f1_46%,#f4f7fc_100%)]" />
      <div className="site-shell">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[32px] border border-white bg-white shadow-[0_28px_90px_rgba(15,23,42,0.13)]">
          <div className="bg-[linear-gradient(135deg,var(--secondary),#124fa8)] px-5 py-10 text-center text-white sm:px-10 sm:py-12">
            <h2 className="heading-balance text-4xl font-black tracking-[-0.04em] sm:text-5xl">{content.form.heading}</h2>
            <p className="copy-balance mx-auto mt-3 max-w-xl text-[15px] font-medium leading-7 text-blue-100 sm:text-base">{content.form.subtext}</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="grid gap-6 p-5 sm:grid-cols-2 sm:p-10">
            <FormField label={content.form.fields.fullName.label} required htmlFor="fullName">
              <input id="fullName" name="fullName" required autoComplete="name" className="field-control" placeholder={content.form.fields.fullName.placeholder} value={values.fullName} onChange={(e) => update("fullName", e.target.value)} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} />
              {fieldError("fullName")}
            </FormField>

            <FormField label={content.form.fields.email.label} required htmlFor="email">
              <input id="email" name="email" type="email" required inputMode="email" autoComplete="email" className="field-control" placeholder={content.form.fields.email.placeholder} value={values.email} onChange={(e) => update("email", e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
              {fieldError("email")}
            </FormField>

            <FormField label={content.form.fields.mobile.label} required htmlFor="mobile">
              <input id="mobile" name="mobile" type="tel" required inputMode="tel" autoComplete="tel" className="field-control" placeholder={content.form.fields.mobile.placeholder} value={values.mobile} onChange={(e) => update("mobile", e.target.value)} aria-invalid={Boolean(errors.mobile)} aria-describedby={errors.mobile ? "mobile-error" : undefined} />
              {fieldError("mobile")}
            </FormField>

            <FormField label={content.form.fields.interest.label} htmlFor="interest">
              <select id="interest" name="interest" className="field-control" value={values.interest} onChange={(e) => update("interest", e.target.value)}>
                <option value="">{content.form.fields.interest.placeholder}</option>
                {content.form.fields.interest.options.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </FormField>

            <FormField label={content.form.fields.city.label} htmlFor="city" className="sm:col-span-2">
              <input id="city" name="city" autoComplete="address-level2" className="field-control" placeholder={content.form.fields.city.placeholder} value={values.city} onChange={(e) => update("city", e.target.value)} />
            </FormField>

            <FormField label={content.form.fields.message.label} htmlFor="message" className="sm:col-span-2">
              <textarea id="message" name="message" className="field-control" placeholder={content.form.fields.message.placeholder} value={values.message} onChange={(e) => update("message", e.target.value)} />
            </FormField>

            <div className="sm:col-span-2">
              {submitError ? <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-bold text-red-700" role="alert">{submitError}</p> : null}
              <button type="submit" disabled={isSubmitting} className="cta-button w-full">
                {isSubmitting ? content.form.loading : content.form.button}
                {!isSubmitting ? <ArrowRight aria-hidden="true" size={19} strokeWidth={2.5} /> : null}
              </button>
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-medium text-[var(--muted)]">
                <LockKeyhole aria-hidden="true" size={14} />
                {content.form.trust}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, required = false, htmlFor, className = "", children }: { label: string; required?: boolean; htmlFor: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-extrabold text-[var(--text)]">
        {label}{required ? <span className="ml-1 text-[var(--primary)]" aria-hidden="true">*</span> : null}
      </label>
      {children}
    </div>
  );
}
