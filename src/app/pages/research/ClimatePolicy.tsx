import { useState } from "react";
import amitaBaviskar from "../../../imports/Dr._Amita_Baviskar.jpg";
import aparajitaDasgupta from "../../../imports/Dr._Aparajita_Dasgupta.jpg";
import bharatRamaswami from "../../../imports/Dr._Bharat_Ramaswami.jpg";
import deveshRoy from "../../../imports/Dr._Devesh_Roy.jpg";
import digvijaySinghNegi from "../../../imports/Dr._Digvijay_Singh_Negi.jpg";
import kavitaSardana from "../../../imports/Dr._Kavita_Sardana.jpg";
import mukulSharma from "../../../imports/Dr._Mukul_Sharma.jpg";
import sumedhaBasu from "../../../imports/Dr_Sumedha_Basu.jpg";

export function ClimatePolicy() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const people = [
    {
      name: "Dr. Sumedha Basu",
      profileUrl: "https://www.ashoka.edu.in/profile/sumedha-basu/",
      imageUrl: sumedhaBasu
    },
    {
      name: "Dr. Amita Baviskar",
      profileUrl: "https://www.ashoka.edu.in/profile/amita-baviskar/",
      imageUrl: amitaBaviskar
    },
    {
      name: "Dr. Aparajita Dasgupta",
      profileUrl: "https://www.ashoka.edu.in/profile/aparajita-dasgupta/",
      imageUrl: aparajitaDasgupta
    },
    {
      name: "Dr. Bharat Ramaswami",
      profileUrl: "https://www.ashoka.edu.in/profile/bharat-ramaswami/",
      imageUrl: bharatRamaswami
    },
    {
      name: "Dr. Devesh Roy",
      profileUrl: "https://www.ashoka.edu.in/profile/devesh-roy/",
      imageUrl: deveshRoy
    },
    {
      name: "Dr. Digvijay Singh Negi",
      profileUrl: "https://www.ashoka.edu.in/profile/digvijay-singh-negi/",
      imageUrl: digvijaySinghNegi
    },
    {
      name: "Dr. Kavita Sardana",
      profileUrl: "https://www.ashoka.edu.in/profile/kavita-sardana/",
      imageUrl: kavitaSardana
    },
    {
      name: "Dr. Mukul Sharma",
      profileUrl: "https://www.ashoka.edu.in/profile/mukul-sharma/",
      imageUrl: mukulSharma
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

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0d3862] via-[#1a5280] to-[#0d3862] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl">Climate Policy, Finance & Governance</h1>
          <p className="text-2xl text-gray-100 max-w-3xl leading-relaxed">
            Focusing on policies, practices, and institutions for sustainable energy transitions in India
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg mb-8 leading-relaxed text-justify">
            This vertical will centrally focus on policies, practices, and institutions pertaining to energy transitions in India with the aim of helping it achieve a sustainable and viable energy infrastructure. Energy transition policy has evolved to become the cornerstone of urgent global climate action. Multitudinous technologies, pathways, and instruments are being explored in response to local contexts and political economies.
          </p>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed text-justify">
            Simultaneously, energy policy needs to respond to the complexities emerging at multiple levels: deepening geopolitical tensions and climate change impacts, the complexities of domestic developmental demands and institutional pitfalls, and local demand-side energy use. Increasingly termed as complex and messy, energy transition policy is evidently witnessing varied social, economic, and political implications.
          </p>

          <p className="text-gray-700 text-lg mb-16 leading-relaxed text-justify">
            Public acceptance, rent-seeking, institutional and fossil-fuel lock-in dynamics, behavioural shift, equity and justice demand novel areas of frameworks and research to inform a purposive and time bound energy transition. The Energy Policy studies vertical will bridge the evolving, multidimensional challenges of the energy transition in the global south. Building an interdisciplinary research team, the vertical will focus on policy facing and data-backed research for a timely, equitable, sustainable energy transition.
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
