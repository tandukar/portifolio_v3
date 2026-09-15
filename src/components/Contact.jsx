export default function Contact() {
  return (
    <section id="contact" className="pt-8 sm:pt-10 pb-6 border-t border-stone-200 scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
        <div className="md:col-span-7 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Let's build something together.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-lg">
            Whether you need a reliable Python backend architecture, a snappy
            frontend in React or Vue, or help on an upcoming product sprint —
            my inbox is always open.
          </p>
        </div>
        <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 justify-start md:items-end">
          <a
            className="inline-flex items-center justify-center space-x-2 bg-stone-900 hover:bg-black text-white px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-sm"
            href="mailto:tandukarpragyo123@gmail.com"
          >
            <svg
              className="w-4 h-4 stroke-[2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect height="16" rx="2" width="20" x="2" y="4" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>Say Hello</span>
          </a>
          <span className="text-xs text-stone-500 font-mono text-left sm:text-left md:text-right">
            Based in Lalitpur, Nepal (UTC +5:45)
          </span>
        </div>
      </div>
    </section>
  )
}
