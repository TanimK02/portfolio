import { contact } from '../data/contact'

const contactCardClass =
  'group block rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-sm transition hover:border-zinc-700 hover:bg-zinc-900/60'

const socialLinkClass =
  'inline-flex rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-600 hover:bg-zinc-900'

export function Contact() {
  const mailto = `mailto:${contact.email}`
  const tel = `tel:+1${contact.phone.replace(/\D/g, '')}`

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-zinc-800/80 px-4 py-20 sm:px-6"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-400/90">
          Get in touch
        </p>
        <h2
          id="contact-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Contact
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
          Open to full-time roles, contract work, and technical collaboration. Use
          email or phone below, or connect on GitHub and LinkedIn.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a href={mailto} className={contactCardClass}>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Email
            </span>
            <span className="mt-2 block break-words text-base font-medium text-zinc-100 transition group-hover:text-teal-300">
              {contact.email}
            </span>
          </a>
          <a href={tel} className={contactCardClass}>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Phone
            </span>
            <span className="mt-2 block text-base font-medium tabular-nums text-zinc-100 transition group-hover:text-teal-300">
              {contact.phone}
            </span>
          </a>
        </div>

        <h3 className="sr-only">GitHub and LinkedIn</h3>
        <ul className="mt-10 flex flex-wrap gap-3">
          {contact.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
