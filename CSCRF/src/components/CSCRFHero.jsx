import React from "react";
import { Shield, ArrowRight, FileText } from "lucide-react";

const CSCRFHero = () => {
  return (
    <section id="overview" className="w-full bg-white">
      
      <div className="pt-8 pb-20 px-6 flex justify-center">
        <div className="max-w-5xl w-full">

          {/* Center Heading Block (Your New Version) */}
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
              Why To Comply With SEBI’s New Cybersecurity Framework
            </h2>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              CSCRF is now <span className="">mandatory</span> for all Category I and II AIF Managers
            </p>
          </div>

          {/* Requirements Section */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              
              {/* Key Requirements */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 text-center">
                Every fund must implement structured cyber controls across 
                <span className="font-medium text-gray-900"> VAPT</span>, 
                <span className="font-medium text-gray-900"> SOC monitoring</span>, 
                <span className="font-medium text-gray-900"> governance</span> and 
                <span className="font-medium text-gray-900"> incident response</span>.
              </p>

              {/* Regulatory Reference */}
              <div className="bg-indigo-50/50 rounded-xl p-5 border border-indigo-100 mb-6">
                <div className="flex items-start gap-3">

                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Based on <span className="font-semibold text-gray-800">
                      SEBI Circular No. SEBI/HO/ITD/ITD_VAPT/P/CIR/2024/113
                    </span> (20 Aug 2024) with clarifications issued in December 2024 and April 2025 on classification and implementation
                  </p>
                </div>
              </div>

              {/* Taghash Solution */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
                  <span className="">Taghash</span> provides everything from policy implementation and VAPT scheduling to audit documentation and overall monitoring for end-to-end compliance
                </p>
              </div>

            </div>
          </div>

          {/* CTA */}
          

        </div>
      </div>
    </section>
  );
};

export default CSCRFHero;
