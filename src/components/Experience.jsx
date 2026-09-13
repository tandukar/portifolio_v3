import { Fragment } from 'react'

const roles = [
  {
    company: 'Lalitpur Tech Solutions',
    title: 'Senior Fullstack Engineer',
    period: '2023 — Present · Lalitpur / Hybrid',
    description: (
      <>
        Spearheaded back-end architecture migrations from monolithic services
        to high-throughput <strong className="text-stone-800 font-semibold">FastAPI microservices</strong>,
        achieving a 42% reduction in p99 API response latencies. Collaborated
        closely with product designers to ship unified component libraries
        with <strong className="text-stone-800 font-semibold">React &amp; Tailwind</strong>.
      </>
    ),
    tags: ['FastAPI', 'Python 3.11', 'React', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'Himalayan Software Labs',
    title: 'Python & Frontend Developer',
    period: '2021 — 2023 · Kathmandu, Nepal',
    description: (
      <>
        Engineered data ingestion pipelines using{' '}
        <strong className="text-stone-800 font-semibold">Django REST framework</strong>{' '}
        and Celery task queues. Built responsive customer reporting dashboards
        using <strong className="text-stone-800 font-semibold">Vue 3 (Composition API)</strong>{' '}
        and Pinia, improving daily user engagement metrics for enterprise
        clients.
      </>
    ),
    tags: ['Django', 'Vue 3', 'Celery', 'Redis', 'REST APIs'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="space-y-8 sm:space-y-10 pt-4 scroll-mt-16">
      <div className="border-b border-stone-200 pb-4 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-ink">Experience</h2>
        <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
          2021 — Present
        </span>
      </div>
      <div className="space-y-10 sm:space-y-12">
        {roles.map((role, i) => (
          <article
            key={role.company}
            className={`group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start ${
              i > 0 ? 'pt-6 border-t border-stone-100' : ''
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
                    {idx > 0 && <span className="text-xs font-mono text-stone-400">/</span>}
                    <span className="text-xs font-mono text-stone-500">{tag}</span>
                  </Fragment>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
