import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_90%_10%,rgba(124,58,237,0.2),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Let’s build something amazing
        </motion.h2>
        <p className="mt-2 text-white/70 text-center">
          Have a product idea or a role in mind? I’m open to collaborations and contracts.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-white/70">Name</label>
              <input required className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs text-white/70">Email</label>
              <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="you@domain.com" />
            </div>
          </div>
          <div>
            <label className="text-xs text-white/70">Message</label>
            <textarea rows={4} required className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Tell me about your project..." />
          </div>
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-white/80">
              <Mail className="h-4 w-4" />
              Prefer email? hello@superporto.dev
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-purple-900/40 hover:from-purple-500 hover:to-indigo-500 transition-colors">
              <Send className="h-4 w-4" /> Send
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
