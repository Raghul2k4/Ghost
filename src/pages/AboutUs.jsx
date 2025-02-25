import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl p-8 rounded-3xl shadow-2xl bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">About Our Company</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in [Year], we embarked on a mission to [Your Mission]. We believe in [Your Values] and strive to [Your Goals]. Our journey has been filled with challenges and triumphs, but our commitment to our customers remains unwavering.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a team of passionate individuals dedicated to [Your Field]. With diverse backgrounds and expertise, we work collaboratively to deliver exceptional results. Our team is driven by innovation, creativity, and a shared vision of [Your Vision].
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
            <li>Integrity: We uphold the highest ethical standards in all our interactions.</li>
            <li>Innovation: We continuously seek new and creative ways to improve our products and services.</li>
            <li>Customer Focus: Our customers are at the heart of everything we do.</li>
            <li>Excellence: We strive for excellence in every aspect of our work.</li>
            <li>Collaboration: We believe in the power of teamwork and collaboration.</li>
          </ul>
        </div>

        <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;