import React from "react";
import { ShieldCheck, Users, ArrowRight } from "lucide-react";

export default function AccessibleCompliant() {
  return (
    <section 
      id="accessible-compliant" 
      className="py-24 bg-blue-600" 
      aria-labelledby="accessible-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        <h2
          id="accessible-heading"
          className="text-3xl md:text-4xl font-semibold text-white leading-snug"
        >
          Accessible. Compliant. Investor-first.
        </h2>

        <p className="mt-6 text-lg text-blue-50 max-w-3xl mx-auto leading-relaxed">
          Taghash helps SEBI-regulated funds, intermediaries and platforms stay on top of their accessibility obligations.
        </p>
        <p className="mt-3 text-base text-blue-50 max-w-3xl mx-auto">
          We also enable you to organise, track and evidence inclusive digital experiences for all investors.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="bg-white text-blue-600 px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Book Your Accessibility Audit
          </a>

          <a
            href="#"
            className="bg-transparent border border-white text-white px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl font-medium transition-all duration-300 hover:bg-white hover:text-blue-600 hover:-translate-y-1"
          >
            Talk to a Compliance Specialist
          </a>
        </div>
      </div>
    </section>
  );
}
