/*
  ENNA PANROM: Why page — Tailwind + data arrays + scroll reveal.
  YEN CHANGES:
  1. VALUE_CARDS, BENEFITS, TESTIMONIALS — arrays la store pannrom
  2. useScrollReveal — sections animate
  3. Footer import — no more copy-paste
  4. why.css delete
*/

import React, { useMemo } from 'react';
import Footer from '../component/Footer';
import useScrollReveal from '../hooks/useScrollReveal';

const VALUE_CARDS = [
  {
    icon: '🏆',
    title: 'Champion-Proven Systems',
    desc: 'Access the exact training protocols that built a 6x Mr. Olympia, refined through years of competition experience',
  },
  {
    icon: '💎',
    title: 'Elite-Grade Facility',
    desc: '25,000 sq ft of competition-caliber equipment personally selected by CBUM',
  },
  {
    icon: '👑',
    title: 'Champion Environment',
    desc: 'Train alongside serious athletes in a space designed to push limits beyond ordinary gym standards',
  },
];

const BENEFITS = [
  {
    img: '10cb54f775c9fe2b5f01cfad1e0529a0.jpg',
    title: 'Learn From The Best',
    desc: 'Our coaching staff includes former competitors who trained directly with Chris Bumstead.',
    points: ['Personalized form correction', 'Competition posing instruction', 'Peak week protocols', 'Judging criteria insights'],
    cta: 'MEET OUR COACHES →',
    reversed: false,
  },
  {
    img: '183a2bdecdb69c45126b6148ef2c6da7.jpg',
    title: 'Facility Designed For Results',
    desc: 'Every aspect of our space is optimized for maximum gains:',
    points: ['Competition-spec platforms', 'Professional posing room with stage lighting', 'Dedicated strongman area', 'Recovery zone with cryotherapy'],
    cta: 'VIEW FACILITY TOUR →',
    reversed: true,
  },
];

const TESTIMONIALS = [
  {
    quote: 'In 12 months at SAYANS, I went from novice to national qualifier',
    img: '14de4904df0af3ad28cacac0b724d300.jpg',
    name: 'James T.',
    achievement: '2023 Nationals Qualifier',
  },
  {
    quote: 'The nutrition coaching helped me drop 8% body fat while gaining muscle',
    img: '2bbcd94c3b9bf77400e8e029759f3c32.jpg',
    name: 'Sarah K.',
    achievement: 'Fitness Model',
  },
];

const Why = () => {
  const valueCards = useMemo(() => VALUE_CARDS, []);
  const benefits = useMemo(() => BENEFITS, []);
  const testimonials = useMemo(() => TESTIMONIALS, []);

  const heroReveal = useScrollReveal(0.1);
  const valueReveal = useScrollReveal(0.1);
  const benefitsReveal = useScrollReveal(0.05);
  const testimonialReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.1);

  return (
    <div className="bg-gradient-to-br from-[#120101] to-[#340202] text-white min-h-screen">

      {/* ===== HERO ===== */}
      <section
        ref={heroReveal.ref}
        className={`relative py-28 px-6 text-center
                    transition-all duration-700 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            WHY SAYANS IS THE ULTIMATE FITNESS DESTINATION
          </h1>
          <h2 className="text-[#f0a500] text-xl font-semibold mb-4">
            Home of 6x Mr. Olympia Chris Bumstead
          </h2>
          <p className="text-gray-300 mb-8">Train where champions are forged with proven systems that deliver results</p>
          <button className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded-lg
                             hover:bg-[#ffbb00] hover:-translate-y-1 transition-all duration-300">
            BOOK A PRIVATE TOUR →
          </button>
        </div>
      </section>

      {/* ===== VALUE CARDS ===== */}
      <section
        ref={valueReveal.ref}
        className={`py-16 px-6 bg-black/20
                    transition-all duration-700 ${valueReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#f0a500] mb-2">THE SAYANS DIFFERENCE</h2>
          <p className="text-gray-400 mb-12">What separates us from ordinary gyms</p>

          {/*
            ENNA PANROM: value cards array map.
            YEN: 3 separate divs → array loop. New benefit add panna VALUE_CARDS la push mattum.
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueCards.map(({ icon, title, desc }) => (
              <div key={title}
                   className="bg-white/5 border border-white/10 rounded-xl p-8
                              hover:border-[#f0a500] hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-[#f0a500] font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section
        ref={benefitsReveal.ref}
        className={`py-16 px-6 max-w-6xl mx-auto flex flex-col gap-16
                    transition-all duration-700 ${benefitsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/*
          ENNA PANROM: Benefits map — reversed prop use pannrom layout flip.
          YEN: Patha code la manually "reversed" class add pannirukaan.
          Array la reversed: true/false store pannaa, conditionally flex-row-reverse apply pannalam.
        */}
        {benefits.map(({ img, title, desc, points, cta, reversed }) => (
          <div key={title}
               className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}>
            <div className="flex-1">
              <img
                src={`/images/${img}`}
                alt={title}
                className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-[#f0a500] text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{desc}</p>
              <ul className="space-y-2 mb-6">
                {points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-gray-300">
                    <span className="text-[#f0a500]">✓</span> {pt}
                  </li>
                ))}
              </ul>
              <button className="border-2 border-[#f0a500] text-[#f0a500] font-bold px-6 py-2.5 rounded-lg
                                 hover:bg-[#f0a500] hover:text-black transition-all duration-300">
                {cta}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        ref={testimonialReveal.ref}
        className={`py-16 px-6 bg-black/20
                    transition-all duration-700 ${testimonialReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">CHANGING LIVES DAILY</h2>
          <p className="text-gray-400 text-center mb-12">Hear from our members</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(({ quote, img, name, achievement }) => (
              <div key={name}
                   className="bg-white/5 border border-white/10 rounded-xl p-6
                              hover:border-[#f0a500] transition-colors duration-300">
                <p className="text-gray-200 italic mb-6 leading-relaxed">"{quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={`/images/${img}`}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#f0a500]"
                  />
                  <div>
                    <p className="font-bold text-white">{name}</p>
                    <p className="text-[#f0a500] text-sm">{achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        ref={ctaReveal.ref}
        className={`py-20 px-6 text-center
                    transition-all duration-700 ${ctaReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">YOUR CHAMPIONSHIP JOURNEY STARTS HERE</h2>
          <p className="text-gray-300 mb-8">Get started with our exclusive new member offer</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded-lg
                               hover:bg-[#ffbb00] hover:-translate-y-1 transition-all duration-300">
              CLAIM 7-DAY FREE TRIAL
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg
                               hover:border-[#f0a500] hover:text-[#f0a500] transition-all duration-300">
              SPEAK TO A COACH
            </button>
          </div>
          <p className="text-gray-400 text-sm">⭐️ Includes 1 complimentary training session</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Why;
