"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Mail, Send } from "lucide-react";

type SubmissionState =
  | { status: "idle" | "sending" }
  | { status: "success"; reference?: string }
  | { status: "error"; message: string };

export default function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const website = String(form.get("website") ?? "").trim();

    setSubmission({ status: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });
      const result = (await response.json().catch(() => null)) as {
        error?: string;
        reference?: string;
      } | null;

      if (!response.ok) {
        throw new Error(result?.error || "Your message could not be sent. Please try again.");
      }

      formElement.reset();
      setSubmission({ status: "success", reference: result?.reference });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your message could not be sent. Please try again.",
      });
    }
  };

  const isSending = submission.status === "sending";

  return (
    <form onSubmit={sendEmail} className="space-y-5">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-medium text-white/90">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={isSending}
          maxLength={100}
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-white/90">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={isSending}
          maxLength={254}
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-white/90">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={isSending}
          maxLength={3000}
          rows={6}
          className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20"
          placeholder="Tell us how we can help or how you would like to connect."
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {isSending ? (
          <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-4 w-4" aria-hidden="true" />
        )}
        {isSending ? "Sending…" : "Send Message"}
      </button>

      <div aria-live="polite" aria-atomic="true">
        {submission.status === "success" && (
          <div className="flex items-start gap-3 rounded-xl border border-emerald-400/25 bg-emerald-500/10 p-4 text-sm text-emerald-100" role="status">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
            <p>
              <span className="block font-semibold">Message sent successfully.</span>
              The chapter has received your inquiry. We’ll reply to the email you provided.
              {submission.reference && (
                <span className="mt-1 block text-xs text-emerald-200/65">
                  Confirmation: {submission.reference}
                </span>
              )}
            </p>
          </div>
        )}

        {submission.status === "error" && (
          <div className="flex items-start gap-3 rounded-xl border border-red-400/25 bg-red-500/10 p-4 text-sm text-red-100" role="alert">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-300" aria-hidden="true" />
            <p>{submission.message}</p>
          </div>
        )}
      </div>

      <p className="flex items-center gap-2 text-xs leading-5 text-white/45">
        <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
        Your message is securely sent to the chapter email. Your email address is used for replies.
      </p>
    </form>
  );
}
