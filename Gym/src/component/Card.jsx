/*
  ENNA PANROM: Card component — Tailwind classes add pannrom + hover effect improve pannrom.
  YEN: Patha code la inline CSS irunduchu, Tailwind classes use pannala.
  Props same ah iruku (title, description) — so Home.jsx change aagaadu.
*/

import React from 'react';

const Card = ({ title, description }) => {
  return (
    /*
      ENNA PANROM: group class — parent hover detect panna child la use pannrom.
      YEN: Tailwind la parent hover detect panna 'group' + 'group-hover:' use pannanum.
      Ithunaa card hover aagum-bodhu button color change aagum — smooth UX.
    */
    <div className="group flex-1 bg-white/5 border border-white/10 rounded-xl p-7
                    hover:border-[#f0a500] hover:-translate-y-2 transition-all duration-300 
                    flex flex-col">

      <h3 className="text-[#f0a500] text-xl font-bold uppercase mb-4 tracking-wide">
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed mb-6 flex-1">
        {description}
      </p>

      <button className="self-start px-6 py-2.5 border-2 border-[#f0a500] text-[#f0a500] 
                         font-bold rounded-lg transition-all duration-300
                         group-hover:bg-[#f0a500] group-hover:text-black">
        Explore More
      </button>
    </div>
  );
};

export default Card;
