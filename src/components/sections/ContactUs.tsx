import { Mail, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="relative rounded-3xl overflow-hidden">

          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/contact.png"
              alt="Chigomezozo students"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative pt-10 pb-12">

            {/* Text content */}
            <div className="px-8 md:px-14">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Contact Us
              </h2>

              <p className="text-base md:text-lg text-white/90 mt-4 max-w-3xl">
                Send An Email Or Call Us To Enquire More About Chigomezyo Private Primary School
              </p>
            </div>

            {/* Contact rows */}
            <div className="mt-10 space-y-6">

              {/* Email */}
              <a
                href="mailto:kondwasibale@gmail.com"
                className="relative bg-white h-14 md:h-16 flex items-center pl-6 w-[88%] rounded-r-3xl hover:scale-[1.01] transition"
              >
                <span className="text-sm  md:text-2xl font-bold text-gray-900 truncate">
                kondwasibale@gmail.com
                </span>

                <div className="absolute right-2 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-900/80" />
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+265993338697"
                className="relative bg-white h-14 md:h-16 flex items-center pl-6 w-[88%] rounded-r-3xl hover:scale-[1.01] transition"
              >
                <span className="text-sm md:text-2xl font-bold text-gray-900 truncate">
                  +265881829772 | 993338697
                </span>

                <div className="absolute ml-3.5 right-2 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Phone className="w-6 h-6  text-blue-900/80" />
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
