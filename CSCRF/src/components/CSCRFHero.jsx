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
              Stay Fully Compliant With SEBI's New Cybersecurity Framework
            </h2>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              CSCRF is now <span className="">mandatory</span> for all Category I and II AIF Managers.
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
                    </span> (20 Aug 2024) with clarifications issued in December 2024 and April 2025 on classification and implementation.
                  </p>
                </div>
              </div>

              {/* Taghash Solution */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
                  <span className="">Taghash</span> centralises everything from policy automation, VAPT scheduling, audit documentation to real-time monitoring in 
                  <span className="font-medium text-gray-900"> one secure workspace</span>.
                </p>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button
              className="
                group inline-flex items-center justify-center gap-2
                px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl
                bg-gradient-to-r from-blue-600 to-blue-800
                hover:from-blue-700 hover:to-blue-900
                text-white font-medium
                shadow-2xl shadow-blue-500/50
                hover:shadow-blue-600/70 hover:-translate-y-1
                transition-all duration-300
              "
            >
              Request a Demo
              
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CSCRFHero;
