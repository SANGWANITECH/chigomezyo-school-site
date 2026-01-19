export default function FeesStructure() {
  return (
    <section className="bg-amber-300/10 rounded-2xl m-2 py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <header className="mb-10 text-left md:text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 font-poppins leading-tight">
            Fees Structure At{" "}
            <span className="inline-block bg-yellow-300/30 text-yellow-800 px-4 py-1 rounded-lg">
              Chigomezyo
            </span>
          </h2>
          <p className="mt-4 text-base md:text-2xl text-gray-900 max-w-3xl mx-auto">
            Fees is Allowed to be paid in installments, <br />
            No Child should be Denied Education
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 md:gap-10 max-w-5xl mx-auto">

          {/* Entry Fee */}
          <div className="bg-yellow-600 text-white rounded-xl p-5 md:p-8 shadow-md h-36 md:h-56 flex flex-col justify-between">
            {/* Entrance / Admission icon */}
            <svg className="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                d="M15 3h4a2 2 0 012 2v4M9 21H5a2 2 0 01-2-2v-4M21 9v6M3 15V9M8 12h8" />
            </svg>

            <div>
              <p className="text-2xl md:text-4xl font-bold">K10,000</p>
              <p className="md:text-xl mt-2">Entry Fee</p>
            </div>
          </div>

          {/* Medical Fee */}
          <div className="bg-yellow-600 text-white rounded-xl p-5 md:p-8 shadow-md h-36 md:h-56 flex flex-col justify-between">
            {/* Medical / health icon */}
            <svg className="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                d="M12 4v16m8-8H4" />
            </svg>

            <div>
              <p className="text-2xl md:text-4xl font-bold">K10,000</p>
              <p className="md:text-xl mt-2">Medical Fee</p>
            </div>
          </div>

          {/* Boarding Fee */}
          <div className="bg-yellow-600 text-white rounded-xl p-5 md:p-8 shadow-md h-36 md:h-56 flex flex-col justify-between">
            {/* Bed / hostel icon */}
            <svg className="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                d="M3 7v10M21 7v10M3 13h18M7 7h10a4 4 0 014 4v2H3v-2a4 4 0 014-4z" />
            </svg>

            <div>
              <p className="text-2xl md:text-4xl font-bold">K200,000</p>
              <p className="md:text-xl mt-2">Boarding Fees</p>
            </div>
          </div>

          {/* Day Scholar */}
          <div className="bg-yellow-600 text-white rounded-xl p-5 md:p-8 shadow-md h-36 md:h-56 flex flex-col justify-between">
            {/* Student / school icon */}
            <svg className="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5zM12 14v7" />
            </svg>

            <div>
              <p className="text-2xl md:text-4xl font-bold">K60,000</p>
              <p className="md:text-xl mt-2">Day Scholar</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
