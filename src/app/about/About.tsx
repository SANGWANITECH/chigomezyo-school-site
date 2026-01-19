import {
    Users,
    School,
    BookOpen,
    UserCheck,
  } from "lucide-react";
  
  export default function AboutUs() {
    return (
      <section className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
  
          {/* Heading */}
          <header className="mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-poppins leading-tight">
              What Makes Up{" "}
              <span className="inline-bloc bg-yellow-300/30 text-yellow-800 px-4 py-1 rounded-lg">
                Chigomezyo
              </span>
            </h2>
  
            <p className="mt-4 text-base md:text-xl text-gray-600 max-w-3xl">
              <span className="mt-4 text-base text-blue-900 font-bold md:text-xl max-w-3xl">Chigomezyo Private Primary School</span> is a dedicated learning institution
              committed to providing quality primary education in a safe, caring,
              and supportive environment.
            </p>
          </header>
  
          {/* Started + Location */}
          <div className="flex gap-10 mb-12">
            <div>
              <p className="text-sm md:text-lg font-medium text-gray-700">
                Started In:
              </p>
              <p className="text-2xl md:text-4xl font-bold text-yellow-600">
                2019
              </p>
            </div>
  
            <div>
              <p className="text-sm md:text-lg font-medium text-gray-700">
                Location:
              </p>
              <p className="text-2xl md:text-4xl font-bold text-yellow-600">
                Karonga, Malawi
              </p>
            </div>
          </div>
  
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            
            {/* Students */}
            <div className="bg-yellow-600 text-white rounded-xl p-5 shadow-md h-36 md:h-44 flex flex-col justify-between">
              <Users size={34} />
              <div>
                <p className="text-2xl md:text-3xl font-bold">400+</p>
                <p className="text-sm md:text-base">Students</p>
              </div>
            </div>
  
            {/* Classes */}
            <div className="bg-yellow-600 text-white rounded-xl p-5 shadow-md h-36 md:h-44 flex flex-col justify-between">
              <School size={34} />
              <div>
                <p className="text-2xl md:text-3xl font-bold">8</p>
                <p className="text-sm md:text-base">Grade Classes</p>
              </div>
            </div>
  
            {/* Subjects */}
            <div className="bg-yellow-600 text-white rounded-xl p-5 shadow-md h-36 md:h-44 flex flex-col justify-between">
              <BookOpen size={34} />
              <div>
                <p className="text-2xl md:text-3xl font-bold">13</p>
                <p className="text-sm md:text-base">Subjects</p>
              </div>
            </div>
  
            {/* Teachers */}
            <div className="bg-yellow-600 text-white rounded-xl p-5 shadow-md h-36 md:h-44 flex flex-col justify-between">
              <UserCheck size={34} />
              <div>
                <p className="text-2xl md:text-3xl font-bold">20+</p>
                <p className="text-sm md:text-base">Teachers</p>
              </div>
            </div>
  
          </div>
  
         
        </div>
      </section>
    );
  }
  