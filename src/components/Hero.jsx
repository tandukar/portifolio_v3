export default function Hero() {
  return (
    <header
      id="hero"
      className="min-h-[70vh] md:min-h-[75vh] flex items-center"
    >
      <div className="w-full flex flex-col-reverse md:grid md:grid-cols-12 gap-8 md:gap-14 items-center">
        {/* Left Column: Primary Typography & Social Badges */}
        <div className="w-full md:col-span-7 space-y-5 sm:space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl heading-heavy text-ink tracking-tight font-black">
            Fullstack Web<br className="hidden sm:inline" />Developer.
          </h1>
          <p className="text-stone-700 sm:text-stone-600 text-base sm:text-lg leading-relaxed max-w-md font-normal">
            Hey there! I'm{' '}
            <span className="font-semibold text-stone-900">Pragyo Tandukar</span>.
            A dedicated and enthusiastic fullstack web developer hailing from
            the beautiful city of Lalitpur, Nepal.
          </p>
          <p className="text-stone-600 sm:text-stone-500 text-sm sm:text-base leading-relaxed max-w-md">
            With 3 years of experience crafting robust backends in{' '}
            <span className="text-stone-900 font-medium">
              Python (FastAPI, Django)
            </span>{' '}
            and delivering polished, responsive user interfaces with{' '}
            <span className="text-stone-900 font-medium">React</span> &amp;{' '}
            <span className="text-stone-900 font-medium">Vue</span>.
          </p>

          {/* Social Links */}
          <div className="pt-2 flex items-center space-x-5 text-stone-900">
            <a
              aria-label="LinkedIn Profile"
              className="transition-transform hover:-translate-y-0.5 hover:text-black focus:outline-none p-1 -m-1"
              href="https://linkedin.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
              </svg>
            </a>
            <a
              aria-label="GitHub Profile"
              className="transition-transform hover:-translate-y-0.5 hover:text-black focus:outline-none p-1 -m-1"
              href="https://github.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
            <a
              aria-label="Send Email"
              className="transition-transform hover:-translate-y-0.5 hover:text-black focus:outline-none p-1 -m-1"
              href="mailto:hello@pragyotandukar.com"
            >
              <svg
                className="w-5 h-5 stroke-[2]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect height="16" rx="2" width="20" x="2" y="4" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Illustration */}
      <div className="w-full md:col-span-5 flex justify-center items-center">
  <div className="relative group cursor-pointer p-3 sm:p-4 flex items-center justify-center w-64 h-64 sm:w-72 sm:h-72">
    <div className="blob-shape absolute inset-2 bg-[#ded2a8]/70 -rotate-6 transform scale-95 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-0"></div>
    <img
      alt="Cute coffee cat animation"
      className="w-72 h-72 object-contain relative z-10 mx-auto"
      src={`${import.meta.env.BASE_URL}cat.gif`}
    />
  </div>
  </div>
  </div>
    </header>
  )
}
