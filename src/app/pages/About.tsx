import { useEffect, useState } from "react";
import dipendraNathBasu from "../../imports/Dipendra_Nath_Basu.jpg";
import saanviMagod from "../../imports/Saanvi_Magod.jpg";
import devashriAwasthy from "../../imports/Devashri_Awasthy.jpg";
import imrozeKhan from "../../imports/Image_1.jfif";
import shivaniKrishna from "../../imports/Image_2.jpg";
import gauravGarg from "../../imports/Image_3.jpg";
import rohithUnnikrishnan from "../../imports/Image_4.jfif";
import { ScrollReveal } from "../components/ScrollReveal";
import { HeroBanner } from "../components/HeroBanner";

const impactsData = [
  {
    title: "The Indian Plant Humanities Project",
    author: "Sumana Roy",
    content: [
      "The Indian Plant Humanities project has been initiated to construct an archive encompassing creative and critical perspectives on plant life from the Indian subcontinent over the past two millennia.",
      "The project documents a rich spectrum of Indian contributions, from classical Sanskrit metaphors of nature to J.C. Bose’s insights on plants and Tamil and Kannada poetry on women-tree sisterhoods. Supported by scholars from Harvard, Yale, and more, it aims to create a unique English-translated archive, showcasing India's Plant Humanities globally."
    ]
  },
  {
    title: "Amphibious Lives",
    author: "Mitul Baruah",
    content: [
      "This research project focuses on the island of Majuli, situated in the Brahmaputra River, which has undergone significant environmental transformations over the years due to flooding, riverbank erosion, and climate change.",
      "The research has unveiled the symbiotic relationships that the islanders have with the river and the broader natural environment, emphasising the river's dual role as a source of both destruction and livelihood. Additionally, it has shed light on the islanders' dependence on the chaporis and their coexistence with animals, domestic and wild, in these unique landscapes."
    ]
  },
  {
    title: "Seed Stories",
    author: "Aniket Aga and Chitrangada",
    content: [
      "Seed Stories as an initiative stands as the world's largest project of its kind, unfolding in the Eastern Ghats, a global biodiversity hotspot. The region, inhabited by Indigenous communities like the Kondhs, has nurtured a profound knowledge of diverse crop cultivation using traditional seeds developed over centuries.",
      "In essence, Seed Stories emerges as more than just a documentary—it is a call to action, an exploration of sustainable practices, and a testament to the resilience of Indigenous knowledge in the face of rapidly advancing agricultural technologies. Through its compelling narrative, the film seeks to bridge the gap between academia, journalism, and grassroots activism, igniting a dialogue that transcends geographic boundaries and speaks to the universal concerns of food security, ecological integrity, and social justice."
    ]
  },
  {
    title: "Impact of Climate Change on Biotic Communities and Risks of Disease Spillover",
    author: "Imroze Khan, Shivani Krishna, Kritika Garg, and Balaji Chattopadhyay",
    content: [
      "Studying climate change and habitat degradation's impact on wildlife helps implement conservation measures to protect species, sustain ecosystems, and promote sustainability. Longitudinal data tracking trends over time aids in predicting disease outbreaks and changing public health interventions accordingly.",
      "This study's findings can be utilised to educate communities, governments, and healthcare professionals on the importance of recognizing the links between environmental changes and infectious diseases, lowering the risk of zoonotic spillovers."
    ]
  },
  {
    title: "Drivers of Crop Residue Burning and its Mitigation",
    author: "Meghna Agarwala and Aparajita Dasgupta",
    content: [
      "Crop residue burning (CRB) poses a significant challenge in North India, impacting climate, weather patterns, and public health in the Indo-Gangetic Plains. The study successfully mapped CRB at high resolution, offering a more detailed understanding of its distribution.",
      "The research, spanning from 2021 to June 2023, initially formulated three hypotheses for CRB drivers. First, it explored the impact of the \"sub-soil surface water ban\" in Punjab and Haryana. Second, it investigated the trade-off between agricultural production, labour, and machinery. Lastly, it considered political cycles as potential influencers. To enhance insights, surveys were conducted across two states, and this grant facilitated the digitization of survey data, making it usable for analysis."
    ]
  },
  {
    title: "Re-Purposing Universities for Sustainable Societies: The Integrated Sustainability Model at Ashoka",
    author: "Anirban Chakraborty and L.S. Shashidhara",
    content: [
      "This project aimed to measure and compare sustainability performance across Indian universities, starting with a comprehensive review of Ashoka University's model using observations, data analysis, document reviews, and stakeholder interactions.",
      "The research emphasizes a holistic approach to sustainability in universities, integrating environmental, social, and economic perspectives. By analyzing an Indian university's model, it lays the groundwork for evaluating sustainability practices across higher education institutions in India."
    ]
  },
  {
    title: "Sustainable oceans require paying attention to what you eat and what you don’t",
    author: "Divya Karnad and Debayan Gupta",
    content: [
      "The InSeason Fish Project advocates sustainable marine conservation by promoting diverse seafood consumption, reducing impacts on endangered species, and raising awareness about ocean health.",
      "The project examines human behavior, seafood consumption, and marine life interactions. The project highlights the potential of aligning culinary choices with conservation, setting a precedent for responsible engagement with marine ecosystems."
    ]
  }
];

