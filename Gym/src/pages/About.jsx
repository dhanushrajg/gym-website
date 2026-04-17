/*
  ENNA PANROM: About page — Tailwind + scroll reveal + data arrays.
  YEN CHANGES:
  1. Stats, gallery, achievements — all hardcoded JSX, now array map pannrom
  2. useScrollReveal — each section fade-in aagum
  3. Footer import — copy-paste code remove
  4. about.css delete — Tailwind replace
*/

import React, { useMemo } from 'react';
import Footer from '../component/Footer';
import useScrollReveal from '../hooks/useScrollReveal';

/*
  ENNA PANROM: Data arrays — component outside define pannrom.
  YEN: JSX la hardcode panna vidha, data separate ah irunthal
  content update easy. Designer/content team JSX touch pannaamal data change pannalam.
*/
const STATS = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '100+', label: 'Pro Athletes Trained' },
  { value: '6x', label: 'Mr. Olympia Titles' },
];

const GALLERY = [
  { img: '338e97ed23b305c164bd2ee8e0815b1c.jpg', title: 'Champion-Approved Equipment', sub: 'Selected by CBUM himself' },
  { img: '939c60b3b2213aefbb22440673321505.jpg', title: '1-on-1 Coaching', sub: 'From our pro trainers' },
  { img: 'fa05622c870041e34e0fd1f9fbc6e519.jpg', title: 'Spacious Training Floor', sub: '25,000 sq ft of premium space' },
  { img: '7de14c62892975646265ef7d610a1f16.jpg', title: 'Competition Posing Room', sub: 'With professional lighting' },
  { img: 'b98ed8fa23dd622292fd4fc883ad1c40.jpg', title: 'Recovery Zone', sub: 'Cryotherapy & massage' },
  { img: 'fb8960c168f7893150428ec38ec6baa8.jpg', title: 'Supplement Bar', sub: 'Premium fueling station' },
  { img: '63f79e1322b1206c6b0a951df14d0cb3.jpg', title: 'Results', sub: 'Feel pain, Accept pain, Know pain' },
  { img: '1e566e9fd53245730e95965b27988496.jpg', title: 'Demon Back', sub: 'Trained by Coach CBUM' },
];

const TROPHIES = ['2019', '2020', '2021', '2022', '2023', '2024'];

const About = () => {
  const gallery = useMemo(() => GALLERY, []);
  const stats = useMemo(() => STATS, []);

  const heroReveal = useScrollReveal(0.1);
  const statsReveal = useScrollReveal(0.1);
  const galleryReveal = useScrollReveal(0.05);
  const coachReveal = useScrollReveal(0.1);

  return (
    <div className="bg-gradient-to-br from-[#120101] to-[#340202] text-white min-h-screen">

      {/* ===== HERO ===== */}
      <section
        ref={heroReveal.ref}
        className={`flex flex-col md:flex-row items-center gap-12 px-6 md:px-16 py-20 max-w-7xl mx-auto
                    transition-all duration-700 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="flex-1">
          <h1 className="text-[#f0a500] text-4xl md:text-5xl font-black mb-5 leading-tight">MEET COACH CBUM</h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-200">6-TIME CONSECUTIVE MR. OLYMPIA CHAMPION</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
            Train with the champion himself using proven methods that built his legendary physique.
            Our customized programs help you build strength, endurance, and championship-level conditioning.
          </p>
          <button className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded-lg
                             hover:bg-[#ffbb00] hover:-translate-y-1 transition-all duration-300">
            START YOUR JOURNEY
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/817491c94b5ca8453775ed23d944253f.jpg"
            alt="Chris Bumstead"
            className="w-full max-w-lg rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section
        ref={statsReveal.ref}
        className={`bg-black/30 py-16 px-6 text-center
                    transition-all duration-700 ${statsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#f0a500] text-3xl font-bold mb-2">THE SAYANS DIFFERENCE</h2>
          <p className="text-gray-400 mb-12">Where the mind goes silent, the body Awakens</p>

          {/*
            ENNA PANROM: Stats array map.
            YEN: 3 separate div irunduchu. Array map pannaa
            new stat add panna STATS array la oru line mattum add pannaa போதும்.
          */}
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-[#f0a500]/10 border border-[#f0a500] rounded-xl p-8 min-w-[160px]">
                <h3 className="text-[#f0a500] text-4xl font-black mb-2">{value}</h3>
                <p className="text-gray-300 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section
        ref={galleryReveal.ref}
        className={`px-6 py-16 max-w-7xl mx-auto
                    transition-all duration-700 ${galleryReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-center mb-10">
          <h2 className="text-[#f0a500] text-3xl font-bold">INSIDE SAYANS GYM</h2>
          <p className="text-gray-400 mt-2">World-Class Training Environment</p>
        </div>

        {/*
          ENNA PANROM: Gallery grid — array map pannrom.
          YEN: 8 separate gallery-card divs irunduchu. 
          Array map pannaa photo add/remove panna GALLERY array edit mattum pannaa போதும்.
          group + group-hover: Tailwind feature — parent hover detect panna child style change.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map(({ img, title, sub }) => (
            <div key={img} className="group relative rounded-xl overflow-hidden aspect-square
                                      hover:-translate-y-2 transition-transform duration-300">
              <img
                src={`/images/${img}`}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay — group-hover la slide up aagum */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                              translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-[#f0a500] font-bold text-sm mb-1">{title}</h3>
                  <p className="text-gray-300 text-xs">{sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== COACH PROFILE ===== */}
      <section
        ref={coachReveal.ref}
        className={`bg-black/30 px-6 md:px-16 py-16
                    transition-all duration-700 ${coachReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto items-center">
          <div className="flex-1">
            <img
              src="/images/b7fbdcc844ef4222c689645ee5550a00.jpg"
              alt="Chris Bumstead"
              className="w-full max-w-md rounded-2xl shadow-2xl mx-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-[#f0a500] text-3xl font-black mb-3">CHRIS "CBUM" BUMSTEAD</h2>
            <h3 className="text-gray-300 text-lg mb-6">2019-2024 Classic Physique Olympia Champion</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              As our head coach, Chris brings his championship-winning methods to all SAYANS members.
              His approach combines old-school bodybuilding principles with modern sports science.
            </p>

            {/*
              ENNA PANROM: Trophies array map.
              YEN: 6 separate div irunduchu — TROPHIES.map pannaa loop la render.
              Future year add panna TROPHIES array la push pannaa போதும்.
            */}
            <div className="grid grid-cols-2 gap-3">
              {TROPHIES.map((year) => (
                <div key={year} className="flex items-center gap-2 text-gray-200 font-medium">
                  🏆 {year} Mr. Olympia
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
