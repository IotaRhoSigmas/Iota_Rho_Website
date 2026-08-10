"use client";

import type { FormEvent } from "react";
import { Mail, Send } from "lucide-react";

const CHAPTER_EMAIL = "immortalsigmas@gmail.com";

export default function ContactForm() {
  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Iota Rho website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${CHAPTER_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={sendEmail} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-white/90">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
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
          maxLength={3000}
          rows={6}
          className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20"
          placeholder="Tell us how we can help or how you would like to connect."
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Email
      </button>

      <p className="flex items-center gap-2 text-xs leading-5 text-white/45">
        <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
        This opens your email app with your message ready to send.
      </p>
      <p className="text-xs leading-5 text-white/45">
        Your information is not submitted to or stored by this website.
      </p>
    </form>
  );
}
