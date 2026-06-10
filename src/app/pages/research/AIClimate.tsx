export function AIClimate() {
  const ongoingProjects = [
    {
      title: "Cost-Effective Air Quality Monitoring with Decision Support",
      description: "The project is developing a cost-effective, scalable, one-stop system for air quality monitoring and assessment, with decision-support capabilities."
    }
  ];

  const futureProjects = [
    {
      title: "AI-Based Environmental Monitoring",
      description: "Develop a reliable and scalable system that integrates satellite imagery, field measurements, and geospatial data with artificial intelligence to monitor carbon, biodiversity, water security, and ecosystem recovery."
    },
    {
      title: "Carbon Removal Technologies",
      description: "Create a field-based framework to test new carbon removal methods, starting with Enhanced Rock Weathering."
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0d3862] via-[#1a5280] to-[#0d3862] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl">AI for Climate Tech and Sustainability</h1>
          <p className="text-2xl text-gray-100 max-w-3xl leading-relaxed">
            Pioneering rigorous monitoring, reporting, and verification systems for climate and nature metrics
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg mb-8 leading-relaxed text-justify">
            3CS will pioneer rigorous Monitoring, Reporting, and Verification (MRV) systems built on reproducible, traceable, and scalable data infrastructure for climate and nature metrics. This work will span three areas: AI-enabled remote MRV using satellite, ground, and geospatial data; improved methods for baselines, uncertainty, and additionality; and multi-metric MRV that goes beyond carbon to include biodiversity, water security, and ecosystem resilience.
          </p>

          <p className="text-gray-700 text-lg mb-16 leading-relaxed text-justify">
            By integrating computational tools with ecological science and transparent data protocols, the Centre will help build credible, lower-cost, and scalable systems for climate action and finance. Alongside this, the Centre will also support the independent evaluation of emerging carbon removal approaches such as Enhanced Rock Weathering (ERW), with a focus on real-world performance, net carbon balance, and long-term permanence. In partnership with institutions such as IISc and the IITs, 3CS will help develop robust measurement standards and field-validation frameworks to ensure that these technologies are assessed on the basis of credible evidence, enabling more informed investment, policy, and deployment decisions.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl">Ongoing Projects</h2>
          <div className="space-y-6 mb-16">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-[#0d3862] transition-all duration-300">
                <h3 className="text-xl text-[#0d3862] mb-3 font-bold">{project.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">{project.description}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-8 text-4xl">Future Projects</h2>
          <div className="space-y-6">
            {futureProjects.map((project, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-[#0d3862] transition-all duration-300">
                <h3 className="text-xl text-[#0d3862] mb-3 font-bold">{project.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


<section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a href="/research" className="inline-flex items-center text-[#0d3862] hover:gap-3 gap-2 transition-all text-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Research Verticals
          </a>
        </div>
      </section>
    </div>
  );
}
