const navItems = [
  { id: 'hero' as const, label: 'Home' },
  { id: 'about' as const, label: 'About' },
  { id: 'projects' as const, label: 'Projects' },
  { id: 'contact' as const, label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="#hero"
          className="text-sm font-medium tracking-tight text-zinc-100 transition hover:text-teal-300 focus-visible:outline-offset-4"
        >
          Portfolio
        </a>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-1 sm:gap-4">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="rounded-md px-2 py-1.5 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100 sm:px-3"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
