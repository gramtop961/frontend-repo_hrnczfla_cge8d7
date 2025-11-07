import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_300px_at_10%_10%,rgba(88,28,135,0.2),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            I’m a full‑stack developer specializing in interactive frontends and scalable backends. I build fast, accessible interfaces with React, and robust APIs with Python & Node. I love fusing realtime, 3D, and AI to craft memorable product moments.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-white/80">
            <li className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">React • Vite • Tailwind</li>
            <li className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">FastAPI • MongoDB</li>
            <li className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">Node • WebSockets</li>
            <li className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">Framer Motion • Spline</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/40 to-indigo-900/20 p-6"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: 'Projects', value: '40+' },
              { label: 'Years', value: '6' },
              { label: 'Clients', value: '20+' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-black/40 border border-white/10 p-4">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
