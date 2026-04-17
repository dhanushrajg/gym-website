/*
  ENNA PANROM: Custom Hook — useScrollReveal (IntersectionObserver).
  YEN: Patha code la static page — scroll pannalum animation eh illa.
  IntersectionObserver API use pannaa, element screen la vandhum-bodhu
  detect pannalam. Ithunaa "fade in from bottom" animation add pannalam.
  
  Yen separate hook: Ithay Home, About, Why — everywhere use pannalam.
  useEffect + useRef React features — real world projects la ithai use pannuvanga.
*/

import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    /*
      ENNA PANROM: IntersectionObserver create pannrom.
      YEN: Scroll event la manually calculate pannathukku vidha,
      IntersectionObserver browser ah check pannatum — "element visible-aa?" nu.
      threshold: 0.15 = 15% element visible aagum bodhu trigger aagum.
    */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Once shown, stop observing — performance save
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    /*
      ENNA PANROM: Cleanup function return pannrom.
      YEN: Component unmount aagum bodhu observer disconnect pannanum,
      otherwise memory leak aagum. useEffect cleanup best practice.
    */
    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);

  return { ref, isVisible };
};

export default useScrollReveal;
