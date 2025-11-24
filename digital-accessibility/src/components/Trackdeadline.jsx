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

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-100/50">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-bold">
                      Requirement
                    </p>
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-bold">
                      Deadline
                    </p>
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-bold">
                      Priority
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {deadlines.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-normal">
                        {item.requirement}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-normal">
                        {item.deadline}
                      </p>
                    </td>
                    <td className="px-6 py-4">
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

      </div>
    </section>
  );
}
