'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Github } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  //{ label: 'Contato', href: '#contact' },
];

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-black/50 backdrop-blur-2xl border-white/10">
        <div className="mx-auto px-6 h-16 flex items-center justify-between">

          <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-purple-400 transition-colors">
            Eduardo<span className="text-purple-500">.dev</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Divisor */}
            <div className="h-4 w-px bg-white/20"></div>

            <div className="flex">
              <Link href="https://github.com/Eduardo1Monteiro" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </nav>

          <button
            className="md:hidden text-slate-200 hover:text-white p-2"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-64 
          bg-[#0f0518] border-l border-white/10 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-bold text-white">Menu</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className="text-lg text-slate-300 hover:text-purple-400 transition-colors border-b border-white/5 pb-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-white/10">
            <div className="flex justify-center gap-6">
              <Link href="https://github.com/Eduardo1Monteiro" target="_blank" className="text-slate-400 hover:text-purple-400">
                <Github size={24} />
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
