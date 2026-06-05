import { useState } from "react";
import meghnaAgarwala from "../../../imports/Image_5.jpg";
import mekhalaKrishnamurthy from "../../../imports/Dr._Mekhala_Krishnamurthy.jpg";
import imrozeKhan from "../../../imports/Image_3-1.jpg";
import amitaBaviskar from "../../../imports/Dr._Amita_Baviskar.jpg";
import digvijaySinghNegi from "../../../imports/Dr._Digvijay_Singh_Negi.jpg";
import gautamMenon from "../../../imports/Dr._Gautam_Menon.jpg";
import mitulBaruah from "../../../imports/Dr._Mitul_Baruah.jpg";
import bharatRamaswami from "../../../imports/Dr._Bharat_Ramaswami.jpg";
import sandeepAmeta from "../../../imports/Dr._Sandeep_Ameta.jpg";

export function ClimateFoodHealth() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const people = [
    {
      name: "Dr. Amita Baviskar",
      profileUrl: "https://www.ashoka.edu.in/profile/amita-baviskar/",
      imageUrl: amitaBaviskar
    },
    {
      name: "Dr. Bharat Ramaswami",
      profileUrl: "https://www.ashoka.edu.in/profile/bharat-ramaswami/",
      imageUrl: bharatRamaswami
    },
    {
      name: "Dr. Digvijay Singh Negi",
      profileUrl: "https://www.ashoka.edu.in/profile/digvijay-singh-negi/",
      imageUrl: digvijaySinghNegi
    },
    {
      name: "Dr. Gautam Menon",
      profileUrl: "https://www.ashoka.edu.in/profile/gautam-menon-2/",
      imageUrl: gautamMenon
    },
    {
      name: "Dr. Imroze Khan",
      profileUrl: "https://www.ashoka.edu.in/profile/imroze-khan/",
      imageUrl: imrozeKhan
    },
    {
      name: "Dr. Meghna Agarwala",
      profileUrl: "https://www.ashoka.edu.in/profile/meghna-agarwala/",
      imageUrl: meghnaAgarwala
    },
    {
      name: "Dr. Mekhala Krishnamurthy",
      profileUrl: "https://www.ashoka.edu.in/profile/mekhala-krishnamurthy/",
      imageUrl: mekhalaKrishnamurthy
    },
    {
      name: "Dr. Mitul Baruah",
      profileUrl: "https://www.ashoka.edu.in/profile/mitul-baruah/",
      imageUrl: mitulBaruah
    },
    {
      name: "Dr. Sandeep Ameta",
      profileUrl: "https://www.ashoka.edu.in/profile/sandeep-ameta/",
      imageUrl: sandeepAmeta
    }
  ].sort((a, b) => a.name.localeCompare(b.name));

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const getVisiblePeople = () => {
    const visiblePeople = [];
    for (let i = 0; i < 4; i++) {
      const index = ((currentIndex + i) % people.length + people.length) % people.length;
      visiblePeople.push({ person: people[index], originalIndex: index });
    }
    return visiblePeople;
  };

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
      <section className="bg-gradient-to-br from-[#0d3862] via-[#1a5280] to-[#0d3862] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl">Climate, Food Systems, and Public Health</h1>
          <p className="text-2xl text-gray-100 max-w-3xl leading-relaxed">
            Examining how climate change is reshaping food systems, nutrition, disease patterns, and livelihoods
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg mb-16 leading-relaxed text-justify">
            This research area will examine how climate change is reshaping food systems, nutrition, disease patterns, and livelihoods. It will focus on the interconnected challenges of agricultural stress, food insecurity, heat exposure, water-related risks, and changing health outcomes, while identifying pathways for resilience and sustainable adaptation. By linking research across agriculture, health, sustainability, and livelihoods, the Centre will generate evidence to inform policy, strengthen community resilience, and support more equitable development pathways.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl">People</h2>

          <div className="relative w-full flex items-center justify-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="w-14 h-14 bg-[#0d3862] text-white rounded-full flex items-center justify-center hover:bg-[#1a5280] transition-all shadow-lg hover:scale-110 z-20 flex-shrink-0"
              aria-label="Previous people"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* People Grid */}
            <div className="flex-1 overflow-hidden">
              <div className="grid grid-cols-4 gap-6 transition-all duration-300">
                {getVisiblePeople().map((item, index) => (
                  <div key={`${item.originalIndex}-${currentIndex}-${index}`} className="flex-shrink-0 text-center">
                    {item.person.profileUrl ? (
                      <a href={item.person.profileUrl} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto border-4 border-[#0d3862] hover:border-[#1a5280] transition-all">
                          <img
                            src={item.person.imageUrl}
                            alt={item.person.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-gray-700 font-medium whitespace-nowrap hover:text-[#0d3862] transition-colors">{item.person.name}</p>
                      </a>
                    ) : (
                      <>
                        <div className="w-32 h-32 bg-[#0d3862] rounded-full flex items-center justify-center mb-4 mx-auto">
                          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700 font-medium whitespace-nowrap">{item.person.name}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="w-14 h-14 bg-[#0d3862] text-white rounded-full flex items-center justify-center hover:bg-[#1a5280] transition-all shadow-lg hover:scale-110 z-20 flex-shrink-0"
              aria-label="Next people"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
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
