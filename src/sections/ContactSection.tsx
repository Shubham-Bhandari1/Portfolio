"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, User, AtSign, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const errs: typeof errors = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email format";
    }
    if (!formData.message.trim()) {
      errs.message = "Please enter your message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#00f2fe", "#a855f7", "#10b981", "#ffffff"],
      });

      // Clear form
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="// SECURE TRANSMISSION"
          title="Let's Build Something"
          gradientText="Amazing Together"
          subtitle="Have an exciting project, open role, or technical collaboration? Send an encrypted transmission or reach out through my direct channels."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info & Connect Channels */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-6 sm:p-8 space-y-6 border border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  Direct Communication Channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  I typically respond within 12 hours. Feel free to contact me for full-stack engineering roles, data analytics projects, or technical opportunities.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email with Direct Click & Copy */}
                <div className="p-4 rounded-xl bg-white/[0.03] hover:bg-cyan-500/10 border border-white/[0.06] hover:border-cyan-500/30 transition-all group flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="flex items-center gap-3.5 overflow-hidden flex-1"
                    aria-label="Send direct email"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">Email Address</span>
                      <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate block">
                        {PORTFOLIO_DATA.personal.email}
                      </span>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-cyan-400"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-purple-500/10 border border-white/[0.06] hover:border-purple-500/30 transition-all group focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">LinkedIn Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      shubham-bhandari
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/[0.06] hover:border-white/20 transition-all group focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">GitHub Repositories</span>
                    <span className="text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                      Shubham-Bhandari1
                    </span>
                  </div>
                </a>
              </div>

              {/* Status Badge */}
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs text-cyan-200 leading-snug">
                  Current Status: <strong>{PORTFOLIO_DATA.personal.availability}</strong>
                </span>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Interactive Futuristic Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-8 md:p-10 border border-cyan-500/30 relative">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                Send Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Fill in the details below to initiate direct communication.
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 my-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Transmission Successful!</h4>
                  <p className="text-sm text-slate-200 max-w-md mx-auto">
                    Thank you for reaching out, Shubham will receive your message and respond shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono font-medium text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-200 uppercase tracking-wider mb-2">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="John Doe"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.name
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500/40"
                            : "border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p id="name-error" className="flex items-center gap-1 text-xs text-rose-400 mt-1.5 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-200 uppercase tracking-wider mb-2">
                      Your Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <AtSign className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="john@company.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.email
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500/40"
                            : "border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p id="email-error" className="flex items-center gap-1 text-xs text-rose-400 mt-1.5 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-200 uppercase tracking-wider mb-2">
                      Message / Opportunity Details <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Tell me about your team, project, or role..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none ${
                          errors.message
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500/40"
                            : "border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p id="message-error" className="flex items-center gap-1 text-xs text-rose-400 mt-1.5 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <NeonButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    icon={
                      isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                    iconPosition="right"
                    className="w-full justify-center mt-2"
                  >
                    {isSubmitting ? "Transmitting..." : "Send Encrypted Message"}
                  </NeonButton>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
