import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently "active" based on scroll position,
 * and whether the page has scrolled past a threshold (for nav opacity).
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop
      setScrolledPast(currentScroll > 150)

      // If we're at (or very near) the bottom of the page, the offset-based
      // check below can never reach the last section — there may not be
      // enough room below it to scroll indicatorOffset past its offsetTop.
      // Handle that case explicitly.
      const atBottom =
        window.innerHeight + currentScroll >= document.documentElement.scrollHeight - 2

      if (atBottom) {
        setActiveId(sectionIds[sectionIds.length - 1])
        return
      }

      const indicatorOffset = currentScroll + 260
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= indicatorOffset) {
          current = id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return { activeId, scrolledPast }
}