import React from "react";
import { ArrowRight } from "lucide-react";

const features = [
  "Manage VAPT & Cyber Audits Seamlessly",
  "Enable SOC Integration & Continuous Monitoring",
  "Strengthen Governance With Pre-Built Toolkits",
  "Monitor Vendor & Cloud Compliance",
  "Train Teams and Vendors Automatically",
];

const CSCRFControlCentre = () => {
  return (
    <section id="platform" className="w-full  py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Taghash As Your CSCRF Control Centre
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Automate Every SEBI Requirement
          </p>
        </div>

        {/* Feature Cards */}
        <div className="
          grid gap-6 md:grid-cols-2
          bg-white/70 backdrop-blur-xl border border-white/50 
          rounded-3xl p-10 shadow-[0_8px_28px_rgba(0,0,0,0.08)]
        ">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="
                p-6 rounded-xl 
                bg-gradient-to-br from-white to-slate-50 
                border border-slate-200 shadow-sm
                hover:border-indigo-300 hover:shadow-md 
                transition-all duration-300
              "
            >
              <p className="text-lg text-slate-700 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="
            group inline-flex items-center justify-center gap-2
            px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl
            bg-gradient-to-r from-blue-600 to-blue-800
            hover:from-blue-700 hover:to-blue-900
            text-white font-medium
            shadow-2xl shadow-blue-500/50
            hover:shadow-blue-600/70 hover:-translate-y-1
            transition-all duration-300
          ">
            Explore Platform Modules
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CSCRFControlCentre;
