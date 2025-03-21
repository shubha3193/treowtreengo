import React from "react";

function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
  <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
  <div className="text-center mb-12">
    <p className="text-xl text-gray-600">
      Empowering Communities, Preserving Nature, and Driving Social Change
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">01</h2>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">Vocational Training</h3>
      <p className="text-gray-600">
        Equipping individuals with skills for sustainable livelihoods and employment opportunities.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">02</h2>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">Environmental Conservation</h3>
      <p className="text-gray-600">
        Promoting eco-friendly practices to protect the environment and encourage sustainability.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">03</h2>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">Social Research & Advocacy</h3>
      <p className="text-gray-600">
        Conducting studies and research to address key social issues and drive impactful change.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">04</h2>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">Awareness Campaigns</h3>
      <p className="text-gray-600">
        Educating communities and raising awareness on pressing social and environmental concerns.
      </p>
    </div>
  </div>
</div>

  );
}

export default HowItWorks;