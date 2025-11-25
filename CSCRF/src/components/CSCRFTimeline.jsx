import React from "react";
import { CalendarDays, CheckCircle2 } from "lucide-react";

const CSCRFTimeline = () => {
  const items = [
    {
      milestone: "Circular Issued",
      requirement: "CSCRF framework introduced",
      deadline: "20 Aug 2024",
    },
    {
      milestone: "Clarifications",
      requirement: "Classification & SOC onboarding guidelines",
      deadline: "Dec 2024",
    },
    {
      milestone: "Implementation Framework",
      requirement: "VAPT & Cyber Audit procedures",
      deadline: "Apr 2025",
    },
    {
      milestone: "Compliance Deadline",
      requirement: "Mandatory for all Category I & II AIFs",
      deadline: "31 Aug 2025",
    },
    {
      milestone: "Governance",
      requirement: "Annual cybersecurity policy, training, audit logs & board reporting",
      deadline: "Annual",
    },
  ];

  return (
    <section id="timeline" className="w-full py-16 bg-slate-50 px-6 flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-10">
          Track Every Deadline With Complete Clarity
        </h2>

        {/* Timeline Table */}
        <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-4 px-6 text-sm md:text-base font-medium">Milestone</th>
                <th className="py-4 px-6 text-sm md:text-base font-medium">Requirement</th>
                <th className="py-4 px-6 text-sm md:text-base font-medium">Deadline</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-slate-50 transition-all"
                >
                  <td className="py-4 px-6 font-medium text-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    {item.milestone}
                  </td>

                  <td className="py-4 px-6 text-slate-600">{item.requirement}</td>
                  <td className="py-4 px-6 text-slate-900 font-medium flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-indigo-600" />
                    {item.deadline}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CSCRFTimeline;
