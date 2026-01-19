export default function LeadershipSection() {
    const directors = [
      {
        name: "Mr Kondwani Sibale",
        title: "the Director",
        description:
          "Leads the school with a focus on academic excellence and student wellbeing.",
        image: "/director.png", // Replace with real image
      },
      {
        name: "Mr Isaac Kalambo",
        title: "the director",
        description:
          "Supports daily operations and ensures the smooth running of school activities.",
        image: "/director.png", // Replace with real image
      },
    ];
  
    return (
      <section className="relative bg-gray-800 text-white py-16 md:py-24 overflow-hidden">
     
        {/* Content */}
        <div className="relative container mx-auto px-4 max-w-5xl">
          {/* Heading */}
          <div className=" mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Leadership At
            </h2>
            <div className="inline-block bg-blue-900/40 text-white font-bold text-3xl md:text-5xl px-6 py-2 mt-2 rounded-lg">
              Chigomezyo
            </div>
            <p className="text-lg md:text-xl md:-left-5 mt-6 max-w-3xl">
              Our directors lead with purpose, integrity, and a commitment to qualify education.
            </p>
          </div>
  
          {/* Directors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {directors.map((director, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Image - Face not cut off */}
                <div className="relative h-80 md:h-72">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
  
                {/* Info - Left aligned */}
                <div className="p-6 text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    {director.name}
                  </h3>
                  <div className="inline-block bg-blue-900 text-white text-lg px-6 py-1.5 rounded-lg mb-4">
                    {director.title}
                  </div>
                  <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                    {director.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }