/*
  ENNA PANROM: Book page — useForm custom hook use pannrom + Tailwind.
  YEN CHANGES:
  1. Custom useForm hook — form logic extract pannrom (useState, handleChange, handleSubmit)
     Patha code la ellam Book.jsx la eh irunduchu — now hook la iruku
  2. Form validation — required field check add pannrom (patha code la validation eh illa)
  3. Tailwind classes — book.css delete pannrom
  4. Footer component — repeat code remove
  5. FORM_GOALS, TIME_SLOTS arrays — hardcoded options now data-driven
*/

import React from 'react';
import Footer from '../component/Footer';
import useForm from '../hooks/useForm';

/*
  ENNA PANROM: Select options — arrays la store pannrom.
  YEN: JSX la hardcode pannathukku vidha array map clean.
  New goal add panna array la oru line push mattum.
*/
const FORM_GOALS = [
  { value: 'bodybuilding', label: 'Bodybuilding Competition' },
  { value: 'strength', label: 'Strength Training' },
  { value: 'fat-loss', label: 'Fat Loss' },
  { value: 'muscle-gain', label: 'Muscle Gain' },
  { value: 'general-fitness', label: 'General Fitness' },
  { value: 'rehabilitation', label: 'Injury Rehabilitation' },
];

const TIME_SLOTS = [
  { value: 'morning', label: 'Morning (8am-12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm-4pm)' },
  { value: 'evening', label: 'Evening (4pm-8pm)' },
];

const EXPERIENCE_LEVELS = [
  { value: 'beginner', label: 'Beginner (0-6 months)' },
  { value: 'intermediate', label: 'Intermediate (6 months - 2 years)' },
  { value: 'advanced', label: 'Advanced (2+ years)' },
];

/* Required fields — useForm validate function ku pass pannrom */
const REQUIRED = ['name', 'email', 'goal', 'preferredDate', 'preferredTime'];

/* Input className — repetition avoid panna constant la store */
const inputCls = `w-full px-4 py-3 bg-white/10 text-white rounded-lg border border-white/10
                  focus:outline-none focus:border-[#f0a500] transition-colors placeholder-gray-500`;

