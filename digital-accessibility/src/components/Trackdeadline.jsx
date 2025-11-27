import React from "react";

const deadlines = [
  {
    id: 1,
    requirement: "Submit list of digital platforms + action-taken report",
    deadline: "30 Sep 2025 (extension)",
    priority: "Critical",
  },
  {
    id: 2,
    requirement: "Appoint IAAP-certified accessibility auditor",
    deadline: "14 Dec 2025",
    priority: "High",
  },
  {
    id: 3,
    requirement: "Conduct full accessibility audit",
    deadline: "30 Apr 2026",
    priority: "High",
  },
  {
    id: 4,
    requirement: "Remediate findings + ensure compliance",
    deadline: "31 Jul 2026",
    priority: "Medium",
  },
  {
    id: 5,
    requirement: "Submit annual compliance report",
    deadline: "30 days from FY end",
    priority: "Ongoing",
  },
];

export default function TrackDeadline() {
  return (
    <section 
      id="track-deadline" 
      className="py-24 bg-gray-50" 
      aria-labelledby="deadline-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2
            id="deadline-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Track Every Deadline To Stay Fully Compliant
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay in line with all SEBI-mandated milestones for digital accessibility.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl shadow-slate-200 bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="text-slate-700 bg-slate-100 text-sm">
              <tr>
                <th scope="col" className="py-4 px-6 text-base md:text-lg font-bold">
                  Requirement
                </th>
                <th scope="col" className="py-4 px-6 text-base md:text-lg font-bold">
                  Deadline
                </th>
                <th scope="col" className="py-4 px-6 text-base md:text-lg font-bold">
                  Priority
                </th>
              </tr>
            </thead>
            <tbody>
              {deadlines.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-slate-500">
                    {item.requirement}
                  </td>
                  <td className="py-6 px-6 text-slate-500">
                    {item.deadline}
                  </td>
                  <td className="py-6 px-6 text-slate-500 font-medium">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset
                        ${
                          item.priority === "Critical"
                            ? "bg-red-50 text-red-700 ring-red-600/10"
                            : item.priority === "High"
                            ? "bg-orange-50 text-orange-700 ring-orange-600/10"
                            : item.priority === "Medium"
                            ? "bg-yellow-50 text-yellow-800 ring-yellow-600/20"
                            : "bg-blue-50 text-blue-700 ring-blue-700/10"
                        }`}
                    >
                      {item.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
