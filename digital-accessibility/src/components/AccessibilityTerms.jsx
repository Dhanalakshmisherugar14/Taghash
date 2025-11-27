import React from "react";
import { BookOpen, Info, CheckCircle2 } from "lucide-react";

const terms = [
  {
    term: "WCAG",
    concept: "Global web accessibility guidelines (2.1)",
  },
  {
    term: "IAAP",
    concept: "Certification body for accessibility professionals",
  },
  {
    term: "GIGW",
    concept: "India's national web accessibility framework",
  },
  {
    term: "RPwD Act",
    concept: "Mandates equal digital access for persons with disabilities",
  },
  {
    term: "Tagged PDF",
    concept: "Structured, screen-reader-friendly PDF format",
  },
];

const whyActNow = [
  "Ensure your investor platforms are usable by all, not just some.",
  "Reduce compliance risk and meet SEBI's accessibility expectations consistently.",
  "Turn accessibility into a strategic trust signal for your brand.",
  "Avoid expensive last-minute remediation and reputational fallout.",
];

export default function AccessibilityTerms() {
  return (
    <section id="accessibility-terms" className="py-24 bg-gray-50" aria-labelledby="terms-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            id="terms-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
          >
            Understand Key Accessibility Terms
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A quick reference to essential concepts used in digital accessibility compliance.
          </p>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {terms.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-50 mt-0.5">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.term}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-11">{item.concept}</p>
            </div>
          ))}
        </div>

        {/* Why Act Now Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Act Now
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            {whyActNow.map((point, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm 
                           hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl font-medium transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/70 hover:-translate-y-1"
            >
              Schedule Your Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}