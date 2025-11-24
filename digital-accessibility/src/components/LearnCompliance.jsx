import React from "react";
import { Shield, FileCheck, Globe, Landmark, Book } from "lucide-react";

const items = [
  {
    title: "Rights of Persons with Disabilities Act, 2016 (RPwD Act) & Rules 2017",
    desc: "Defines mandatory accessibility requirements across digital platforms.",
    icon: <Shield className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "SEBI Circular No. SEBI/HO/ITD-1/ITD_VIAP/P/CIR/2025/111",
    desc: "Prescribes accessibility compliance for all SEBI-registered entities and investor-facing platforms.",
    icon: <FileCheck className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "WCAG 2.1 Guidelines (W3C Standards)",
    desc: "Global benchmarks for accessible design, navigation and interaction.",
    icon: <Globe className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "GIGW 3.0 Guidelines (MeitY)",
    desc: "India's national accessibility framework for all digital interfaces.",
    icon: <Landmark className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "IS 17802 (Parts 1 & 2) (BIS Standards)",
    desc: "Indian standards defining accessibility requirements and conformance methods.",
    icon: <Book className="h-8 w-8 text-blue-600" />,
  },
];

export default function LearnCompliance() {
  return (
    <section 
      id="learn-compliance" 
      className="py-24 bg-gradient-to-b from-gray-50 to-white" 
      aria-labelledby="learn-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2
            id="learn-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Learn the Standards That Define Accessibility Compliance
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Understand the legal and technical frameworks that every SEBI-regulated
            entity must follow.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 
                         shadow-sm hover:shadow-xl hover:border-blue-200 
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-xl bg-blue-50 group-hover:bg-blue-100 
                                transition-colors duration-300">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 
                       text-sm font-semibold text-white shadow-sm hover:bg-blue-500 
                       focus-visible:outline focus-visible:outline-2 
                       focus-visible:outline-offset-2 focus-visible:outline-blue-600
                       transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            View Official Circular
          </a>
        </div>
      </div>
    </section>
  );
}
