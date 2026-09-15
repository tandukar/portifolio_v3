const projects = [
   {
    category: 'Logistics / Full-Stack',
    badge: 'Freelance',
    title: 'Kalpa Logistics — SoftVista',
    description:
      'Developed full-stack features for a production logistics platform (Django + Vue) across Superadmin, Customer, and Warehouse portals. Diagnosed and resolved a long-standing synchronous-processing bottleneck by rebuilding critical workflows on Celery, Redis, and Celery Beat, and built a Django remediation script that repaired hundreds of shipping records broken by an incomplete municipality-mapping rollout.',
    tags: ['Django', 'Vue', 'Celery', 'Redis', 'PostgreSQL'],
    url: 'https://kalpalogistics.com.np/',
  },
  {
    category: 'LegalTech / Documents',
    badge: 'Freelance',
    title: 'PerfectCDR',
    description:
      'Built a full-stack CDR/visa-document platform, implementing Django backend APIs and a corresponding React frontend for document workflows.',
    tags: ['Django', 'React', 'REST APIs'],
    url: 'https://perfectcdr.com/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="space-y-8 sm:space-y-10 pt-4 scroll-mt-16">
      <div className="border-b border-stone-200 pb-4 md:flex items-baseline justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-ink">Selected Client Works</h2>
        <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
          Freelance &amp; Contract
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-[#faf8f1] rounded-2xl p-5 sm:p-7 border border-stone-200/70 hover:border-stone-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  {project.category}
                </span>
                <span className="text-xs bg-stone-200/80 text-stone-700 px-2 py-0.5 rounded">
                  {project.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900">{project.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{project.description}</p>
            </div>
            <div className="pt-6 mt-4 border-t border-stone-200/50 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-stone-600 bg-white px-2 py-1 rounded border border-stone-200/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                aria-label={`View ${project.title}`}
                className="text-xs font-semibold text-stone-900 hover:underline flex items-center gap-1 shrink-0"
                href={project.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Inspect</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17l9.2-9.2M17 17V8H8" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
