import React from "react";
import { ShieldCheck, Users, ArrowRight } from "lucide-react";

export default function AccessibleCompliant() {
  return (
    <section 
      id="accessible-compliant" 
      className="py-24 bg-gradient-to-b from-gray-50 to-white" 
      aria-labelledby="accessible-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        <h2
          id="accessible-heading"
          className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
        >
          Accessible. Compliant. Investor-first.
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Taghash helps SEBI-regulated funds, intermediaries and platforms stay on top of their
          accessibility obligations.
        </p>
        <p className="mt-3 text-base text-gray-600 max-w-3xl mx-auto">
          We also enable you to organise, track and evidence inclusive digital experiences
          for all investors.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl font-medium transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/70 hover:-translate-y-1"
          >
            Start Your Accessibility Audit
          </a>

          <a
            href="#"
            className="bg-white text-gray-900 border border-gray-200 px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1"
          >
            Schedule Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