const peopleData = [
  {
    name: "Imroze Khan",
    role: "Director, Centre for Climate Change and Sustainability",
    href: "https://www.ashoka.edu.in/profile/imroze-khan/",
    image: imrozeKhan,
    objectPosition: "50% 18%",
  },
  {
    name: "Shivani Krishna",
    role: "Faculty Coordinator",
    href: "https://www.ashoka.edu.in/profile/shivani-krishna/",
    image: shivaniKrishna,
    objectPosition: "50% 12%",
  },
  {
    name: "Gaurav Garg",
    role: "Faculty Coordinator",
    href: "https://www.ashoka.edu.in/profile/gaurav-c-garg/",
    image: gauravGarg,
    objectPosition: "50% 12%",
  },
  {
    name: "Rohith Unnikrishnan",
    role: "Deputy Manager",
    href: "https://www.linkedin.com/in/unnikrishnanrohith",
    image: rohithUnnikrishnan,
    objectPosition: "50% 10%",
  },
  {
    name: "Dipendra Nath Basu",
    role: "Simons-Ashoka Early Career Fellow",
    href: "https://www.ashoka.edu.in/profile/dipendra-nath-basu/",
    image: dipendraNathBasu,
    objectPosition: "50% 22%",
  },
  {
    name: "Devashri Awasthy",
    role: "Research Fellow",
    href: "https://www.linkedin.com/in/devashri-awasthi-aa48901b3/",
    image: devashriAwasthy,
    objectPosition: "50% 20%",
  },
  {
    name: "Saanvi Magod",
    role: "Intern",
    href: "https://www.linkedin.com/in/saanvi-magod-6584ab27b/",
    image: saanviMagod,
    objectPosition: "50% 16%",
  },
];

function PeopleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.matchMedia("(max-width: 639px)").matches) setItemsPerPage(1);
      else if (window.matchMedia("(max-width: 1023px)").matches) setItemsPerPage(2);
      else setItemsPerPage(4);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(peopleData.length / itemsPerPage);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const startIdx = currentIndex * itemsPerPage;
  const visiblePeople = peopleData.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 bg-[#0d3862] text-white rounded-full flex items-center justify-center hover:bg-[#1a5280] transition-all shadow-lg hover:scale-110 -translate-x-1 sm:-translate-x-4"
        aria-label="Previous profiles"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="px-8 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visiblePeople.map((person) => (
            <div
              key={person.name}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#0d3862] hover:shadow-lg transition-all duration-300"
            >
              <a href={person.href} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-72 object-cover"
                  style={{ objectPosition: person.objectPosition }}
                />
                <div className="p-6">
                  <h3 className="text-xl text-[#0d3862] mb-2">{person.name}</h3>
                  {person.role && (
                    <p className="text-gray-600 leading-relaxed">{person.role}</p>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 bg-[#0d3862] text-white rounded-full flex items-center justify-center hover:bg-[#1a5280] transition-all shadow-lg hover:scale-110 translate-x-1 sm:translate-x-4"
        aria-label="Next profiles"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function ImpactSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(impactsData.length / itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const startIdx = currentIndex * itemsPerPage;
  const visibleItems = impactsData.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div>
      {/* Cards row */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 transition-all duration-500 ease-in-out"
          style={{ minHeight: '420px' }}
        >
          {visibleItems.map((impact, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="flex-1 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-2xl flex flex-col transition-all duration-500 opacity-100 animate-fadeIn"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#0d3862] to-blue-400" />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-[#0d3862] mb-2 leading-tight">{impact.title}</h3>
                <p className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wide">By {impact.author}</p>
                <div className="text-gray-700 leading-relaxed text-justify space-y-3 flex-grow text-sm overflow-y-auto">
                  {impact.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Fill empty slots if last page has fewer than 3 */}
          {visibleItems.length < itemsPerPage && Array.from({ length: itemsPerPage - visibleItems.length }).map((_, i) => (
            <div key={`empty-${i}`} className="flex-1 opacity-0 pointer-events-none" />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-white text-[#0d3862] rounded-full flex items-center justify-center hover:bg-[#0d3862] hover:text-white transition-all shadow-lg hover:scale-110"
          aria-label="Previous impacts"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-3'
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-white text-[#0d3862] rounded-full flex items-center justify-center hover:bg-[#0d3862] hover:text-white transition-all shadow-lg hover:scale-110"
          aria-label="Next impacts"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function About() {
  return (
    <div>
      <HeroBanner images={['/images/photos/about/v2 (5).jpeg']} className="py-24">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold drop-shadow-md">About 3CS</h1>
          <p className="text-2xl text-gray-100 leading-relaxed drop-shadow-md">
            The Centre for Climate Change and Sustainability at Ashoka University
          </p>
        </div>
      </HeroBanner>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
              The Centre for Climate Change and Sustainability (3CS) at Ashoka University was established in 2019 and aims to bring together members of the Ashoka community with a shared interest in studying, communicating, and mitigating the effects of human-induced climate change.
            </p>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
              In its first 6 years of existence, the 3CS established itself as one of Ashoka's most vibrant, active, and multi-disciplinary centres. The inaugural 3CS-organized meeting in February 2021, 'healing earth' held in the immediate aftermath of the COVID-19 pandemic, showcased the centre's approach. It combined rigorous academic methodologies addressing climate change and its impacts, with approaches to sustainability that emphasized the broader aspects of ecological health.
            </p>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
              The Centre has also supported an outstanding array of research by Ashoka faculty on the subject. Building on the success of the 3CS, we now propose to give 3CS a new direction, dynamism, and energy.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              The Centre will serve as a hub for interdisciplinary research, innovation, and action on climate change and sustainability. Bringing together expertise from the natural sciences, social sciences, humanities, policy, business, and technology, the Centre will generate knowledge and solutions that address urgent sustainability challenges of local importance while contributing to broader international thought and practice. A defining focus of the Centre will be to strengthen climate research, risk assessment, adaptation planning, resource management, and public engagement, supported by responsible use of artificial intelligence and emerging technologies.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-16 relative"
        style={{
          backgroundImage: "url('/images/photos/our-impact/1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#0d2238]/75 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="mb-12 text-center text-4xl text-white">Our Impacts</h2>

          {/* Slider */}
          <ImpactSlider />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-8">People</h2>

          <PeopleCarousel />
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-4xl">Vision</h2>
          <div className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 text-xl leading-relaxed text-justify">
              To create a leading research centre on climate and sustainability with the country's most vibrant and sophisticated climate and sustainability communication program, which will bring together scientists, humanists, and social scientists, along with professionals and practitioners in the field.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-4xl">Objectives</h2>

          <div className="space-y-6">
            <ScrollReveal delay={0}>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-[#0d3862] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-[#0d3862] rounded-lg flex items-center justify-center">
                  <span className="text-3xl text-white">1</span>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl text-[#0d3862]">Research</h3>
                  <p className="text-gray-700 text-lg leading-relaxed text-justify">
                    Advance research on climate change and sustainability by developing a focused research agenda spanning climate science, adaptation, sustainable development, policy and governance, climate communication, and the role of AI and digital technologies in sustainability.
                  </p>
                </div>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={75}>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-[#0d3862] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-[#0d3862] rounded-lg flex items-center justify-center">
                  <span className="text-3xl text-white">2</span>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl text-[#0d3862]">Knowledge-to-Action</h3>
                  <p className="text-gray-700 text-lg leading-relaxed text-justify">
                    Translate research into sustainable innovation and policy making by linking research and knowledge with communities to transform insights into practical solutions and public impact. The centre will aim to move promising ideas from research to real-world use, supporting start-ups, community projects, digital tools, and policy changes that deliver measurable social and environmental results.
                  </p>
                </div>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-[#0d3862] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-[#0d3862] rounded-lg flex items-center justify-center">
                  <span className="text-3xl text-white">3</span>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl text-[#0d3862]">Training & Education</h3>
                  <p className="text-gray-700 text-lg leading-relaxed text-justify">
                    Strengthen public understanding, training and education to motivate action by creating new ways to communicate the urgency and immediacy of climate change, while also building knowledge and capacity among students, practitioners, policymakers, and communities so that people feel empowered to act rather than overwhelmed by helplessness or fatalism.
                  </p>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
