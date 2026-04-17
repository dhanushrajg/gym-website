/*
  ENNA PANROM: Home page — full Tailwind convert + React features add pannrom.
  YEN CHANGES:
  1. useMemo — program cards data array la store pannrom (hardcode illa)
  2. useScrollReveal — sections scroll aagum bodhu fade-in aagum
  3. Footer separate component — repeat code remove
  4. useForm custom hook — free trial form logic clean
  5. Tailwind classes — separate CSS file delete
*/

import React, { useMemo } from 'react';
import Card from '../component/Card';
import Footer from '../component/Footer';
import useScrollReveal from '../hooks/useScrollReveal';
import useForm from '../hooks/useForm';

/*
  ENNA PANROM: Programs data — component outside la define pannrom.
  YEN: useMemo use pannrom component inside la — re-render aagum bodhu
  array recreate aagathu (performance). Data driven — new program add panna
  array la oru object mattum push pannaa போதும், JSX change aagaadu.
*/
const PROGRAMS = [
  {
    id: 1,
    title: 'GET INSPIRED',
    description: 'Walk into the gym where 6x Mr. Olympia Chris Bumstead trains. Our championship environment features motivational displays of CBUM\'s career highlights to fuel your fitness breakthrough.',
  },
  {
    id: 2,
    title: 'CHALLENGE YOURSELF',
    description: 'Take on our 90-Day SAYANS Challenge featuring the exact training protocols CBUM used to prepare for his Olympia wins. Includes progress tracking and competition prep guidance.',
  },
  {
    id: 3,
    title: 'UNLOCK SAYAN FORM',
    description: 'Master championship-level technique with our proprietary training system developed from CBUM\'s posing and lifting mechanics. Includes 3D motion analysis and corrective programming.',
  },
];

/* Free trial form la required fields */
const REQUIRED_FIELDS = ['name', 'email', 'contact'];

const Home = () => {

  /*
    ENNA PANROM: useMemo — PROGRAMS array memoize pannrom.
    YEN: Component re-render aagum bodhu (state change etc.) array
    recreate aagaathu — same reference return pannudum.
    Small optimization, aana React best practice illustrate pannurom.
  */
  const programs = useMemo(() => PROGRAMS, []);

  /* Scroll reveal hooks — different sections ku */
  const heroReveal = useScrollReveal(0.1);
  const programsReveal = useScrollReveal(0.1);
  const formReveal = useScrollReveal(0.1);

  /*
    ENNA PANROM: useForm custom hook — form logic extract pannrom.
    YEN: Patha code la useState, handleChange ellam Home.jsx la eh irunduchu.
    Custom hook use pannaa component clean aagum, logic reusable aagum.
  */
  const { formData, submitted, errors, handleChange, handleSubmit } = useForm({
    name: '', email: '', contact: '', branch: ''
  });

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#120101] to-[#340202] flex items-center justify-center px-4">
        <div className="bg-white/5 border border-[#f0a500] rounded-2xl p-10 text-center max-w-md">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="text-[#f0a500] text-2xl font-bold mb-3">You're In!</h2>
          <p className="text-gray-300">We'll contact you within 24 hours to confirm your free trial.</p>
          <p className="text-[#f0a500] font-semibold mt-2">{formData.name}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#120101] to-[#340202] text-white">

      {/* ===== HERO SECTION ===== */}
      {/*
        ENNA PANROM: useScrollReveal hook — ref attach pannrom.
        YEN: isVisible true aagum bodhu opacity-100 + translate-y-0 aagum.
        Patha code la static irunduchu — scroll animation eh illa.
        transition-all duration-700 — smooth 700ms animation.
      */}
      <section
        ref={heroReveal.ref}
        className={`flex flex-col md:flex-row items-center justify-between 
                    px-6 md:px-20 py-16 gap-10 max-w-7xl mx-auto
                    transition-all duration-700
                    ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="flex-1 min-w-[280px]">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-2">4 WEEK</h1>
          <h2 className="text-3xl md:text-4xl text-[#f0a500] font-bold mb-6">WORKOUT PLAN</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-lg mb-8">
            Achieve your fitness goals with SAYANS. Our customized 4-week plan helps you build
            strength, endurance, and confidence. Join now and transform your lifestyle!
          </p>
          <button className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded-lg
                             hover:bg-[#ffbb00] hover:-translate-y-1 transition-all duration-300 text-lg">
            TRY FOR FREE
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/images/817491c94b5ca8453775ed23d944253f.jpg"
            alt="Coach"
            className="w-full max-w-md rounded-2xl shadow-2xl 
                       hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>
      </section>

      {/* ===== PROGRAMS SECTION ===== */}
      <section
        ref={programsReveal.ref}
        className={`px-6 md:px-20 py-12 max-w-7xl mx-auto
                    transition-all duration-700 delay-100
                    ${programsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h2 className="text-3xl font-bold text-center mb-10 tracking-wide">OUR PROGRAMS</h2>

        {/*
          ENNA PANROM: Programs array map pannrom — 3 Card components render.
          YEN: Patha code la 3 separate <Card> manually type pannirukaan.
          Array map = data driven = scalable.
        */}
        <div className="flex flex-col md:flex-row gap-6">
          {programs.map((prog) => (
            <Card key={prog.id} title={prog.title} description={prog.description} />
          ))}
        </div>
      </section>

      {/* ===== FREE TRIAL FORM ===== */}
      <section
        ref={formReveal.ref}
        className={`px-6 md:px-20 py-12 max-w-5xl mx-auto
                    transition-all duration-700 delay-200
                    ${formReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-[#f0a500] text-3xl font-bold text-center mb-8">3 DAY FREE TRIAL</h2>

          <form onSubmit={(e) => handleSubmit(e, REQUIRED_FIELDS)} className="flex flex-col gap-5">

            <div className="flex flex-wrap gap-4">
              {/* Name */}
              <div className="flex-1 min-w-[200px] flex flex-col gap-1.5">
                <label className="text-[#ffcc80] font-semibold text-sm">NAME:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white/10 text-white rounded-lg border border-transparent
                             focus:outline-none focus:border-[#f0a500] transition-colors"
                />
                {/* 
                  ENNA PANROM: Error message conditional render.
                  YEN: Patha code la validation eh illa.
                  useForm hook la validate logic iruku, error irunthal show pannrom.
                */}
                {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="flex-1 min-w-[200px] flex flex-col gap-1.5">
                <label className="text-[#ffcc80] font-semibold text-sm">EMAIL:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white/10 text-white rounded-lg border border-transparent
                             focus:outline-none focus:border-[#f0a500] transition-colors"
                />
                {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
              </div>

              {/* Contact */}
              <div className="flex-1 min-w-[200px] flex flex-col gap-1.5">
                <label className="text-[#ffcc80] font-semibold text-sm">CONTACT:</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white/10 text-white rounded-lg border border-transparent
                             focus:outline-none focus:border-[#f0a500] transition-colors"
                />
                {errors.contact && <span className="text-red-400 text-xs">{errors.contact}</span>}
              </div>
            </div>

            {/* Branch */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#ffcc80] font-semibold text-sm">NEAREST BRANCH:</label>
              <textarea
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                rows={3}
                className="px-4 py-3 bg-white/10 text-white rounded-lg border border-transparent
                           focus:outline-none focus:border-[#f0a500] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="self-end px-10 py-3 bg-gradient-to-r from-red-500 to-[#f0a500]
                         text-black font-bold rounded-full hover:-translate-y-1
                         hover:shadow-lg hover:shadow-[#f0a500]/30 transition-all duration-300"
            >
              JOIN TODAY
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
