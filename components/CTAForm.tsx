"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Clock3, LockKeyhole } from "lucide-react";
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
    <section id="guide-form" className="navy-grid relative scroll-mt-4 overflow-hidden bg-[var(--navy)] py-20 sm:py-28">
      <div aria-hidden="true" className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="site-shell">
        <div className="grid overflow-hidden rounded-[30px] border border-white/10 bg-[#102948] shadow-[0_36px_100px_rgba(0,0,0,0.25)] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative flex flex-col justify-between p-7 text-white sm:p-10 lg:p-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-300">Your next step</p>
              <h2 className="heading-balance mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{content.form.heading}</h2>
              <p className="copy-balance mt-5 text-[15px] font-medium leading-8 text-blue-100 sm:text-base">{content.form.subtext}</p>

              <div className="mt-9 space-y-4">
                <FormBenefit icon={<Clock3 size={18} />} text="Takes less than a minute" />
                <FormBenefit icon={<CheckCircle2 size={18} />} text="Clear, practical guidance" />
                <FormBenefit icon={<LockKeyhole size={18} />} text={content.form.trust} />
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-sm leading-7 text-slate-300">
              <span className="font-extrabold text-white">{content.hero.guideTitle}</span><br />
              {content.hero.guideLabel}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="grid gap-6 bg-[var(--paper)] p-6 sm:grid-cols-2 sm:p-10 lg:p-12">
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

function FormBenefit({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm font-bold text-blue-50">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-300">{icon}</span>
      {text}
    </div>
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
