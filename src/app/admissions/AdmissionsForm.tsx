"use client";

import { useState } from "react";

export default function AdmissionsForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    grade: "",
    disabilityType: "",
    disabilitySeriousness: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
New Student Registration from Website:

Student Name:
- First: ${formData.firstName}
- Middle: ${formData.middleName || "N/A"}
- Surname: ${formData.surname}

Age: ${formData.day}/${formData.month}/${formData.year}

Gender: ${formData.gender}

Class Applying For: ${formData.grade}

Disabilities (if any):
- Type: ${formData.disabilityType || "None"}
- Seriousness: ${formData.disabilitySeriousness || "N/A"}
    `;

    const whatsappNumber = "265993338697";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message.trim())}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <div className=" mb-12">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-800">
            Register A{" "}
            <span className="bg-blue-200 text-blue-900/80 px-2 md:px-4 py-1 rounded-lg inline-block">
              Student
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-3xl">
            Fill The Form Below to register a Student At Chigomezyo Private Primary School Now.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Student Name */}
          <div className="space-y-4">
            <h3 className="text-2xl font-stretch-50% text-blue-900/80">Student Name</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Firstname"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name"
                value={formData.middleName}
                onChange={handleChange}
                className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Age */}
          <div className="space-y-4">
            <h3 className="text-2xl font-stretch-50% text-blue-900/80">date of birth</h3>
            <div className="grid grid-cols-3 gap-4">
              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <input
                type="number"
                name="year"
                placeholder="Year"
                value={formData.year}
                onChange={handleChange}
                required
                min="2000"
                max="2025"
                className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Gender */}
          <div className="space-y-4">
            <h3 className="text-2xl font-stretch-50% text-blue-900/80">Gender</h3>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Class Applying For */}
          <div className="space-y-4">
            <h3 className="text-2xl font-stretch-50% text-blue-900/80">Class Applying For</h3>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Grade</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>
              <option value="Grade 6">Grade 6</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
            </select>
          </div>

          {/* Disabilities */}
          <div className="space-y-4">
            <h3 className="text-2xl font-stretch-50% text-blue-900/80">Disabilities (If Available)</h3>
            <select
              name="disabilityType"
              value={formData.disabilityType}
              onChange={handleChange}
              className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Type Of Disability</option>
              <option value="None">None</option>
              <option value="Physical">Physical</option>
              <option value="Visual">Visual</option>
              <option value="Hearing">Hearing</option>
              <option value="Learning">Learning</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="disabilitySeriousness"
              value={formData.disabilitySeriousness}
              onChange={handleChange}
              className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">How Serious</option>
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-12">
            <button
              type="submit"
              className="inline-block font-stretch-50% bg-blue-900/80 text-gray-200 s text-xl md:text-2xl px-24 py-5 rounded-3xl shadow-xl hover:bg-blue-800 hover:scale-105 transition-all duration-300"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}