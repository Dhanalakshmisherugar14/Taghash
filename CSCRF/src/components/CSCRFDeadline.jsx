import React from "react";
import { ArrowRight } from "lucide-react";

const CSCRFDeadline = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-20 px-6 flex justify-center">
      <div className="max-w-5xl w-full">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug mb-4">
            Stay Compliant Ahead of SEBI’s CSCRF Deadline
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a personalised view of where you stand on CSCRF readiness.
            <br />
            Receive a clear, step by step roadmap to reach and maintain full compliance before the regulatory cut off.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

          {/* Button 1 */}
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
            Book CSCRF Consultation
           
          </button>

        </div>

      </div>
    </section>
  );
};

export default CSCRFDeadline;
