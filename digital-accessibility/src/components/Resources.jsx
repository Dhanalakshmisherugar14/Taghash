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
    link: "https://www.indiacode.nic.in/bitstream/123456789/15939/1/the_rights_of_persons_with_disabilities_act%2C_2016.pdf",
    iconColor: "text-blue-600",
  },
  {
    category: "Implementation Rules",
    document: "RPwD Rules 2017 – Implementation Framework",
    link: "https://upload.indiacode.nic.in/showfile?actid=AC_CEN_25_54_00002_201649_1517807328299&filename=Rules_notified_15.06.pdf&type=rule",
    iconColor: "text-blue-600",
  },
  {
    category: "Global Standard",
    document: "WCAG 2.1 Guidelines – W3C Standards",
    link: "https://www.w3.org/TR/WCAG21/",
    iconColor: "text-blue-600",
  },
  {
    category: "National Guideline",
    document: "GIGW 3.0 Accessibility Standards – MeitY",
    link: "https://cdnbbsr.s3waas.gov.in/s3c92a10324374fac681719d63979d00fe/uploads/2023/04/2023041074.pdf",
    iconColor: "text-blue-600",
  },
  {
    category: "Bureau of Indian Standards",
    document: "IS 17802 (Parts 1 & 2) – Accessibility for ICT Products",
    link: "https://standardsbis.bsbedge.com/BIS_SearchStandard.aspx?id=0&keyword=Accessibility+for+the+ICT+Products+and+Services",
    iconColor: "text-blue-600",
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
            className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4"
          >
            Access All Official Resources & Compliance Downloads
          </h2>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 
                         shadow-sm hover:shadow-blue-500/50 hover:shadow-2xl
                         transition-all duration-300 hover:-translate-y-1"
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