import React from "react";
import { Layers, BarChart3, ShieldCheck } from "lucide-react";

const CSCRFCategory = () => {
  const categories = [
    {
      title: "Self-Certified RE",
      aum: "≤ ₹3,000 Cr",
      scope: "Light-touch controls + self-attestation",
      icon: Layers,
    },
    {
      title: "Small-Size RE",
      aum: "₹3,000 – ₹10,000 Cr",
      scope: "Full CSCRF + Market SOC + Cyber Audit",
      icon: BarChart3,
    },
    {
      title: "Mid-Size RE",
      aum: "> ₹10,000 Cr",
      scope: "Enhanced governance + Board oversight",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="category" className="w-full bg-white py-20 px-6 flex justify-center">
      <div className="max-w-5xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-snug mb-4">
          Know Your CSCRF Category
        </h2>

        {/* Sub-head */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          Every AIF manager is classified each year, as of 31 March, based on total AUM
        </p>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              </div>

              <p className="text-sm font-medium text-indigo-700 mb-2">AUM Threshold:</p>
              <p className="text-base font-medium text-gray-800 mb-4">{item.aum}</p>

              <p className="text-sm font-medium text-indigo-700 mb-2">Scope of Compliance:</p>
              <p className="text-base text-gray-600 leading-relaxed">{item.scope}</p>
            </div>
          ))}
        </div>

     
        
      </div>
    </section>
  );
};

export default CSCRFCategory;
