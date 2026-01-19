'use client';

import { useState } from 'react';
import { BookOpen } from 'lucide-react';

export default function SubjectsSection() {
  const subjects = [
    'Primary Science',
    'Social Studies',
    'Mathematics',
    'English',
    'Chichewa',
    'French',
    'Religious Education',
    'Life Skills',
    'Physical Education',
    'Creative Arts',
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-white py-10 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <header className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-poppins leading-tight">
            <span className="inline-block bg-yellow-300/30 text-yellow-800 px-4 py-1 rounded-lg">
              Subjects
            </span>{' '}
            We Teach At
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-1">
            Chigomezyo Pvt School
          </h3>

          <p className="mt-3 md:mt-5 text-base md:text-xl text-gray-600 max-w-3xl">
            Our curriculum is designed to give learners a strong academic
            foundation through relevant and well-structured subjects.
          </p>
        </header>

        {/* Subjects Grid */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

  {/* MOBILE – first 6 */}
  {subjects.slice(0, showAll ? subjects.length : 6).map((subject) => (
    <div
      key={subject}
      className="bg-white border border-gray-300 rounded-xl p-4 flex flex-col items-start gap-3 shadow-sm md:hidden"
    >
      <BookOpen className="text-yellow-500" size={28} />
      <p className="text-sm font-medium text-gray-900">{subject}</p>
    </div>
  ))}

  {/* DESKTOP – all subjects */}
  {subjects.map((subject) => (
    <div
      key={subject}
      className="hidden md:flex bg-white border border-gray-300 rounded-xl p-6 flex-col items-start gap-3 shadow-sm"
    >
      <BookOpen className="text-yellow-500" size={30} />
      <p className="text-base font-medium text-gray-900">{subject}</p>
    </div>
  ))}

</div>


        {/* Mobile See More */}
        <div className="flex justify-end mt-6 md:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-white border border-gray-400 text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition"
          >
            {showAll ? 'Show Less' : 'See More'} →
          </button>
        </div>

      </div>
    </section>
  );
}
