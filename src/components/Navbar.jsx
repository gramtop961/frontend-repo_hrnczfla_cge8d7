import { useState } from 'react';
import { Rocket, Folder, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500 grid place-items-center shadow-lg shadow-purple-500/30">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-white tracking-wide">superporto</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-sm text-white/80 hover:text-white px-3 py-2 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleNav('projects');
              }}
              className="ml-2 inline-flex items-center gap-2 text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-700/30"
            >
              <Folder className="h-4 w-4" />
              View Work
            </a>
          </div>

          <button
            className="md:hidden text-white"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="mt-3 md:hidden backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="w-full text-left text-white/90 px-3 py-2 rounded-lg hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
            <a
              href="mailto:hello@superporto.dev"
              className="mt-2 inline-flex items-center gap-2 text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-700/30"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
