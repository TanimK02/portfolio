import { site } from '../data/site'

export function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-400/90">
          {site.role}
        </p>
        <h1
          id="hero-heading"
          className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-medium text-zinc-950 shadow-sm transition hover:bg-teal-400"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/50 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-600 hover:bg-zinc-900"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
