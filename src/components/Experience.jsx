import { Fragment } from "react";

const roles = [
  {
    company: "Incessant Rain",
    title: "Python & Tools Developer",
    period: "May 2024 — Present",
    description: (
      <>
        Maintain and modernize{" "}
        <strong className="text-stone-800 font-semibold">
          Python-based Maya production tooling
        </strong>{" "}
        used across a studio-wide VFX/animation pipeline, refactoring legacy
        plugins to improve reliability and building a centralized{" "}
        <strong className="text-stone-800 font-semibold">
          Python TaskManager
        </strong>{" "}
        for coordinating production tasks. Resolved threading and concurrency
        issues affecting task execution stability, and develop{" "}
        <strong className="text-stone-800 font-semibold">
          Python automation scripts
        </strong>{" "}
        to streamline recurring studio workflows.
      </>
    ),
    tags: ["Python", "Maya", "Tooling", "TaskManager", "Legacy Refactoring"],
  },
  {
    company: "FlareSight",
    title: "Django Developer",
    period: "Jul 2023 — Jul 2024 · ~11 months",
    description: (
      <>
        Developed core features for a{" "}
        <strong className="text-stone-800 font-semibold">
          Django-based ERP/CRM platform
        </strong>
        , including role-based access control, inventory and
        subscription-management functionality, and a dedicated API service. Set
        up <strong className="text-stone-800 font-semibold">Docker</strong>
        -based containerization for the project and handled inter-service
        communication using{" "}
        <strong className="text-stone-800 font-semibold">RabbitMQ</strong>{" "}
        across a microservice architecture.
      </>
    ),
    tags: [
      "Django",
      "REST APIs",
      "RBAC",
      "Docker",
      "RabbitMQ",
      "Microservices",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="space-y-8 sm:space-y-10 pt-4 scroll-mt-16"
    >
      <div className="border-b border-stone-200 pb-4 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          Experience
        </h2>
        <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
          Full-Stack Developer — Backend, Automation & Pipeline Systems
        </span>
      </div>
      <div className="space-y-10 sm:space-y-12">
        {roles.map((role, i) => (
          <article
            key={role.company}
            className={`group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start ${
              i > 0 ? "pt-6 border-t border-stone-100" : ""
            }`}
          >
            <div className="md:col-span-4 space-y-1">
              <h3 className="text-lg font-bold text-stone-900 group-hover:text-black">
                {role.company}
              </h3>
              <p className="text-sm font-medium text-stone-700">{role.title}</p>
              <p className="text-xs text-stone-500">{role.period}</p>
            </div>
            <div className="md:col-span-8 space-y-3">
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {role.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {role.tags.map((tag, idx) => (
                  <Fragment key={tag}>
                    {idx > 0 && (
                      <span className="text-xs font-mono text-stone-400">
                        /
                      </span>
                    )}
                    <span className="text-xs font-mono text-stone-500">
                      {tag}
                    </span>
                  </Fragment>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
