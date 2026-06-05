import anuragAgrawal from "../../../imports/Dr._Anurag_Agrawal.jpg";
import imrozeKhan from "../../../imports/Image_3-1.jpg";
import laasyaSamhita from "../../../imports/Dr._Laasya_Samhita.jpg";
import rintuKutum from "../../../imports/Dr._Rintu_Kutum.jpg";
import shraddhaKarve from "../../../imports/Dr._Shraddha_Karve.jpg";

export function ClimateAMR() {
  const people = [
    {
      name: "Dr. Anurag Agrawal",
      profileUrl: "https://www.ashoka.edu.in/profile/anurag-agrawal/",
      imageUrl: anuragAgrawal
    },
    {
      name: "Dr. Imroze Khan",
      profileUrl: "https://www.ashoka.edu.in/profile/imroze-khan/",
      imageUrl: imrozeKhan
    },
    {
      name: "Dr. Laasya Samhita",
      profileUrl: "https://www.ashoka.edu.in/profile/laasya-samhita/",
      imageUrl: laasyaSamhita
    },
    {
      name: "Dr. Rintu Kutum",
      profileUrl: "https://www.ashoka.edu.in/profile/rintu-kutum/",
      imageUrl: rintuKutum
    },
    {
      name: "Dr. Shraddha Karve",
      profileUrl: "https://www.ashoka.edu.in/profile/shraddha-karve/",
      imageUrl: shraddhaKarve
    }
  ].sort((a, b) => a.name.localeCompare(b.name));

  const ongoingProjects = [
    {
      title: "Climate-Driven AMR in Soil and Water Systems",
      description: "To understand how climatic changes, wastewater contamination, and land degradation influence the emergence, persistence, and spread of antimicrobial resistance across soil and water environments."
    },
    {
      title: "Identification of novel antimicrobials against AMR using AI-assisted technologies",
      description: "Using artificial intelligence and advanced computational methods to discover new antimicrobial compounds that can combat antimicrobial resistance."
    }
  ];

  const futureProjects = [
    {
      title: "Antimicrobial Peptide Discovery as Therapeutics & Mitigation against rising Environmental AMR with climate warming",
      description: "Develop mitigation strategies to reduce environmental AMR by combining surveillance of drug-resistant microbes with the discovery of counteractive novel antimicrobial peptides and nature-based control approaches across diverse Indian ecosystems (e.g., mountains, forests, to coastal regions)"
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0d3862] via-[#1a5280] to-[#0d3862] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl">Climate Change and Environmental Antimicrobial Resistance</h1>
          <p className="text-2xl text-gray-100 max-w-3xl leading-relaxed">
            Understanding how climate change influences antimicrobial resistance in soil and water systems
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg mb-16 leading-relaxed text-justify">
            This vertical will focus on understanding how climate change influences antimicrobial resistance (AMR) in soil and water systems, followed by devising strategies to mitigate the abundance of AMR. It will examine how climate change and environmental degradation accelerate the emergence, persistence, and spread of resistant microbes and genes across interconnected wildlife, livestock, human, soil, and water systems. Bacterial AMR was associated with an estimated 4.71 million deaths globally in 2021, including 1.14 million deaths directly attributable to resistance, while 42% of household wastewater was not safely treated in 2022, releasing an estimated 113 billion m³ into the environment and increasing contamination risks for soils and water bodies. By integrating research on climate stress, environmental monitoring, microbial ecology, and public health, and by exploring novel antibiotics comprised of antimicrobial peptides, which have evolved over approximately 2 billion years, the Centre will generate evidence and practical pathways to reduce environmental AMR and support more sustainable and equitable health and environmental outcomes.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl">People</h2>
          <div className="flex justify-center gap-8 pb-4 flex-wrap">
            {people.map((person, index) => (
              <div key={index} className="flex-shrink-0 text-center">
                {person.profileUrl ? (
                  <a href={person.profileUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto border-4 border-[#0d3862] hover:border-[#1a5280] transition-all">
                      <img
                        src={person.imageUrl}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-700 font-medium whitespace-nowrap hover:text-[#0d3862] transition-colors">{person.name}</p>
                  </a>
                ) : (
                  <>
                    <div className="w-32 h-32 bg-[#0d3862] rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium whitespace-nowrap">{person.name}</p>
                  </>
                )}
              </div>
            ))}
          </div>
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
