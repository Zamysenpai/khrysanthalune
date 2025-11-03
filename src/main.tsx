import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

// Minimal, airy portfolio for an artist. White / baby blue palette.
// Drop this file into a Vite + React + Tailwind project and set it as the default route.

const ARTIST = {
  handle: "@khrysanthalune",
  name: "KHRYSANTHALUNE 🌴",
  lines: [
    "ARTIST / SF",
    "INK, MYTH, & MOONLIGHT",
    "VISIONS MADE VISIBLE",
    "PETALS, ASH, & APPARITIONS",
  ],
  instagram: "https://instagram.com/khrysanthalune",
};

const demoImages = [
  // Replace these with your own artwork URLs or local /public paths.
  "https://www.instagram.com/khrysanthalune/p/DOM3FdbjzUz/",
  "https://www.instagram.com/khrysanthalune/p/DOMyuS-ATk6/",
  "https://www.instagram.com/khrysanthalune/p/C-nAK_XJWKu/",
  "https://www.instagram.com/khrysanthalune/p/C-m_hoOpYer/",
  "https://www.instagram.com/khrysanthalune/p/C3M9velOePh/",
  "https://www.instagram.com/khrysanthalune/p/C3KQMgnuvNl/",
  "https://www.instagram.com/khrysanthalune/p/C3KOJWbu11L/"
];

function Nav() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-sky-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-wide text-slate-800">
          {ARTIST.name}
        </a>
        <div className="flex items-center gap-3">
          <a
            href={ARTIST.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:border-sky-300 transition"
          >
            <Instagram className="h-4 w-4" />
            {ARTIST.handle}
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,#D9EEFF_15%,transparent_60%)]"
      />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900"
        >
          Ink, myth, & moonlight —
          <br className="hidden sm:block" />
          visions made visible.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-2xl text-slate-600 leading-relaxed"
        >
          {ARTIST.lines.join(" · ")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#gallery"
            className="rounded-xl bg-sky-500/90 px-5 py-3 text-white font-medium shadow-sm hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            View Gallery
          </a>
          <a
            href={ARTIST.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-sky-300/70 bg-white px-5 py-3 text-slate-800 font-medium hover:bg-sky-50"
          >
            Contact / Commissions
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Gallery() {
  const [images] = useState(demoImages);
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <header className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Gallery</h2>
        <p className="text-sm text-slate-500">Replace with your works</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((src, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-sky-100"
          >
            <img
              src={src}
              alt="Artwork"
              loading="lazy"
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs text-slate-700/90 backdrop-blur bg-white/60">
              © {new Date().getFullYear()} {ARTIST.name.replace(" 🌴", "")}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16">
      <div className="rounded-3xl border border-sky-100 bg-white p-8 sm:p-10 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">About</h3>
        <p className="mt-4 text-slate-700 leading-relaxed">
          {ARTIST.name.replace(" 🌴", "")} is an artist exploring {""}
          <em>ink, myth, and moonlight</em>. Petals, ash, and apparitions drift
          through each piece — quiet stories rendered with patience and a love
          for high-contrast forms.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={ARTIST.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-sky-300 bg-white px-4 py-2 text-slate-800 hover:bg-sky-50"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-sky-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} {ARTIST.name.replace(" 🌴", "")} · {ARTIST.handle}
        </p>
        <a
          href={ARTIST.instagram}
          className="inline-flex items-center gap-2 rounded-full border border-sky-200 px-3 py-1.5 hover:bg-sky-50"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram className="h-4 w-4" /> Instagram
        </a>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <Hero />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}
