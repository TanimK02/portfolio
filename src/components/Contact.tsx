import { contact } from '../data/contact'

export function Contact() {
  const mailto = `mailto:${contact.email}`

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-zinc-800/80 px-4 py-20 sm:px-6"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Contact
        </h2>
        <p className="mt-4 text-zinc-400">
          Prefer email? Reach me at{' '}
          <a
            href={mailto}
            className="font-medium text-teal-400 underline decoration-teal-500/40 underline-offset-4 hover:text-teal-300"
          >
            {contact.email}
          </a>
          .
        </p>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {contact.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-600 hover:bg-zinc-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-xs text-zinc-600">
          Built with Vite and React. Edit contact details in{' '}
          <code className="rounded bg-zinc-800 px-1 font-mono text-zinc-400">
            src/data/contact.ts
          </code>
          .
        </p>
      </div>
    </section>
  )
}
