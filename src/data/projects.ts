export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  /** Shown on the card when no image is set */
  emoji?: string
  /** Optional screenshot under `public/` e.g. `/screenshots/app.png` */
  image?: string
  /** `contain` shows the full screenshot (good for wide UI); `cover` fills the frame (default). */
  imageFit?: 'cover' | 'contain'
  liveUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'halalmap',
    title: 'HalalMap',
    description:
      'Halal food delivery marketplace MVP: customer mobile app, restaurant dashboard, admin panel, and a shared Express/Prisma API in a pnpm monorepo.',
    tags: [
      'TypeScript',
      'React Native (Expo)',
      'React',
      'Vite',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'pnpm',
    ],
    emoji: '🍽️',
    liveUrl: 'https://halal-map-admin.vercel.app',
    repoUrl: 'https://github.com/TanimK02/HalalMap',
    image: 'https://res.cloudinary.com/df7gjpnis/image/upload/f_auto,q_auto/IMG_0409_xxxw7v',
  },
  {
    id: 'odinbook',
    title: 'OdinBook (Twitter/X Clone)',
    description:
      'Full-stack Twitter/X clone with auth, tweets, replies, likes/retweets, profiles, image uploads, advanced search, and infinite scroll.',
    tags: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'JWT',
      'Supabase',
    ],
    emoji: '🐦',
    liveUrl: 'https://tclone.one',
    repoUrl: 'https://github.com/TanimK02/OdinBook',
    image: "https://res.cloudinary.com/df7gjpnis/image/upload/v1778467410/Screenshot_2026-05-09_at_7.30.13_PM_hj10f5.png",
    imageFit: 'contain',
  },
  {
    id: 'admin-dashboard',
    title: 'AdminDashboard',
    description:
      'Full-stack admin dashboard with an Express + Prisma (Postgres) backend and a Vite + React + TypeScript + Tailwind frontend.',
    tags: [
      'TypeScript',
      'React',
      'Vite',
      'Tailwind',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
    ],
    emoji: '🛠️',
    liveUrl: 'https://admin-dashboard-five-delta-88.vercel.app',
    repoUrl: 'https://github.com/TanimK02/AdminDashboard',
    image: "https://res.cloudinary.com/df7gjpnis/image/upload/v1778467417/Screenshot_2026-05-09_at_7.32.41_PM_sfc9fh.png",
    imageFit: 'contain',
  },
  {
    id: 'weather-app',
    title: 'WeatherApp',
    description:
      'Weather dashboard with city search, Fahrenheit/Celsius toggle, current conditions, hourly scroll, 5-day forecast, and detail cards for UV, humidity, visibility, feels-like, and sunrise/sunset.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Webpack'],
    emoji: '🌤️',
    liveUrl: 'https://tanimk02.github.io/WeatherApp/',
    repoUrl: 'https://github.com/TanimK02/WeatherApp',
    image:
      'https://res.cloudinary.com/df7gjpnis/image/upload/v1778555102/Screenshot_2026-05-11_at_8.01.36_PM_pkjqlx.png',
    imageFit: 'contain',
  },
  {
    id: 'file-uploader',
    title: 'fileUploader',
    description:
      'File manager with drag-and-drop uploads, 5 MB size validation, authenticated sessions, folders with rename/delete, and a sortable file list with metadata.',
    tags: ['Node.js', 'Express', 'Prisma', 'EJS', 'JavaScript'],
    emoji: '☁️',
    liveUrl: 'https://fileuploader-i163.onrender.com/home',
    repoUrl: 'https://github.com/TanimK02/fileUploader',
    image:
      'https://res.cloudinary.com/df7gjpnis/image/upload/v1778555114/Screenshot_2026-05-11_at_8.02.12_PM_ukzkfg.png',
    imageFit: 'contain',
  },
]
