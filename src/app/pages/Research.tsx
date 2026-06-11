import { ScrollReveal } from "../components/ScrollReveal";
import { HeroBanner } from "../components/HeroBanner";

export function Research() {
  const researchVerticals = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Climate Adaptation, Biodiversity and Resilience",
      description: "Ecosystem restoration for climate resilience focusing on biodiversity monitoring and ecological research. Work spans Himalayan montane ecosystems and mangrove-dominated coastal margins, addressing habitat fragmentation, land-use change, and supporting blue carbon reservoirs along the Bay of Bengal.",
      link: "/research/climate-adaptation"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Climate, Food Systems, and Public Health",
      description: "Examining how climate change is reshaping food systems, nutrition, disease patterns, and livelihoods. Focuses on interconnected challenges of agricultural stress, food insecurity, heat exposure, water-related risks, and changing health outcomes while identifying pathways for resilience and sustainable adaptation.",
      link: "/research/climate-food-health"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Climate Change and Environmental Antimicrobial Resistance",
      description: "Understanding how climate change influences antimicrobial resistance (AMR) in soil and water systems. Examines how climate change and environmental degradation accelerate the emergence, persistence, and spread of resistant microbes across wildlife, livestock, human, soil, and water systems.",
      link: "/research/climate-amr"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "AI for Climate Tech and Sustainability",
      description: "Pioneering rigorous Monitoring, Reporting, and Verification (MRV) systems built on reproducible, traceable, and scalable data infrastructure. Work spans AI-enabled remote MRV, improved methods for baselines and uncertainty, and multi-metric MRV including biodiversity, water security, and ecosystem resilience.",
      link: "/research/ai-climate"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Environment Humanities and Social Science (EHUSS)",
      description: "Focuses on the impact of climate change on lived experiences of individuals and groups. Aims to learn about and from innovative individual and community-based micro solutions to climate change, bringing to the fore the experiences, voices, and knowledge of groups at the frontlines of climate change in India.",
      link: "/research/ehuss"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Climate Policy, Finance & Governance",
      description: "Centrally focuses on policies, practices, and institutions pertaining to energy transitions in India with the aim of helping achieve a sustainable and viable energy infrastructure. Bridges the evolving, multidimensional challenges of energy transition in the global south through interdisciplinary research.",
      link: "/research/climate-policy"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Energy, Mobility, and Natural Resource Governance",
      description: "Focuses on transitions needed to move toward zero-emission energy systems while strengthening sustainable governance of natural resources. Examines intersections of energy use, mobility, infrastructure, land, water, and resource management to identify pathways that reduce emissions and support resilience.",
      link: "/research/energy-mobility"
    }
  ];

  return (
    <div>
      <HeroBanner images={['/images/photos/research/IMG20240916085837.jpg']} className="py-24">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold drop-shadow-md">Research</h1>
          <p className="text-2xl text-gray-100 leading-relaxed drop-shadow-md">
            Interdisciplinary working groups advancing climate science and sustainability solutions
          </p>
        </div>
      </HeroBanner>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <p className="text-gray-700 text-lg mb-8 leading-relaxed text-justify">
              At 3CS, research is organised through interdisciplinary working groups that form the core of the centre. Each group brings together affiliated faculty and students to identify priority questions, convene focused discussions, and help define promising directions for future work.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              These groups grow into vibrant research communities that seed student-led projects, create internship opportunities tied to each theme, and establish pathways for postdoctoral and early-career researchers to contribute to the centre's mission.
            </p>
          </div>

          <h2 className="mb-12 text-4xl">Research Verticals</h2>

          <div className="grid grid-cols-1 gap-8">
            {researchVerticals.map((vertical, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <a href={vertical.link} className="group bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-[#0d3862] hover:shadow-lg transition-all duration-300 block">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#0d3862] rounded-lg flex items-center justify-center transition-all">
                      <div className="text-white transition-all">
                        {vertical.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-2xl text-[#0d3862] group-hover:underline">{vertical.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed text-justify">{vertical.description}</p>
                      <div className="mt-4 inline-flex items-center text-[#0d3862] gap-2 group-hover:gap-3 transition-all">
                        <span>Learn more</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#0d3862] border-opacity-20">
            <div className="bg-gradient-to-r from-[#0d3862] to-[#1a5280] p-6 text-white">
              <h3 className="text-2xl mb-1">Explore More Research</h3>
              <p className="text-gray-200 text-sm">Discover collaborative opportunities and engage with our research community</p>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/publications" className="text-center p-6 bg-gray-50 rounded-lg hover:bg-[#0d3862] hover:text-white transition-all group block">
                <svg className="w-12 h-12 mx-auto mb-3 text-[#0d3862] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h4 className="text-lg font-semibold mb-2">Publications</h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-200">Access our latest research papers and scholarly work</p>
              </a>
              <a href="mailto:manager.3cs@ashoka.edu.in" className="text-center p-6 bg-gray-50 rounded-lg hover:bg-[#0d3862] hover:text-white transition-all group block">
                <svg className="w-12 h-12 mx-auto mb-3 text-[#0d3862] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h4 className="text-lg font-semibold mb-2">Collaborate</h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-200">Meet our researchers and join our initiatives</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
