export default function QualitiesSection() {
    const qualities = [
      { label: "Hard Working", image: "/student1.png", color: "bg-yellow-400 text-gray-900" },
      { label: "Goal Oriented", image: "/student2.png", color: "bg-gray-900 text-white" },
      { label: "Sharp In Class", image: "/student3.png", color: "bg-green-500 text-white" },
      { label: "Disciplined", image: "/student4.png", color: "bg-gray-900 text-white" },
      { label: "Classy Behavior", image: "/student5.png", color: "bg-green-500 text-white" },
      { label: "Focused", image: "/student6.png", color: "bg-yellow-400 text-gray-900" },
    ];
  
    return (
      <section className="bg-white py-10 md:py-20 px-4">
        <div className="max-w-5xl mx-auto relative">
  
          <div className="relative flex flex-col items-center gap-14">
  
            {/* TOP */}
            <QualityCard item={qualities[0]} />
  
            {/* Arrow down */}
            <Arrow curve="down" className="top-[160px]" />
  
            {/* ROW 1 */}
            <div className="grid grid-cols-2 gap-10 md:gap-20">
              <QualityCard item={qualities[1]} />
              <QualityCard item={qualities[2]} />
            </div>
  
            {/* Arrow to center */}
            <Arrow curve="in" className="top-[420px]" />
  
            {/* CENTER TEXT */}
            <div className="text-center max-w-xl">
              <p className="text-base md:text-lg text-gray-700">
                Bring Your Child To Chigomezozo Private Primary School And See Changes Immediately.
              </p>
  
              <button className="mt-6 inline-flex items-center gap-2 bg-blue-700/90 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition-transform hover:scale-105">
                Register As A Student
                <span className="text-xl">›</span>
              </button>
            </div>
  
            {/* ROW 2 */}
            <div className="grid grid-cols-2 gap-10 md:gap-20">
              <QualityCard item={qualities[3]} />
              <QualityCard item={qualities[4]} />
            </div>
  
            {/* Arrow down */}
            <Arrow curve="down" className="bottom-[200px]" />
  
            {/* BOTTOM */}
            <QualityCard item={qualities[5]} />
          </div>
        </div>
      </section>
    );
  }
  
  /* ---------- CARD ---------- */
  
  function QualityCard({ item }: any) {
    return (
      <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-md">
        <img
          src={item.image}
          alt={item.label}
          className="w-full h-full object-cover"
        />
  
        <span
          className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs md:text-sm font-semibold ${item.color}`}
        >
          {item.label}
        </span>
      </div>
    );
  }
  
  /* ---------- ARROWS ---------- */
  
  function Arrow({ curve, className }: any) {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`absolute w-24 h-24 text-gray-400 opacity-70 ${className}`}
      >
        {curve === "down" && (
          <path
            d="M50 0 C50 30, 50 70, 50 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )}
  
        {curve === "in" && (
          <path
            d="M10 10 C50 50, 50 50, 90 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )}
      </svg>
    );
  }
  