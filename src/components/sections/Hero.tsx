import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white pt-8 pb-4 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-4 md:gap-12">

        {/* Text */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            <span className="inline-block bg-yellow-300/30 text-yellow-800 px-4 py-1 rounded-lg">
              Good Foundation
            </span>{" "}
            For
          </h1>

          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-3 leading-tight">
            Your Child, Starts Here
          </h1>

          <p className="text-base md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto md:mx-0">
            Register Your Child For{" "}
            <span className="font-semibold text-blue-900/95">
              Chigomezyo Private Primary School
            </span>{" "}
            Today And Lets Build Together Your Child’s Future
          </p>

          {/* Desktop Button */}
          <Link
            href="#"
            className="
              hidden md:inline-flex
              items-center justify-center
              bg-blue-700/90 text-white
              font-semibold text-lg
              px-8 py-4 rounded-xl
              shadow-md
              transition-all duration-200
              hover:bg-blue-800
              hover:shadow-lg
              hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            Register As A Student &gt;
          </Link>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-1/2 h-56 md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/home-hero.png"
            alt="Teacher and pupils learning"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile Button */}
        <div className="md:hidden w-full mt-4">
          <Link
            href="#"
            className="
              block w-full text-center
              bg-blue-900/90 text-white
               text-xl
              py-4 rounded-xl
              shadow-md
              transition-all duration-200
              active:scale-[0.97]
            "
          >
            Register As A Student &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
