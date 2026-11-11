import React from "react";

export function Home() {
  return (
    <div>
      {/* Upcoming Events Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0d3862] mb-6">Upcoming Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card: BEE Symposium */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <span className="text-xs font-semibold text-[#0d3862] uppercase tracking-wider bg-blue-100/60 px-2.5 py-1 rounded">
                  Symposium
                </span>
                <h3 className="text-xl font-bold text-[#0d3862] mt-3 mb-2">
                  <a 
                    href="https://sites.google.com/ashoka.edu.in/bee" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    The Behaviour, Ecology, and Evolution (BEE) symposium
                  </a>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 text-justify">
                  The Behaviour, Ecology, and Evolution (BEE) symposium at Ashoka aims to bring together researchers and students working in these intertwined fields. The event will be a vibrant space for discussions on topics ranging from ecological dynamics and evolutionary processes to behavioral adaptations. The symposium aims to promote the exchange of ideas, build connections, and explore future collaborations within the research community. It will feature presentations from faculty members at Ashoka University, postdoctoral fellows, graduate students, and postgraduate and undergraduate students. There will be special research talks and discussions led by researchers working at the intersection of ecology, evolution, genetics, and theoretical biology from various institutes.
                </p>
              </div>
              <a 
                href="https://sites.google.com/ashoka.edu.in/bee" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-[#0d3862] hover:underline inline-flex items-center gap-1 mt-2"
              >
                Visit Symposium Site &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

