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
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
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
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white 
                       px-8 py-4 rounded-xl text-base font-semibold shadow-lg 
                       hover:bg-blue-500 hover:-translate-y-1 hover:shadow-xl
                       transition-all duration-300 focus-visible:outline 
                       focus-visible:outline-2 focus-visible:outline-offset-2 
                       focus-visible:outline-blue-600"
          >
            Book Your Accessibility Audit
            <ArrowRight className="h-5 w-5" />
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 
                       border-gray-300 text-gray-900 px-8 py-4 rounded-xl text-base 
                       font-semibold shadow-sm hover:bg-gray-50 hover:border-gray-400
                       hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            Talk to a Compliance Specialist
            <Users className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
