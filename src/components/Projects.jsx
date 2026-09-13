const projects = [
  {
    category: 'FinTech / Automated Trading',
    badge: 'Freelance',
    title: 'Kavya Ledger Analytics',
    description:
      'Designed and deployed an automated accounting audit platform for a regional credit union. Built a FastAPI asynchronous pipeline processing 50,000+ financial records daily with a lightweight Vue frontend.',
    tags: ['Python', 'FastAPI', 'Vue.js'],
    url: 'https://github.com',
  },
  {
    category: 'SaaS / Creative Studio',
    badge: 'Contract',
    title: 'ArtisanFlow Canvas',
    description:
      'Constructed an interactive asset collaboration platform for independent illustrators and creative agencies. Paired a real-time Django Channels backend with an ultra-responsive React SVG workspace.',
    tags: ['Django', 'React', 'WebSockets'],
    url: 'https://github.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="space-y-8 sm:space-y-10 pt-4 scroll-mt-16">
      <div className="border-b border-stone-200 pb-4 flex items-baseline justify-between">
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
