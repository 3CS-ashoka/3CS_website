import { useState } from "react";
import amitaBaviskar from "../../../imports/Dr._Amita_Baviskar.jpg";
import bipashaMaity from "../../../imports/Dr._Bipasha_Maity.jpg";
import gauravGarg from "../../../imports/Image_1.jpg";
import maheshRangarajan from "../../../imports/Dr._Mahesh_Rangarajan.jpg";
import mitulBaruah from "../../../imports/Dr._Mitul_Baruah.jpg";
import mukulSharma from "../../../imports/Dr._Mukul_Sharma.jpg";
import sumanaRoy from "../../../imports/Dr._Sumana_Roy.jpg";

export function EHUSS() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const people = [
    {
      name: "Dr. Amita Baviskar",
      profileUrl: "https://www.ashoka.edu.in/profile/amita-baviskar/",
      imageUrl: amitaBaviskar
    },
    {
      name: "Dr. Bipasha Maity",
      profileUrl: "https://www.ashoka.edu.in/profile/bipasha-maity/",
      imageUrl: bipashaMaity
    },
    {
      name: "Dr. Gaurav Garg",
      profileUrl: "https://www.ashoka.edu.in/profile/gaurav-c-garg/",
      imageUrl: gauravGarg
    },
    {
      name: "Dr. Mahesh Rangarajan",
      profileUrl: "https://www.ashoka.edu.in/profile/mahesh-rangarajan/",
      imageUrl: maheshRangarajan
    },
    {
      name: "Dr. Mitul Baruah",
      profileUrl: "https://www.ashoka.edu.in/profile/mitul-baruah/",
      imageUrl: mitulBaruah
    },
    {
      name: "Dr. Mukul Sharma",
      profileUrl: "https://www.ashoka.edu.in/profile/mukul-sharma/",
      imageUrl: mukulSharma
    },
    {
      name: "Dr. Sumana Roy",
      profileUrl: "https://www.ashoka.edu.in/profile/sumana-roy/",
      imageUrl: sumanaRoy
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
      title: "Female Legislators and Forest Conservation in India",
      description: "This research project investigates the impact of female elected political representatives on environmental outcomes, specifically forest cover growth in India."
    },
    {
      title: "The Indian Plant Humanities",
      description: "This project is creating an archive of thought on plant life by writers, artists, philosophers, and scientists from the Indian subcontinent over two millennia, and is exploring environmental humanities at the intersection of botany, culture, and sustainability."
    },
    {
      title: "Amphibious Lives",
      description: "This project is creating an archive of thought on plant life by writers, artists, philosophers, and scientists from the Indian subcontinent over two millennia while exploring environmental humanities at the intersection of botany, culture, and sustainability."
    }
  ];

  const futureProjects = [
    {
      title: "Environment and conservation policies and practices",
      description: "Research focusing on policies and practices at all levels of governance from global to local."
    },
    {
      title: "Community-based localised micro solutions",
      description: "Studies on community-based localised micro solutions to environmental problems with a focus on ecologically sensitive areas of India."
    },
    {
      title: "Changing cultures of engagement with the environment",
      description: "Research on the meaning and impact on changing cultures of engagement with the environment with a focus on hobby-based activities such as birding, hiking, mountaineering, and wildlife photography."
    },
    {
      title: "Real estate development and urban sustainability",
      description: "Examining the intersection of real estate development and urban sustainability practices."
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0d3862] via-[#1a5280] to-[#0d3862] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl">Environment Humanities and Social Science</h1>
          <p className="text-2xl text-gray-100 max-w-3xl leading-relaxed">
            Focusing on the impact of climate change on lived experiences of individuals and groups
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg mb-8 leading-relaxed text-justify">
            EHUSS focuses on the impact of climate change on the lived experiences of individuals and groups. It recognises that not all knowledge can flow from experts. EHUSS aims to learn about and from innovative individual and community-based micro solutions to climate change. It focuses on bringing to the fore the experiences, voices, and knowledge of groups at the frontlines of climate change in India.
          </p>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed text-justify">
            EHUSS has two broad principles. One, it recognises that not all knowledge and innovation can flow from experts. We can and should learn from people and communities around us. Two, a key component of adaptation to climate change is culture. The EHUSS promotes thinking of we can (re)orient our culture of engaging towards nature to build a sustainable future.
          </p>

          <p className="text-gray-700 text-lg mb-16 leading-relaxed text-justify">
            After all, if for some reason, we cannot innovate our way out of climate change, then adaptation through a profound transformation in our culture of consumption, production and sensibility towards the environment may be the only way out for humanity to survive. While EHUSS raises important questions, deliberates on long-term transformations, and seeks to make a softer and long-term impact on how we related to nature through research, communication, and education, the EHUSS also aims to collaborate with other verticals in 3CS and through 3CS with other centres at Ashoka to co-solve environmental challenges facing India.
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
