'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  targetNumber: number;
  duration?: number;
  className?: string;
  percent?: boolean;
}

const Counter: React.FC<CounterProps> = ({ targetNumber, duration = 750, className = '', percent }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const totalFrames = Math.round(duration / 16)
          const increment = targetNumber / totalFrames

          const animateCount = () => {
            start += increment;
            if (start < targetNumber) {
              setCount(Math.floor(start));
              requestAnimationFrame(animateCount);
            } else {
              setCount(targetNumber);
            }
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetNumber, duration]);

  return (
    <div ref={ref} className={`${className} font-traffic text-4xl small:text-5xl sm:text-6xl md:text-7xl leading-7 rtl font-bold text-white`}>
      {count}{percent ? '%' : '+'}
    </div>
  );
};

export default Counter;