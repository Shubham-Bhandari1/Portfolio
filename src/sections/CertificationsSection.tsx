"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="// CREDENTIALS & MASTERY"
          title="Verified Industry"
          gradientText="Certifications"
          subtitle="Accredited certifications validating full-stack software development and modern engineering capabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="w-full"
            >
              <GlassCard
                enableTilt
                glowColor="purple"
                className="h-full flex flex-col justify-between p-6 sm:p-7 border border-white/10 hover:border-purple-500/40"
              >
                <div>
                  {/* Issuer & Date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-cyan-300 font-medium">
                        {cert.issuer}
                      </span>
                    </div>

                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      {cert.date || "Verified"}
                    </span>
                  </div>

                  {/* Cert Title */}
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {cert.name}
                  </h3>

                  {/* Credential ID if present */}
                  {cert.credentialId ? (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-slate-300 mb-4">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-300 mb-4">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Verified Credential</span>
                    </div>
                  )}

                  {/* Skills Validated */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
                      Skills Validated
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsGained.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-800/80 border border-white/10 text-[11px] text-slate-200"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Certificate Button */}
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <NeonButton
                    href={cert.credentialUrl}
                    target="_blank"
                    size="sm"
                    variant="outline"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                    iconPosition="right"
                    className="w-full justify-center"
                  >
                    Verify Certificate
                  </NeonButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
