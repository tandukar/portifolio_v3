const techStack = [
  'Python',
  'Django',
  'Django REST Framework',
  'React.js',
  'Vue.js',
  'PostgreSQL',
  'Celery',
  'Redis',
  'RabbitMQ',
  'Docker',
  'FastAPI',
  'MongoDB',
]

export default function Skills() {
  return (
    <section id="skills" className="pt-4 border-t border-stone-200/80 scroll-mt-16">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
        <h2 className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
          Core Specializations &amp; Toolkit
        </h2>
        <span className="text-xs text-stone-500">Full-Stack, Backend &amp; Pipeline Development</span>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {techStack.map((skill) => (
          <span
            key={skill}
            className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-stone-100 text-stone-800 border border-stone-200 shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}