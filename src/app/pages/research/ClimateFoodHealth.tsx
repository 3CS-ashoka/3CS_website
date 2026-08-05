import { HeroBanner } from "../../components/HeroBanner";

export function ClimateFoodHealth() {
  const ongoingProjects = [
    {
      title: "Seed Stories",
      description: "This documentary explores the conservation of 1,000+ endangered heirloom rice varieties in the Niyamgiri mountains, Odisha."
    },
    {
      title: "Drivers of Crop Residue Burning and its Mitigation",
      description: "This research project aims to comprehend the drivers behind CRB and propose effective mitigation strategies."
    },
    {
      title: "One Health and the Impact of Climate Change",
      description: "This multidisciplinary, collaborative application uses a One Health framework to examine the interconnected disease burden and patterns of infection transmission across human, animal, and environmental reservoirs."
    }
  ];

  const futureProjects = [
    {
      title: "Climate-Resilient Food Systems",
      description: "Assess how rising temperatures and changing rainfall patterns affect crop productivity across various landscapes"
    },
    {
      title: "Nutrition shifts and health",
      description: "To understand how changes in nutrition and food consumption patterns influence disease risk and health outcomes."
    }
  ];

  return (
    <div>
      <HeroBanner
        images={['/images/photos/research/headers/1.jpg']}
        overlayOpacity={0.85}
        scrimClassName="bg-gradient-to-r from-[#0a2238]/65 via-[#0a2238]/45 to-[#0a2238]/20"
      >
        <h1 className="mb-6 text-5xl drop-shadow-md">Climate, Food Systems & Health</h1>
        <p className="text-2xl text-gray-100 max-w-3xl leading-relaxed drop-shadow-md">
          Examining how climate change is reshaping food systems, nutrition, disease patterns, and livelihoods
        </p>
      </HeroBanner>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg mb-16 leading-relaxed text-justify">
            This research area will examine how climate change is reshaping food systems, nutrition, disease patterns, and livelihoods. It will focus on the interconnected challenges of agricultural stress, food insecurity, heat exposure, water-related risks, and changing health outcomes, while identifying pathways for resilience and sustainable adaptation. By linking research across agriculture, health, sustainability, and livelihoods, the Centre will generate evidence to inform policy, strengthen community resilience, and support more equitable development pathways.
          </p>

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
