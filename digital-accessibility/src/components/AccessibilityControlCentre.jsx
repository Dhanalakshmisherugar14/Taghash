import React from "react";
import {
  ClipboardCheck,
  FolderKanban,
  Users,
  GraduationCap,
  Workflow,
} from "lucide-react";

const features = [
  {
    title: "Accessibility Audits & Remediation",
    desc: "Plan, assign and track accessibility audits and fixes against WCAG and GIGW-aligned checklists.",
    icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Standardise Evidence & Reporting",
    desc: "Store ATRs, VPATs, ACRs and internal records in structured folders with version control and logs.",
    icon: <FolderKanban className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Govern Roles & Responsibilities",
    desc: "Map nodal officers, board oversight and internal owners with clear workflows and approvals.",
    icon: <Users className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Monitor Training & Compliance Status",
    desc: "Track who has completed accessibility training, which entities are compliant and what remains pending.",
    icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
  },
];

export default function AccessibilityControlCentre() {
  return (
    <section className="py-20 bg-white" aria-labelledby="control-centre-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* MAIN HEADING AND SUB-HEAD CONTAINER - CENTERED */}
        <div className="text-center">
          {/* MAIN HEADING */}
          <h2
            id="control-centre-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
          >
            Taghash as Your Accessibility Control Centre
          </h2>

          {/* SUB-HEAD */}
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Build accessibility into the core of your investor experience as a continuous compliance workflow.
          </p>
        </div>
        
        {/* FEATURE GRID */}
        {/* Adjusted mt-14 to mt-16 for a bit more separation */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
                          hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-50">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FULL CYCLE SECTION */}
        {/* Using max-w-3xl mx-auto to center this block as well */}
        <div className="mt-20 max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-blue-50/40 p-8 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-100">
              <Workflow className="h-8 w-8 text-blue-700" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Manage the Full Compliance Cycle
            </h3>
          </div>

          <p className="mt-4 text-gray-700 text-base leading-relaxed max-w-3xl">
            Follow every year from initial gap assessment to annual filings using a single, consistent workflow.
          </p>
        </div>

        {/* CTA BUTTON - CENTERED */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl font-medium transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/70 hover:-translate-y-1"
          >
            Talk to a Compliance Specialist
          </a>
        </div>
      </div>
    </section>
  );
}