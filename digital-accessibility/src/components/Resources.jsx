import React from "react";
import { FileText, Download } from "lucide-react";

const resources = [
  {
    category: "Legal Mandate",
    document: "SEBI Circular – Digital Accessibility Compliance",
    link: "https://cdnbbsr.s3waas.gov.in/s3e58aea67b01fa747687f038dfde066f6/uploads/2025/02/20250207186084055.pdf",
    iconColor: "text-blue-600",
  },
  {
    category: "Indian Legislation",
    document: "Rights of Persons with Disabilities Act 2016",
    link: "https://your-link-here.com/rpwd-act.pdf",
    iconColor: "text-green-600",
  },
  {
    category: "Implementation Rules",
    document: "RPwD Rules 2017 – Implementation Framework",
    link: "https://your-link-here.com/rpwd-rules.pdf",
    iconColor: "text-purple-600",
  },
  {
    category: "Global Standard",
    document: "WCAG 2.1 Guidelines – W3C Standards",
    link: "https://your-link-here.com/wcag-21.pdf",
    iconColor: "text-orange-600",
  },
  {
    category: "National Guideline",
    document: "GIGW 3.0 Accessibility Standards – MeitY",
    link: "https://your-link-here.com/gigw-3.pdf",
    iconColor: "text-teal-600",
  },
  {
    category: "Bureau of Indian Standards",
    document: "IS 17802 (Parts 1 & 2) – Accessibility for ICT Products",
    link: "https://your-link-here.com/is17802.pdf",
    iconColor: "text-red-600",
  },
];

export default function ProfessionalResources() {
  return (
    <section 
      id="resources" 
      className="py-24 bg-gradient-to-b from-white to-gray-50" 
      aria-labelledby="resources-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2
            id="resources-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Access All Official Resources & Compliance Downloads
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Direct access to official circulars, acts, standards, and national guidelines
            essential for digital accessibility compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 
                         shadow-sm hover:shadow-xl transition-all duration-300 
                         hover:-translate-y-1 hover:border-gray-300"
            >
              <div className="absolute top-6 right-6 p-2 rounded-lg bg-gray-50 
                              group-hover:bg-blue-50 transition-colors duration-300">
                <FileText className={`h-5 w-5 ${item.iconColor}`} />
              </div>

              <div className="pr-12">
                <p className={`text-xs font-bold uppercase tracking-wider ${item.iconColor} mb-3`}>
                  {item.category}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-6 min-h-[3.5rem]">
                  {item.document}
                </h3>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-semibold 
                             ${item.iconColor} hover:underline transition-all`}
                >
                  <Download className="h-4 w-4" /> View PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}