import React from "react";

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
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
          Track Every Deadline With Complete Clarity
        </h2>

        {/* Timeline Table */}
        <div className="overflow-hidden rounded-3xl shadow-xl shadow-slate-200 bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="text-slate-700 bg-slate-100 text-sm">
              <tr>
                <th className="py-4 px-6 text-base md:text-lg font-bold">Milestone</th>
                <th className="py-4 px-6 text-base md:text-lg font-bold">Requirement</th>
                <th className="py-4 px-6 text-base md:text-lg font-bold">Deadline</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100"
                >
                  <td className="py-4 px-6 font-medium text-slate-500 flex items-center gap-2">

                    {item.milestone}
                  </td>

                  <td className="py-6 px-6 text-slate-500">{item.requirement}</td>
                  <td className="py-6 px-6 text-slate-500 font-medium">
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
