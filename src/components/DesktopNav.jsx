import { navLinks } from '../navLinks.jsx'

export default function DesktopNav({ activeId, scrolledPast }) {
  return (
    <aside
      id="desktop-nav"
      className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-300"
      style={{ opacity: scrolledPast ? 0.85 : 1 }}
    >
      <nav
        aria-label="Quick Page Navigation"
        className="bg-stone-900/90 hover:bg-stone-900 text-stone-400 p-2 sm:p-2.5 rounded-full shadow-2xl flex flex-col items-center space-y-4 sm:space-y-5 border border-stone-800/60 backdrop-blur-md transition-all duration-200"
      >
        {navLinks.map((link) => {
          const isActive = activeId === link.id
          return (
            <a
              key={link.id}
              aria-label={`Go to ${link.label}`}
              href={`#${link.id}`}
              title={link.label}
              className={`dock-icon p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-400 hover:text-white ${
                isActive ? 'text-white scale-110' : 'text-stone-400'
              }`}
            >
              <svg
                className="w-5 h-5 stroke-[2]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                {link.icon}
              </svg>
            </a>
          )
        })}
      </nav>
    </aside>
  )
}
