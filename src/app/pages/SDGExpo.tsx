import { HeroBanner } from "../components/HeroBanner";

export function SDGExpo() {
  return (
    <div>
      <HeroBanner images={[
        '/images/photos/sdg-expo/IMG_8767.JPG',
        '/images/photos/sdg-expo/IMG_8790.JPG',
        '/images/photos/sdg-expo/IMG_8811.JPG',
        '/images/photos/sdg-expo/IMG_8831.JPG',
        '/images/photos/sdg-expo/IMG_9173.JPG',
        '/images/photos/sdg-expo/IMG_9370.JPG',
        '/images/photos/sdg-expo/IMG_9401.JPG',
        '/images/photos/sdg-expo/IMG_9448.JPG',
        '/images/photos/sdg-expo/_MG_9522.JPG',
        '/images/photos/sdg-expo/_MG_9551.JPG',
        '/images/photos/sdg-expo/_MG_9650.JPG',
        '/images/photos/sdg-expo/_MG_9679.JPG'
      ]} className="py-24">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold drop-shadow-md">SDG Expo at Ashoka University</h1>
          <p className="text-2xl text-gray-100 leading-relaxed drop-shadow-md">
            Celebrating the United Nations' Sustainable Development Goals through innovation, collaboration, and community engagement
          </p>
        </div>
      </HeroBanner>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg leading-relaxed text-justify mb-6">
            The SDG Expo at Ashoka University marks the observance of UN SDG Day by creating a dynamic platform to showcase the university's commitment to sustainable development. Bringing together students, faculty, and partners, the Expo highlights innovative projects, research, and initiatives aligned with the Sustainable Development Goals.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Through interactive exhibits, pilot interventions, and knowledge-sharing engagements, the Expo fosters dialogue, collaboration, and cross-disciplinary learning. It serves as both a celebration of ongoing sustainability efforts on campus and a catalyst for deeper engagement and action toward achieving the SDGs.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-4xl">SDG Flag Day 2025: Together for a Sustainable Future</h2>

              <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
                On 25th September 2025, Ashoka University's campus came alive with creativity, collaboration, and commitment at the SDG Flag Day Expo. Hosted by the Office of Sustainability, the Expo brought together students, faculty, research centres, and external partners to celebrate the United Nations' 17 Sustainable Development Goals (SDGs) and highlight the university's role in driving sustainable change.
              </p>

              <h3 className="text-2xl text-[#0d3862] mb-4 mt-8">Interactive Stalls & Community Spirit</h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
                The SDG Expo featured 17 interactive stalls representing Ashoka's diverse contributions to global sustainability. Each stall showcased unique initiatives. The stalls were not only informative but engaging along with pottery-making, ice cream counters, sugarcane juice, and food stalls adding a community spirit to the learning experience.
              </p>

              <h3 className="text-2xl text-[#0d3862] mb-4 mt-8">Sustainability Rendezvous</h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
                The university hosted an inspiring session, Sustainability Rendezvous, which opened with a welcome address by Prof. Somak Raychaudhury, Vice Chancellor. This was followed by a virtual keynote by Shri Suresh Prabhu, Former Senior Cabinet Minister and India's former Sherpa to the G7 and G20 Summits.
              </p>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
                The highlight of the session was the official release of the Ashoka SDG Report 2025, marking a milestone in the university's sustainability journey. The fireside chat, moderated by Apoorva Shroff, Founder and Principal at lyth Design, further sparked discussions on sustainability, innovation, and design-thinking approaches for a resilient future. The session concluded with tea and interactions among students, faculty, and distinguished guests.
              </p>

              <h3 className="text-2xl text-[#0d3862] mb-4 mt-8">Hungry Caterpillar Bamboo Structure</h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
                To conclude the day, the celebrations moved to Food Street with the inauguration of the "Hungry Caterpillar" Bamboo Structure. Designed as a symbol of Ashoka's commitment to sustainable infrastructure, the installation reflects creativity, resilience, and the power of community-led design.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-[#0d3862] rounded-lg p-6 sticky top-24">
                <h3 className="text-xl text-[#0d3862] mb-4">Read About SDG Expo 2024</h3>
                <p className="text-gray-600 mb-4">
                  Learn about our previous year's celebrations and initiatives
                </p>
                <a href="https://www.ashoka.edu.in/ashoka-university-celebrates-sdg-flag-day-a-step-towards-global-sustainability/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0d3862] text-white px-6 py-3 rounded-md hover:bg-[#1a5280] transition-all group w-full justify-center">
                  <span>SDG Expo 2024</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl text-center">SDG 2025 Highlights: Ashoka's Community Shaping Tomorrow</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { sdg: "SDG 1: No Poverty", org: "Rotaract Club", color: "#E5243B", number: "1" },
              { sdg: "SDG 2: Zero Hunger", org: "Project Protein and Bake My Day by Surmeet", color: "#DDA63A", number: "2" },
              { sdg: "SDG 3: Good Health & Well-Being", org: "Ashoka Centre for Well-Being", color: "#4C9F38", number: "3" },
              { sdg: "SDG 4: Quality Education", org: "NEEV", color: "#C5192D", number: "4" },
              { sdg: "SDG 5: Gender Equality", org: "Spread Smile Foundation", color: "#FF3A21", number: "5" },
              { sdg: "SDG 7: Affordable & Clean Energy", org: "Ashoka Centre for a People-centric Energy Transition and ZOOL Energy", color: "#FFC20A", number: "7" },
              { sdg: "SDG 8: Decent Work & Economic Growth", org: "Centre for Entrepreneurship", color: "#A21942", number: "8" },
              { sdg: "SDG 9: Industry, Innovation & Infrastructure", org: "Alterclo", color: "#FD6925", number: "9" },
              { sdg: "SDG 10: Reduced Inequalities", org: "Ruhi and SOBAC", color: "#DD1367", number: "10" },
              { sdg: "SDG 11: Sustainable Cities & Communities", org: "Enactus and Exhibitions & Pottery makers from Asawarpur", color: "#FD9D24", number: "11" },
              { sdg: "SDG 12: Responsible Consumption & Production", org: "AU SDG Society, Artemis Prints", color: "#BF8B2E", number: "12" },
              { sdg: "SDG 13: Climate Action", org: "ACCESS", color: "#3F7E44", number: "13" },
              { sdg: "SDG 14: Life Below Water", org: "Dhaara", color: "#0A97D9", number: "14" },
              { sdg: "SDG 15: Life on Land", org: "Environment Ministry, Environmental Studies Department", color: "#56C02B", number: "15" },
              { sdg: "SDG 16: Peace, Justice & Strong Institutions", org: "Anitya, Kouna", color: "#00689D", number: "16" },
              { sdg: "SDG 17: Partnerships for the Goals", org: "Goonj", color: "#19486A", number: "17" }
            ].map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: item.color }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="absolute top-2 right-2 text-white font-bold text-7xl">{item.number}</div>
                </div>
                <div className="relative p-6 bg-gradient-to-br from-transparent to-black/10">
                  <h3 className="text-white font-bold mb-3 text-lg drop-shadow-lg">{item.sdg}</h3>
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-md">
                    <p className="text-gray-800 text-sm font-medium">{item.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 text-xl leading-relaxed text-justify italic">
            "With music, food, dialogue, and innovation, the 2025 SDG Flag Day Expo embodied Ashoka's vision of learning, action, and community coming together for sustainability."
          </p>
        </div>
      </section>
    </div>
  );
}
