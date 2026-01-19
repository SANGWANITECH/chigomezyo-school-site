"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutIntro() {
  const highlights = [
    { image: "/clean1.png", text: "Clean & Safe Environment" },
    { image: "/clean2.png", text: "Quality Education" },
    { image: "/clean3.png", text: "Dedicated Teachers" },
    { image: "/clean2.png", text: "Happy Learning Space" },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const center = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const el = child as HTMLElement;
        const elCenter = el.offsetLeft + el.offsetWidth / 2;
        const distance = Math.abs(center - elCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900">
            What is{" "}
            <span className="bg-yellow-300/30 text-yellow-800 p-1 rounded-2xl">
              Chigomezyo
            </span>
            <br />
            Pvt Primary School{" "}
            <span className="text-blue-900 text-5xl">?</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-900 mt-6 max-w-3xl mx-auto">
            Chigomezyo Private Primary School is committed to quality education
            in a safe learning environment.
          </p>
        </div>

        {/* MOBILE CAROUSEL */}
        <div
          ref={containerRef}
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-16 pt-10 scrollbar-hide"
        >
          {highlights.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`
                  flex-shrink-0 w-72 snap-center
                  relative rounded-2xl overflow-hidden shadow-xl
                  transition-all duration-300 ease-out
                  ${isActive ? "scale-105 -translate-y-4" : "scale-95 translate-y-4"}
                `}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-72 object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5">
                  <p className="text-white text-lg text-center">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:flex justify-center gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="w-72 relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-2xl text-center">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hint */}
        <div className=" -mt-8 md:hidden text-center text-gray-500  text-sm">
          ← Scroll horizontally →
        </div>

      </div>
    </section>
  );
}
