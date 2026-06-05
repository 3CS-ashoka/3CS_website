export function Education() {
  const programs = [
    {
      title: "Master's Programme in Climate Change, Sustainability, and AI",
      description: "A one-year signature offering of the Centre, combining interdisciplinary training in climate science, sustainability, policy, and governance with applied skills in data and artificial intelligence. Designed to be both academically rigorous and practice-oriented."
    },
    {
      title: "3CS Distinguished Lecture Series",
      description: "A public lecture series featuring leading voices on climate and society, including writers, scholars, artists, and practitioners."
    },
    {
      title: "Nature & Climate Photography Prize",
      description: "A national prize for school students across India to encourage creative engagement with questions of nature, environment, and climate change."
    },
    {
      title: "Summer School and Certificate Programmes",
      description: "Short practice-oriented programmes covering climate fundamentals, data literacy, reporting and communication, paired with internships. Can be offered in partnership with Ashoka's Young Scholars Programme or Horizons Achievers Programme."
    },
    {
      title: "Conference on Communicating Climate Change",
      description: "A national-level convening focused on how school students can understand, interpret, and communicate climate change more effectively."
    },
    {
      title: "Permanent Collaborative Climate Mural",
      description: "A visible and lasting artwork on campus, co-created with students and collaborators, that serves as an anchor for campus engagement and public conversation."
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0d3862] via-[#1a5280] to-[#0d3862] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl">Education & Training</h1>
          <p className="text-2xl text-gray-100 max-w-3xl leading-relaxed">
            Strengthening public understanding and building capacity for climate action
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg mb-12 leading-relaxed text-justify">
            This objective focuses on training and education to promote climate literacy, communication, and engagement across diverse audiences, while building knowledge and skills among students to respond to climate change.
          </p>

          <h2 className="mb-12 text-4xl">Programmes & Initiatives</h2>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-[#0d3862] hover:shadow-lg transition-all duration-300">
                <h3 className="mb-4 text-2xl text-[#0d3862]">{program.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-center text-4xl">Our Approach</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg text-center hover:border-[#0d3862] hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-[#0d3862] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl text-[#0d3862]">Climate Literacy</h3>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">Building foundational understanding of climate science and sustainability</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg text-center hover:border-[#0d3862] hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-[#0d3862] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl text-[#0d3862]">Communication</h3>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">Creating new ways to communicate climate urgency and immediacy</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg text-center hover:border-[#0d3862] hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-[#0d3862] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl text-[#0d3862]">Empowerment</h3>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">Enabling people to act rather than feel overwhelmed by helplessness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-8 text-4xl">Building Capacity Across Audiences</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Our education and training initiatives target students, practitioners, policymakers, and communities, creating pathways for meaningful engagement and action on climate change at all levels of society.
          </p>
        </div>
      </section>
    </div>
  );
}
