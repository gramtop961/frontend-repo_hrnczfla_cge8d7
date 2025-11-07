import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] grid place-items-center overflow-hidden bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(124,58,237,0.25),transparent_60%)]">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Grain + gradient overlay (does not block pointer) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-white/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
            Interactive 3D • Midnight Purple • Futuristic
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-purple-200 via-fuchsia-200 to-indigo-200 bg-clip-text text-transparent">
            superporto
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Full‑stack developer crafting immersive web experiences with React, Node, and cloud‑native backends.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#projects" className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-purple-900/40 hover:from-purple-500 hover:to-indigo-500 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
