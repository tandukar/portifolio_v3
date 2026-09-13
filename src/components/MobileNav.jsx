import { navLinks } from '../navLinks.jsx'

export default function MobileNav({ activeId }) {
  return (
    <nav
      id="mobile-nav"
      aria-label="Mobile Navigation"
      className="flex md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 items-center justify-around gap-5 px-5 py-2.5 rounded-full bg-stone-900/90 backdrop-blur-md text-white shadow-lg border border-white/10"
    >
      {navLinks.map((link) => {
        const isActive = activeId === link.id
        return (
          <a
            key={link.id}
            aria-label={`Go to ${link.label}`}
            href={`#${link.id}`}
            title={link.label}
            className={`dock-icon p-1.5 focus:outline-none hover:text-white ${
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
  )
}
