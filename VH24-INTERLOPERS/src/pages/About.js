import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12">About Training Arc</h1>

        {/* Who We Are Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              made in a hacthon
            </p>
          </div>
          <div>
            <img 
              src="/images/about.avif"
              alt="Nature and Camping"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-16 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            To Solve Real World Problems
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-center mt-4">
            P.S to win the hackthon
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Wide Selection of Lessons</h3>
            <p className="text-lg text-gray-600 text-center">
              Easy to understand
            </p>
          </div>
          <div className="bg-green-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Easy Learning</h3>
            <p className="text-lg text-gray-600 text-center">
              Our intuitive platform makes learning a breeze, so you can spend less time searching.
            </p>
          </div>
          <div className="bg-yellow-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Trusted Reviews</h3>
            <p className="text-lg text-gray-600 text-center">
              Read honest reviews from fellow delivary guys to understand our value
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
