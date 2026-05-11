import { about } from '../content/about'

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-zinc-800/80 px-4 py-20 sm:px-6"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="about-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          About
        </h2>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-400">
          {about.paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
        <h3 className="sr-only">Skills</h3>
        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Skills">
          {about.skills.map((skill) => (
            <li key={skill}>
              <span className="inline-flex rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
