import React from "react";
import { ArrowRight } from "lucide-react";

const CSCRFDeadline = () => {
  return (
    <section className="w-full bg-blue-600 py-20 px-6 flex justify-center">
      <div className="max-w-5xl w-full">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug mb-4">
            Stay Compliant Ahead of SEBI’s CSCRF Deadline
          </h2>
          <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Get a personalised view of where you stand on CSCRF readiness
            <br className="hidden md:block" />
            Receive a clear, step by step roadmap to reach and maintain full compliance before the regulatory cut off
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

          {/* Button 1 */}
          <button className="
            group inline-flex items-center justify-center gap-2
            px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl
            bg-white text-blue-600
            hover:bg-blue-50
            font-medium
            shadow-lg
            hover:shadow-xl hover:-translate-y-1
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
