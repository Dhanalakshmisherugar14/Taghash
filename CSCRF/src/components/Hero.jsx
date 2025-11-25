import React from 'react';
import { ShieldCheck, ArrowRight, Shield } from 'lucide-react';

const Hero = () => {
  const heading = "Cybersecurity & Cyber Resilience Compliance for AIF Managers";
  const subHead =
    "Taghash helps you manage each control with tasks, ownership, evidence tracking and automated reminders — ensuring end-to-end CSCRF compliance.";
  const ctaText = "Start Your CSCRF Assessment";

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-start justify-center text-gray-900 bg-gradient-to-b from-slate-50 to-white px-4 pt-20 pb-32"
    >
      <div className="max-w-5xl w-full mx-auto text-center">
        

        {/* 🔼 Badge moved up */}
        <div className="mt-0 mb-10 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-slate-800 tracking-wide">
              Taghash Compliance Platform
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight max-w-5xl mx-auto mb-6">
          {heading}
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          {subHead}
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => console.log("CTA Clicked")}
            className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/70 hover:-translate-y-1 transition-all duration-300"
          >
            <ShieldCheck className="w-5 h-5" />
            {ctaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
