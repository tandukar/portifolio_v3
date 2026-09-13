export const navLinks = [
  {
    id: 'hero',
    label: 'Home',
    icon: (
      <>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: (
      <>
        <path d="m16 18 2-2-2-2" />
        <path d="m8 6-2 2 2 2" />
        <path d="m14.5 4-5 16" />
      </>
    ),
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: (
      <>
        <rect height="14" rx="2" ry="2" width="20" x="2" y="7" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
  {
    id: 'projects',
    label: 'Projects & Code',
    icon: (
      <>
        <rect height="14" rx="2" width="20" x="2" y="3" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (
      <>
        <rect height="16" rx="2" width="20" x="2" y="4" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
]
