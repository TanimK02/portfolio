import type { Project } from '../data/projects'
import { projects } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  const hasLive = Boolean(project.liveUrl)
  const hasRepo = Boolean(project.repoUrl)
  const hasVideo = Boolean(project.videoUrl)
  const hasAnyLink = hasLive || hasRepo || hasVideo
  const imageObjectFit =
    project.imageFit === 'contain' ? 'object-contain' : 'object-cover'

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 shadow-sm">
      <div className="relative aspect-16/10 overflow-hidden bg-zinc-900">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className={`h-full w-full ${imageObjectFit}`}
            loading="lazy"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-linear-to-br from-zinc-800 to-zinc-900 text-6xl"
            aria-hidden
          >
            {project.emoji ?? '✨'}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
        {project.demoNote && (
          <p className="mt-3 rounded-lg border border-amber-500/25 bg-amber-950/30 px-3 py-2 text-xs leading-relaxed text-amber-100/90">
            {project.demoNote}
          </p>
        )}
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag}>
              <span className="rounded-md bg-zinc-800/80 px-2 py-0.5 text-xs text-zinc-300">
                {tag}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {hasLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-22 flex-1 items-center justify-center rounded-lg bg-teal-600 px-3 py-2 text-center text-sm font-medium text-white transition hover:bg-teal-500 sm:flex-none"
            >
              Live
            </a>
          )}
          {hasRepo && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-22 flex-1 items-center justify-center rounded-lg border border-zinc-600 px-3 py-2 text-center text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800/80 sm:flex-none"
            >
              Code
            </a>
          )}
          {hasVideo && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-22 flex-1 items-center justify-center rounded-lg border border-violet-500/45 px-3 py-2 text-center text-sm font-medium text-violet-100 transition hover:border-violet-400/70 hover:bg-violet-950/45 sm:flex-none"
            >
              Video
            </a>
          )}
          {!hasAnyLink && (
            <span className="text-xs text-zinc-500">Links coming soon</span>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-zinc-800/80 px-4 py-20 sm:px-6"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="projects-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Projects
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
