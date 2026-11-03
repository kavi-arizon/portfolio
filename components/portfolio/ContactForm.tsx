"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { ContactPayload, ContactApiResponse } from "@/types/portfolio";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactPayload>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please enter your name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Please write a message with at least 10 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "idle", message: "" });
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ContactApiResponse = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Thank you! Your message has been sent successfully.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to submit message. Please try again or email directly.",
        });
        if (data.errors) {
          setFieldErrors(data.errors);
        }
      }
    } catch (err) {
      console.error("Form submission failed", err);
      setStatus({
        type: "error",
        message: "Network connection error. Please try again or email directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl bg-charcoal-850 border border-white/[0.08] shadow-editorial-card space-y-5"
      noValidate
      aria-label="Contact inquiry form"
    >
      {/* Honeypot Spam Protection Field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-hp">Leave this field blank</label>
        <input
          type="text"
          id="website-hp"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        />
      </div>

      {/* Name Field */}
      <div>
        <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
          Your Name <span className="text-forest-400">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          required
          disabled={loading}
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: "" });
          }}
          placeholder="e.g. Alex Johnson"
          className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
            fieldErrors.name
              ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
              : "border-white/[0.08] focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30"
          }`}
        />
        {fieldErrors.name && (
          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1" role="alert">
            <AlertCircle size={12} />
            <span>{fieldErrors.name}</span>
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
          Your Email Address <span className="text-forest-400">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          required
          disabled={loading}
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: "" });
          }}
          placeholder="alex@example.com"
          className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
            fieldErrors.email
              ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
              : "border-white/[0.08] focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30"
          }`}
        />
        {fieldErrors.email && (
          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1" role="alert">
            <AlertCircle size={12} />
            <span>{fieldErrors.email}</span>
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
          Subject <span className="text-slate-500 text-xs font-normal">(optional)</span>
        </label>
        <input
          type="text"
          id="contact-subject"
          disabled={loading}
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Project Inquiry / Full-Stack Role"
          className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/[0.08] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-colors"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
          Message <span className="text-forest-400">*</span>
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          disabled={loading}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: "" });
          }}
          placeholder="Hi Kaviyarasu, I would like to discuss an opportunity or project..."
          className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors resize-none ${
            fieldErrors.message
              ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
              : "border-white/[0.08] focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30"
          }`}
        />
        {fieldErrors.message && (
          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1" role="alert">
            <AlertCircle size={12} />
            <span>{fieldErrors.message}</span>
          </p>
        )}
      </div>

      {/* Status Feedback Banner */}
      {status.type === "success" && (
        <div className="p-4 rounded-xl bg-forest-950/40 border border-forest-500/40 text-forest-300 text-sm flex items-start gap-2.5 animate-fade-in" role="status">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-forest-400" />
          <span>{status.message}</span>
        </div>
      )}

      {status.type === "error" && (
        <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-sm flex items-start gap-2.5 animate-fade-in" role="alert">
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-rose-400" />
          <span>{status.message}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-forest-600 hover:bg-forest-500 text-white font-medium text-sm transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send size={16} />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
