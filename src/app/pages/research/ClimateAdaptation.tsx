import gauravGarg from "../../../imports/Image_1.jpg";
import divyaKarnad from "../../../imports/Image_2-1.jpg";
import imrozeKhan from "../../../imports/Image_3-1.jpg";
import manviSharma from "../../../imports/Image_4.jpg";
import meghnaAgarwala from "../../../imports/Image_5.jpg";
import shivaniKrishna from "../../../imports/Image_6.jpg";

export function ClimateAdaptation() {
  const people = [
    {
      name: "Dr. Divya Karnad",
      profileUrl: "https://www.ashoka.edu.in/profile/divya-karnad/",
      imageUrl: divyaKarnad
    },
    {
      name: "Dr. Gaurav Garg",
      profileUrl: "https://www.ashoka.edu.in/profile/gaurav-c-garg/",
      imageUrl: gauravGarg
    },
    {
      name: "Dr. Imroze Khan",
      profileUrl: "https://www.ashoka.edu.in/profile/imroze-khan/",
      imageUrl: imrozeKhan
    },
    {
      name: "Dr. Manvi Sharma",
      profileUrl: "https://www.ashoka.edu.in/profile/manvi-sharma/",
      imageUrl: manviSharma
    },
    {
      name: "Dr. Meghna Agarwala",
      profileUrl: "https://www.ashoka.edu.in/profile/meghna-agarwala/",
      imageUrl: meghnaAgarwala
    },
    {
      name: "Dr. Shivani Krishna",
      profileUrl: "https://www.ashoka.edu.in/profile/shivani-krishna/",
      imageUrl: shivaniKrishna
    }
  ].sort((a, b) => a.name.localeCompare(b.name));

  const ongoingProjects = [
    {
      title: "Impact of Climate Change on Small Mammal Communities and Risks of Spillover Infections",
      description: "This long-term study uses molecular and ecological methods across habitat gradients to assess the potential for zoonotic spillovers, establish a monitoring regime for zoonotic diseases, and document the evolutionary consequences of climate change on biodiversity."
    },
    {
      title: "Quantifying Teak Age to Understand the Impact of Climate Stress",
      description: "This research delves into the genetic underpinnings of plant ageing using the bisulfite method, a groundbreaking exploration that parallels human genome studies associated with ageing by focusing on the economically vital teak species."
    },
    {
      title: "Quantifying Forest Fires and Fire Understory to Understand Climate-Fire-Forest Composition Interaction",
      description: "This study explores the intricate relationship between climate, fire, and forest composition, recognising the potential compromise of ecosystem functions in low-species diversity environments, such as monoculture plantations."
    },
    {
      title: "Shifting Fish and Fisheries: Examining Fishers and Seafood Trade Responses to Shifting Fish Distributions in India",
      description: "Synthesise ecological, economic, and citizen-sourced information to quantify marine ecological changes from climate change on India's east and west coasts"
    }
  ];

  const futureProjects = [
    {
      title: "Montane ecosystem resilience initiative",
      description: "To establish a monitoring and restoration program in selected Himalayan montane landscapes to reconnect fragmented habitat corridors and stabilise erosion-prone slopes across different elevations."
    },
    {
      title: "Mangrove Blue Carbon Restoration",
      description: "To launch a coastal restoration effort in mangrove-dominated areas of the Bay of Bengal, focusing on mangrove replanting, tidal exchange rehabilitation, and sediment stabilisation to restore ecosystem integrity and climate resilience."
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0d3862] via-[#1a5280] to-[#0d3862] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl">Climate Adaptation, Biodiversity and Resilience</h1>
          <p className="text-2xl text-gray-100 max-w-3xl leading-relaxed">
            Ecosystem restoration for climate resilience through biodiversity monitoring and ecological research
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg mb-8 leading-relaxed text-justify">
            A core focus of this research vertical will be biodiversity monitoring and ecological research to guide and measure ecosystem recovery. Through this approach, ecosystem restoration can become a practical and measurable strategy for strengthening climate resilience, supporting biodiversity, and enhancing long-term carbon storage in India, beginning with the Himalayan montane ecosystem and the mangrove-dominated coastal margins.
          </p>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed text-justify">
            In the Himalayas, restoration will address the impacts of habitat fragmentation, land-use change, and shifting precipitation patterns by restoring native vegetation, stabilizing slopes, and reconnecting habitat corridors across elevational gradients. These interventions will help strengthen biodiversity, ecological stability, and landscape resilience.
          </p>

          <p className="text-gray-700 text-lg mb-16 leading-relaxed text-justify">
            Parallelly, mangrove ecosystems along the Bay of Bengal, globally significant blue carbon reservoirs, offer a critical opportunity for climate adaptation and resilience. In mature systems, sediment organic carbon typically makes up ~3-5% of soil mass, with radiocarbon ages of ~4,000-5,000 years, reflecting long-term carbon removal. Restoring these ecosystems can strengthen coastal resilience while rebuilding ecosystem integrity and long-term carbon removal through mangrove restoration, tidal exchange, and sediment stabilization. Together, these efforts position biodiversity assessments and ecosystem restoration as core strategies across some of India's most climate-sensitive regions.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl">People</h2>
          <div className="flex justify-center gap-8 pb-4 flex-wrap">
            {people.map((person, index) => (
              <div key={index} className="flex-shrink-0 text-center">
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
