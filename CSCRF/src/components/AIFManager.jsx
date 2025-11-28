import React from "react";
import { CheckCircle2 } from "lucide-react";

const requirements = [
  "Appoint Designated Officer (DO) and vCISO (if outsourced)",
  "Classify critical systems and define governance responsibilities",
  "Conduct annual risk assessment and Board-approved Cyber Policy",
  "Onboard to Market-SOC or MSSP for continuous monitoring",
  "Schedule VAPT via CERT-In empanelled auditors and revalidate within 5 months",
  "Complete Cyber Audit (independent audit for non-self-certified REs)",
  "Run incident response drills; report incidents within 6 hours",
  "Conduct annual cybersecurity training for staff and vendors",
  "Maintain system logs for 2 years and review backups quarterly",
  "Include cybersecurity clauses in all vendor contracts",
  "Rotate auditors every 3 years and ensure Board review of security posture",
];

const AIFManager = () => {
  return (
    <section id="requirements" className="w-full bg-white py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
            What SEBI Now Expects From Every AIF Manager
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            11 mandatory cyber controls to implement, validate and document before the compliance deadline
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12">

          {/* Requirements */}
          <div className="grid gap-5">
            {requirements.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-5 p-6 rounded-xl bg-gradient-to-br from-white to-slate-50/40 border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {idx + 1}
                </div>

                {/* Requirement Text */}
                <p className="flex-1 text-gray-700 text-base md:text-lg leading-relaxed">
                  {item}
                </p>

                {/* Check Icon */}
                <CheckCircle2 className="w-6 h-6 text-gray-300 group-hover:text-indigo-500 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <button className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-600/50 hover:-translate-y-1 transition-all duration-300">
              Talk to an Expert Today
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIFManager;
