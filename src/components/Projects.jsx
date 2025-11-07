import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat',
    desc: 'WebSocket-powered chat with auth, typing indicators, and message history.',
    tags: ['React', 'FastAPI', 'WebSocket', 'MongoDB'],
    url: '#',
    repo: '#',
  },
  {
    title: 'AI Image Studio',
    desc: 'Image generation and editing with prompt history and gallery.',
    tags: ['Next.js', 'Python', 'Stable Diffusion'],
    url: '#',
    repo: '#',
  },
  {
    title: 'E‑commerce Kit',
    desc: 'Headless storefront with payments, orders, and analytics.',
    tags: ['React', 'Stripe', 'MongoDB', 'Cloud Functions'],
    url: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_50%_0%,rgba(147,51,234,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Selected Projects
        </motion.h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          A mix of production builds and experiments exploring realtime, 3D, and AI.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-5 hover:shadow-2xl hover:shadow-purple-900/30"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-purple-600/20 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs text-white/80 bg-white/10 border border-white/10 rounded-full px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.url} className="inline-flex items-center gap-1 text-sm text-purple-300 hover:text-purple-200">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-purple-300 hover:text-purple-200">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
