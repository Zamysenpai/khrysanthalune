import React from "react";

/**
 * Local images in /public/art
 *   /public/art/img1.jpg ... /public/art/img14.jpg
 */
const IMAGES = Array.from({ length: 14 }, (_, i) => `/art/img${i + 1}.jpg`);

function Tile({ src, i }: { src: string; i: number }) {
  const [broken, setBroken] = React.useState(false);

  return (
    <figure className="break-inside-avoid mb-5 rounded-3xl overflow-hidden shadow-sm ring-1 ring-sky-100 bg-white/70 backdrop-blur-sm group">
      {!broken ? (
        <img
          src={src}
          alt={`Artwork ${i}`}
          loading="lazy"
          onError={() => setBroken(true)}
          className="w-full h-auto transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.02]"
        />
      ) : (
        <div className="h-64 grid place-items-center text-slate-400 bg-gradient-to-br from-slate-100 to-slate-200">
          <span>/public{src} not found</span>
        </div>
      )}
      <figcaption className="flex items-center justify-between px-3 py-2 text-[11px] text-slate-500">
        <span>© {new Date().getFullYear()} KHRSANTHALUNE</span>
        <span className="opacity-60">#{i}</span>
      </figcaption>
    </figure>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-gradient-to-b from-white via-sky-50 to-white relative overflow-x-hidden">
      {/* subtle floating orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl animate-float-slow" />
        <div className="absolute top-20 -right-16 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-16 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl animate-float-delay" />
      </div>

      {/* header */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-sky-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-semibold tracking-wide">KHRYSANTHALUNE</span>
          <nav className="text-sm text-slate-600">
            <a href="#gallery" className="px-3 py-1 rounded-full hover:bg-sky-50">
              Gallery
            </a>
            <a href="#about" className="px-3 py-1 rounded-full hover:bg-sky-50">
              About
            </a>
            <a href="#contact" className="px-3 py-1 rounded-full hover:bg-sky-50">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-6">
        <div className="rounded-3xl border border-sky-100 bg-white/70 backdrop-blur p-8 md:p-12 shadow-[0_10px_30px_-20px_rgba(2,132,199,0.25)]">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Ink, myth, &amp; moonlight —<br className="hidden md:block" />
            <span className="text-slate-700">visions made visible.</span>
          </h1>
          <p className="mt-4 text-slate-600">
            ARTIST / SF · INK, MYTH, &amp; MOONLIGHT · VISIONS MADE VISIBLE · PETALS, ASH, &amp; APPARITIONS
          </p>

          {/* zen marquee line */}
          <div className="mt-6 overflow-hidden rounded-full border border-sky-100 bg-white/60">
            <div className="animate-marquee whitespace-nowrap px-4 py-2 text-sky-700/80 text-sm">
              <span className="mx-6">petals</span>•<span className="mx-6">ash</span>•<span className="mx-6">apparitions</span>•
              <span className="mx-6">ink</span>•<span className="mx-6">myth</span>•<span className="mx-6">moonlight</span>•
            </div>
          </div>
        </div>
      </section>

      {/* wavy divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 90" className="w-full" aria-hidden>
          <path
            d="M0,30 C240,90 480,-30 720,30 C960,90 1200,-30 1440,30 L1440,90 L0,90 Z"
            fill="url(#g)"
          />
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#eef2ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* gallery */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-semibold">Gallery</h2>
          <span className="text-sm text-slate-500">Showing {IMAGES.length} works</span>
        </div>

        {/* Masonry via CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {IMAGES.map((src, i) => (
            <Tile key={src} src={src} i={i + 1} />
          ))}
        </div>
      </section>

      {/* about */}
      <section id="about" className="max-w-6xl mx-auto px-4 pb-16">
        <div className="rounded-3xl border border-sky-100 bg-white/70 backdrop-blur p-8">
          <h3 className="text-xl font-semibold mb-3">Artist Statement</h3>
          <p className="text-slate-600 leading-relaxed">
            Quiet stories rendered with patient ink — myth and moonlight stitched into high-contrast forms. Petals,
            ash, and apparitions drift through each piece; small hauntings, soft thresholds, and night-blooming rites.
          </p>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 pb-20">
        <div className="rounded-3xl border border-sky-100 bg-white/70 backdrop-blur p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold">Commissions &amp; Inquiries</h4>
            <p className="text-slate-600">For collaborations or commissions, send a note.</p>
          </div>
          <a
            href="mailto:contact@khrysanthalune.com"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-sky-600 text-white hover:bg-sky-700 transition-colors"
          >
            Email the studio
          </a>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-sky-100">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} KHRSANTHALUNE
        </div>
      </footer>

      {/* local styles for subtle animations */}
      <style>{`
        .animate-float { animation: float 9s ease-in-out infinite; }
        .animate-float-delay { animation: float 11s ease-in-out 1.5s infinite; }
        .animate-float-slow { animation: float 13s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(6px); }
        }
        .animate-marquee { 
          animation: marquee 16s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