const Book = () => {

  /*
    ENNA PANROM: useForm hook destructure pannrom.
    YEN: Patha code la useState 2 times, handleChange, handleSubmit — ellam here.
    Custom hook use pannaa component la UI code mattum irukum, logic hook la irukum.
    "Separation of concerns" — React best practice.
  */
  const { formData, submitted, errors, handleChange, handleSubmit, resetForm } = useForm({
    name: '',
    email: '',
    phone: '',
    goal: '',
    experience: 'beginner',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  /* Submission success screen */
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#120101] to-[#340202] flex items-center justify-center px-4">
        <div className="bg-white/5 border border-[#f0a500] rounded-2xl p-10 text-center max-w-lg w-full">
          <div className="text-6xl mb-5">🏋️</div>
          <h2 className="text-[#f0a500] text-3xl font-black mb-4">Thank You, {formData.name}!</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We've received your consultation request. Our team will contact you within 24 hours to confirm your appointment.
          </p>
          <div className="bg-white/5 rounded-xl p-4 text-left text-sm text-gray-300 mb-6 space-y-1">
            <p><span className="text-[#f0a500]">📧 Contact:</span> {formData.email || formData.phone}</p>
            <p><span className="text-[#f0a500]">📅 Date:</span> {formData.preferredDate}</p>
            <p><span className="text-[#f0a500]">⏰ Time:</span> {formData.preferredTime}</p>
          </div>
          {/*
            ENNA PANROM: resetForm button.
            YEN: Patha code la reset option eh illa.
            useForm hook la resetForm function iruku — click pannaa form reset aagum.
          */}
          <button
            onClick={resetForm}
            className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded-lg
                       hover:bg-[#ffbb00] transition-colors duration-300"
          >
            Book Another Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#120101] to-[#340202] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">BOOK YOUR CONSULTATION</h1>
          <p className="text-gray-300 text-lg">
            Start your fitness journey with a free 30-minute strategy session with our coaches
          </p>
        </div>

        <form onSubmit={(e) => handleSubmit(e, REQUIRED)} className="space-y-8">

          {/* Personal Info */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-[#f0a500] text-xl font-bold mb-6">Personal Information</h2>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Full Name *</label>
                <input type="text" name="name" value={formData.name}
                  onChange={handleChange} placeholder="Your full name" className={inputCls} />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">Email *</label>
                  <input type="email" name="email" value={formData.email}
                    onChange={handleChange} placeholder="you@email.com" className={inputCls} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone}
                    onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputCls} />
                </div>
              </div>
            </div>
          </div>

          {/* Fitness Background */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-[#f0a500] text-xl font-bold mb-6">Fitness Background</h2>

            {/* Goal select */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-300 mb-1.5">Primary Fitness Goal *</label>
              <select name="goal" value={formData.goal} onChange={handleChange}
                className={`${inputCls} appearance-none`}>
                <option value="" className="bg-[#1a1a1a]">Select your goal</option>
                {/*
                  ENNA PANROM: FORM_GOALS array map.
                  YEN: 6 separate option tags irunduchu.
                  Array map pannaa new goal add panna array la mattum add pannaa போதும்.
                */}
                {FORM_GOALS.map(({ value, label }) => (
                  <option key={value} value={value} className="bg-[#1a1a1a]">{label}</option>
                ))}
              </select>
              {errors.goal && <p className="text-red-400 text-xs mt-1">{errors.goal}</p>}
            </div>

            {/* Experience level — radio buttons */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">Experience Level *</label>
              {/*
                ENNA PANROM: Radio buttons array map.
                YEN: 3 separate radio input irunduchu. Array map clean aagum.
              */}
              <div className="flex flex-wrap gap-3">
                {EXPERIENCE_LEVELS.map(({ value, label }) => (
                  <label key={value}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border cursor-pointer
                                transition-all duration-200 text-sm
                                ${formData.experience === value
                                  ? 'border-[#f0a500] bg-[#f0a500]/10 text-[#f0a500]'
                                  : 'border-white/10 text-gray-300 hover:border-white/30'}`}>
                    <input
                      type="radio"
                      name="experience"
                      value={value}
                      checked={formData.experience === value}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Session Details */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-[#f0a500] text-xl font-bold mb-6">Session Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Preferred Date *</label>
                <input type="date" name="preferredDate" value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={inputCls} />
                {errors.preferredDate && <p className="text-red-400 text-xs mt-1">{errors.preferredDate}</p>}
              </div>

              {/* Time slot */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Preferred Time *</label>
                <select name="preferredTime" value={formData.preferredTime}
                  onChange={handleChange} className={`${inputCls} appearance-none`}>
                  <option value="" className="bg-[#1a1a1a]">Select time</option>
                  {TIME_SLOTS.map(({ value, label }) => (
                    <option key={value} value={value} className="bg-[#1a1a1a]">{label}</option>
                  ))}
                </select>
                {errors.preferredTime && <p className="text-red-400 text-xs mt-1">{errors.preferredTime}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                Anything else we should know?
              </label>
              <textarea name="message" value={formData.message} onChange={handleChange}
                rows={4} placeholder="Injuries, specific goals, questions..."
                className={`${inputCls} resize-none`} />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit"
              className="bg-[#f0a500] text-black font-black text-lg px-12 py-4 rounded-xl
                         hover:bg-[#ffbb00] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#f0a500]/30
                         transition-all duration-300 w-full md:w-auto">
              BOOK MY CONSULTATION
            </button>
            <p className="text-gray-500 text-xs mt-4">
              By submitting, you agree to our privacy policy. We'll contact you to confirm your session details.
            </p>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Book;
