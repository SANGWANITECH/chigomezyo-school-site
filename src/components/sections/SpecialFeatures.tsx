import { GraduationCap, Brain, Heart, Shield } from 'lucide-react'; // Install lucide-react if not: npm install lucide-react

export default function SpecialFeatures() {
  const features = [
    {
      icon: GraduationCap,
      title: "Child-Centered Learning",
      description:
        "At Chigomezyo Private Primary School, we believe that every child learns differently. Our child-centered approach places pupils at the heart of the learning process.",
    },
    {
      icon: Brain,
      title: "Character Building",
      description:
        "We focus on developing strong moral values, discipline, respect, and leadership skills alongside academic excellence.",
    },
    {
      icon: Heart,
      title: "Holistic Education",
      description:
        "Beyond academics, we nurture creativity, sports, arts, life skills, and spiritual growth for well-rounded future leaders.",
    },
    {
      icon: Shield,
      title: "Safe & Nurturing Environment",
      description:
        "Small class sizes, caring teachers, secure premises, and a family-like atmosphere where every child feels safe and valued.",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            What Makes Us
          </h2>
          <div className="inline-block  bg-blue-500/10 text-blue-900/80  font-bold text-3xl md:text-5xl px-6 py-2 mt-2 rounded-lg">
            Special
          </div>
          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            This is what sets apart Chigomezyo Private Primary School from other primary schools in Malawi.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-16 h-16 mx-auto text-blue-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}