import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import { SDGBackground } from "../components/SDGBackground";
import { HeroBanner } from "../components/HeroBanner";
import integratedDesign from "../../imports/Integrated_Design_for_Sustainable_Living.jpg";
import evCharging from "../../imports/EV_Charging_Points.jpg";
import rainWater from "../../imports/Rain_Water_Harvesting.jpg";
import composting from "../../imports/Composting_Facility.jpg";
import nursery from "../../imports/On-site_Nursery__Cultivating_Greenery.jpg";
import sewage from "../../imports/Sewage_Treatment_Plants.jpg";
import solarEnergy from "../../imports/Empowering_Campus_Life_with_Solar_Energy.jpg";
import organicGarden from "../../imports/Organic_Kitchen_Gardens.jpg";
import climateFellowship from "../../imports/Ashoka_Environmental_Defense_Fund_Climate_Corps_Fellowship.png";

// 🎬 Paste your YouTube video URL here (full URL or embed URL)
const YOUTUBE_VIDEO_URL = "https://www.youtube.com/embed/YOUR_VIDEO_ID";

export function Sustainability() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviousReportsOpen, setIsPreviousReportsOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % initiatives.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + initiatives.length) % initiatives.length);
  };

  const initiatives = [
    {
      icon: (
        <img
          src={integratedDesign}
          alt="Integrated Design for Sustainable Living"
          className="w-full h-full object-cover rounded-2xl"
        />
      ),
      title: "Integrated Design for Sustainable Living",
      description: "Sustainability is not just a buzzword for us; it's ingrained in our design philosophy. Buildings on our campus are a testament to design thinking that incorporates outdoor corridors, natural ventilation in common areas, 'jaali' sunshades, and other passive features. These elements harmoniously merge with technologically advanced building systems to create a living and learning environment that respects nature.",
      link: "https://www.ashoka.edu.in/integrated-design-for-sustainable-living/"
    },
    {
      icon: (
        <img
          src={evCharging}
          alt="EV Charging Points"
          className="w-full h-full object-cover rounded-2xl"
        />
      ),
      title: "EV Charging Points: Powering Sustainable Transportation",
      description: "Ashoka University understands the importance of sustainable transportation. That's why we provide 24/7 electric vehicle charging stations equipped with Type-2 AC Chargers. These chargers are designed for durability and user authentication, promoting a clean and eco-friendly mode of commuting on campus."
    },
    {
      icon: (
        <img
          src={rainWater}
          alt="Rainwater Harvesting"
          className="w-full h-full object-cover rounded-2xl"
        />
      ),
      title: "Rainwater Harvesting: Nurturing Groundwater",
      description: "To combat water scarcity, we have implemented 15 rainwater harvesting pits strategically placed across the campus. Regular maintenance ensures these pits effectively recharge groundwater, and each pit includes a chamber for silt removal. By allowing rainwater to seep into the ground, we actively contribute to maintaining groundwater levels."
    },
    {
      icon: (
        <img
          src={composting}
          alt="Campus Composting Facility"
          className="w-full h-full object-cover rounded-2xl"
        />
      ),
      title: "Campus Composting Facility: Turning Waste into Useful Products",
      description: "Our dedicated composting facility transforms organic waste into nutrient-rich compost. With a capacity of 500kg/day, the facility supports sustainable waste management. The composting process, with a quick turnaround time of 10 days, ensures efficient recycling of organic materials to our nursery as compost contributing to a circular economy."
    },
    {
      icon: (
        <img
          src={nursery}
          alt="On-site Nursery"
          className="w-full h-full object-cover rounded-2xl"
        />
      ),
      title: "On-site Nursery: Cultivating Greenery",
      description: "Enhancing the natural beauty of our campus, our skilled team of gardeners manages an on-site nursery with more than 900 potted plants, which helps beautify the campus and improve indoor air quality. In-house propagation of plants in the nursery helps replace mortality. Propagated plants are distributed among students and staff to encourage affection for plants. Annually, we grow around 6000+ plants, enriching the campus environment and promoting biodiversity."
    },
    {
      icon: (
        <img
          src={sewage}
          alt="Sewage Treatment Plants"
          className="w-full h-full object-cover rounded-2xl"
        />
      ),
      title: "Sewage Treatment Plants: Harnessing Water Responsibly",
      description: "Ashoka University operates two sewage treatment plants with capacities of 100KLD and 300KLD. These plants utilize advanced Moving Bed Biofilm Reactor (MBBR) technology to treat wastewater to the standards set by the Central Pollution Control Board. Treated water is repurposed for irrigation, cleaning solar panels, and future plans include extending its use for toilet flushing and construction activities."
    },
    {
      icon: (
        <img
          src={solarEnergy}
          alt="Solar Energy"
          className="w-full h-full object-cover rounded-2xl"
        />
      ),
      title: "Empowering Campus Life with Solar Energy",
      description: "With solar panels strategically placed on car park rooftops, we aim to make sustainability a seamless part of your daily life on campus. Beyond the environmental benefits, solar-powered facilities contribute to a cleaner and more resilient energy infrastructure, fostering a sense of responsibility and empowerment within our community. In our quest for sustainability, we have explored rooftops and offsite solar farms to further enhance our renewable energy capacity."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Ensuring Air Purity: Our Commitment to AQI Monitoring",
      description: "At Ashoka University, the well-being of our community is paramount. In our pursuit of providing a safe and healthy environment, we have implemented a robust Air Quality Index (AQI) monitoring system. This system is designed to track key pollutants, specifically PM 2.5 and PM 10, to gauge the air quality within our campus."
    },
    {
      icon: (
        <img
          src={organicGarden}
          alt="Organic Kitchen Gardens"
          className="w-full h-full object-cover rounded-2xl"
        />
      ),
      title: "Organic Kitchen Gardens: Growing Community and Fresh Produce",
      description: "Our Organic Kitchen Gardens, initiated in 2016, by Vanita Shastri, Rashmi Singh and Sunita Bansal to engage students in community building through the cultivation of seasonal organic vegetables. By avoiding synthetic fertilizers and pesticides it ensures the production of 100% pure and fresh food. From winter vegetables like Kale and Brussel Sprouts, community to choose from freshly picked produce, encouraging healthy eating and cooking with garden-fresh ingredients."
    },
    {
      icon: (
        <img
          src={climateFellowship}
          alt="Climate Corps Fellowship"
          className="w-full h-full object-cover rounded-2xl"
        />
      ),
      title: "Ashoka-Environmental Defense Fund Climate Corps Fellowship",
      description: "The Ashoka-Environmental Defense Fund Climate Corps Fellowship represents a crucial partnership between Ashoka University and the Environmental Defense Fund, dedicated to addressing climate change through practical, actionable solutions. This fellowship programme is a unique platform that equips passionate postgraduate students with the skills and opportunities to lead on climate issues, directly working with companies and public institutions committed to advancing sustainability goals.",
      link: "https://x.ashoka.edu.in/climate_corps/"
    }
  ];

  const programs = [
    {
      title: "SDG Aligned Courses",
      description: "At Ashoka University, a diverse range of courses focusing on the Sustainable Development Goals (SDGs) emphasizes the crucial role of Environmental Studies in education. These courses encourage students to explore and understand the significant impact humans have on the environment. Topics covered range from climate change and species extinction to socio-economic responsibilities and environmental justice, guiding students towards sustainable living with nature.",
      link: "https://www.ashoka.edu.in/sdg-aligned-courses/"
    },
    {
      title: "LiveGreen@Ashoka",
      description: "LiveGreen@Ashoka is a university-wide sustainability endeavour led by students and staff. It is a tangible manifestation of the university's commitment to transforming its campus into a living lab for circular economy innovations and sustainable practices, serving as a model for other academic institutions. The initiative's mission was to create a strong connection within the Ashoka community and inspire everyone to adopt sustainable choices on campus.",
      link: "https://www.ashoka.edu.in/livegreenashoka/"
    }
  ];

  const researchCentres = [
    { name: "Ashoka Centre for a People-centric Energy Transition (ACPET)", url: "https://acpet.ashoka.edu.in/" },
    { name: "Safexpress Centre for Data, Learning and Decision Sciences", url: "https://www.ashoka.edu.in/page/centre-for-data-learning-and-decision-sciences-cdlds/" },
    { name: "Centre for Interdisciplinary Archaeological Research (CIAR)", url: "https://www.ashoka.edu.in/page/centre-for-interdisciplinary-archaeological-research/" },
    { name: "Centre for Social and Behaviour Change (CSBC)", url: "https://www.ashoka.edu.in/page/centre-for-interdisciplinary-archaeological-research/" },
    { name: "Isaac Centre for Public Policy (ICPP)", url: "https://icpp.ashoka.edu.in/" },
    { name: "Centre for Health Analytics and Trends", url: "https://www.ashoka.edu.in/page/centre-for-health-analytics-research-and-trends-chart/" },
    { name: "Koita Centre for Digital Health at Ashoka (KCDH-A)", url: "https://kcdha.ashoka.edu.in/" },
    { name: "Centre for Social Impact and Philanthropy", url: "https://csip.ashoka.edu.in/" },
    { name: "Centre for Data Science and Analytics (CDSA)", url: "https://cdsa.ashoka.edu.in/hello/" }
  ];

  const latestReports = [
    { title: "EHS and Sustainability Report 2025", url: "https://www.ashoka.edu.in/wp-content/uploads/2026/06/AU-Sustanability-Report-2025.pdf" },
    { title: "SDG Report 2025", url: "https://www.ashoka.edu.in/wp-content/uploads/2025/10/Annual-SDG-Report_2025.pdf" },
    { title: "Biodiversity Report", url: "https://www.ashoka.edu.in/wp-content/uploads/2023/12/Fauna-in-and-around-Ashoka-University.pdf" },
    { title: "Inclusion, Diversity and Belonging Report 2023-24", url: "https://www.ashoka.edu.in/wp-content/uploads/2024/07/Inclusion-Diversity-and-Belonging-Report-2023-24.pdf" }
  ];

  const previousReports = [
    { title: "Environment Sustainability Report 2024", url: "https://www.ashoka.edu.in/wp-content/uploads/2025/10/AU-Sustanability-Report-2024.pdf" },
    { title: "Annual SDG Report 2023", url: "https://www.ashoka.edu.in/wp-content/uploads/2024/11/Ashoka-SDG-Report-2023-SDG-1-3-4-5-6-7-9-V2.pdf" },
    { title: "Annual SDG Report 2021", url: "https://www.ashoka.edu.in/wp-content/uploads/2024/11/Ashoka-SDG-Report-2021.pdf" },
    { title: "Environment Sustainability Report 2023", url: "https://www.ashoka.edu.in/wp-content/uploads/2024/05/AU-Sustanability-Report-2023.pdf" },
    { title: "Environment Sustainability Report 2022", url: "https://www.ashoka.edu.in/wp-content/uploads/2023/08/Ashoka-Sustainability-Resport-2022.pdf" },
    { title: "Environment Sustainability Report 2021", url: "https://www.ashoka.edu.in/wp-content/uploads/2022/10/AU-sustanability-report.pdf" }
  ];

  const policies = [
    { title: "Declaration on Net Zero", url: "https://www.ashoka.edu.in/wp-content/uploads/2024/03/Declaration-on-Net-Zero-1.pdf" },
    { title: "Declaration on Carbon Reduction Target", url: "https://www.ashoka.edu.in/wp-content/uploads/2024/04/Declaration-on-Carbon-Reduction-Target-1.pdf" },
    { title: "Ashoka University Sustainable Procurement Policy", url: "https://www.ashoka.edu.in/wp-content/uploads/2022/02/Sustainable-Procurement-Policy-3-1.pdf" },
    { title: "Fundraising & Donation Policy", url: "https://www.ashoka.edu.in/wp-content/uploads/2022/02/Fundraising-Donation-Policy-3.pdf" },
    { title: "Investment Policy", url: "https://www.ashoka.edu.in/wp-content/uploads/2022/02/Investment-Policy-3.pdf" }
  ];

  return (
    <div>
      <HeroBanner images={[
        '/images/photos/sustainability/IMG_0049.JPG',
        '/images/photos/sustainability/IMG_1888.jpeg',
        '/images/photos/sustainability/IMG_3424.JPG'
      ]} className="py-24">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold drop-shadow-md">Sustainability at Ashoka</h1>
          <p className="text-2xl text-gray-100 leading-relaxed drop-shadow-md">
            Creating a sustainable and eco-friendly campus that fosters academic excellence and environmental responsibility
          </p>
        </div>
      </HeroBanner>

      <section className="py-24 relative">
        <SDGBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-gray-700 text-lg mb-8 leading-relaxed text-justify">
            Ashoka University is a pioneer in its focus on providing a liberal education at par with the best in the world. The aim at Ashoka is to help students become well-rounded individuals who can think critically about issues from multiple perspectives, communicate effectively and become leaders with a commitment to public service. Our endeavour is to achieve academic excellence along with a focus towards environmental sustainability.
          </p>

          <p className="text-gray-700 text-lg mb-16 leading-relaxed text-justify">
            We not only focus on preparing the students for a promising social and professional future but also want to imbibe in our students, faculty and staff the moral responsibility towards a sustainable environment. We at Ashoka believe in contributing to environment sustainability along with institutional growth. At Ashoka University, we are dedicated to creating a sustainable and eco-friendly campus that not only fosters academic excellence but also prioritizes environmental responsibility. Our commitment to sustainability is evident through a range of initiatives that contribute to a greener and healthier future.
          </p>

          {/* Video Section */}
          <div className="mb-16">
            <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={YOUTUBE_VIDEO_URL}
                title="Sustainability at Ashoka University"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>

          <h2 className="mb-16 text-5xl text-center">Our Sustainability Initiatives</h2>

          <div className="relative w-full flex items-center gap-6">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="w-14 h-14 bg-[#0d3862] text-white rounded-full flex items-center justify-center hover:bg-[#1a5280] transition-all shadow-lg hover:scale-110 z-20 flex-shrink-0"
              aria-label="Previous initiative"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Stacked Cards Container */}
            <div className="relative w-full h-[380px] flex items-center justify-center flex-1">
              {initiatives.map((initiative, index) => {
                const offset = index - currentIndex;
                const isActive = index === currentIndex;
                const isNext = offset === 1;
                const isPrev = offset === -1;
                const isVisible = isActive || isNext || isPrev;

                if (!isVisible) return null;

                return (
                  <div
                    key={index}
                    className="absolute w-full transition-all duration-500"
                    style={{
                      transform: `translateX(${offset * 30}px) scale(${isActive ? 1 : 0.95})`,
                      zIndex: isActive ? 10 : 5 - Math.abs(offset),
                      opacity: isActive ? 1 : 0.3,
                    }}
                  >
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-12 shadow-2xl h-[360px]">
                      <div className="flex flex-col md:flex-row gap-12 items-center h-full">
                        {/* Left Side - Icon */}
                        <div className="md:w-2/5 flex justify-center">
                          <div className="w-64 h-64 bg-gradient-to-br from-[#0d3862] to-[#1a5280] rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                            {(initiative.title === "Integrated Design for Sustainable Living" ||
                              initiative.title === "EV Charging Points: Powering Sustainable Transportation" ||
                              initiative.title === "Rainwater Harvesting: Nurturing Groundwater" ||
                              initiative.title === "Campus Composting Facility: Turning Waste into Useful Products" ||
                              initiative.title === "On-site Nursery: Cultivating Greenery" ||
                              initiative.title === "Sewage Treatment Plants: Harnessing Water Responsibly" ||
                              initiative.title === "Empowering Campus Life with Solar Energy" ||
                              initiative.title === "Organic Kitchen Gardens: Growing Community and Fresh Produce" ||
                              initiative.title === "Ashoka-Environmental Defense Fund Climate Corps Fellowship") ? (
                              <div className="w-full h-full">
                                {initiative.icon}
                              </div>
                            ) : (
                              <div className="text-white transform scale-[2.5]">
                                {initiative.icon}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="md:w-3/5 flex flex-col h-full">
                          <h3 className="text-3xl text-[#0d3862] mb-6 font-semibold flex-shrink-0">
                            {initiative.link ? (
                              <a href={initiative.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {initiative.title}
                              </a>
                            ) : (
                              initiative.title
                            )}
                          </h3>
                          <div className="overflow-y-auto pr-2 flex-1 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <p className="text-gray-700 text-lg leading-relaxed text-justify">
                              {initiative.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="w-14 h-14 bg-[#0d3862] text-white rounded-full flex items-center justify-center hover:bg-[#1a5280] transition-all shadow-lg hover:scale-110 z-20 flex-shrink-0"
              aria-label="Next initiative"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {initiatives.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${index === currentIndex ? 'bg-[#0d3862] w-8' : 'bg-gray-300 w-3'
                  }`}
                aria-label={`Go to initiative ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 relative">
        <SDGBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="mb-12 text-center text-4xl">Educational Programs & Community Engagement</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {programs.map((program, index) => (
              <a key={index} href={program.link} target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-gray-200 p-10 rounded-lg hover:border-[#0d3862] hover:shadow-lg transition-all duration-300 block group">
                <h3 className="mb-4 text-2xl text-[#0d3862] group-hover:underline">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">{program.description}</p>
                <div className="mt-4 inline-flex items-center text-[#0d3862] gap-2 group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl">Sustainability-focused Research Centres</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {researchCentres.map((centre, index) => (
              <a key={index} href={centre.url} target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#0d3862] hover:shadow-lg transition-all duration-300 block group">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0d3862] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-[#0d3862]">{centre.name}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 relative">
        <SDGBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="mb-12 text-center text-4xl">Policies and Reports</h2>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestReports.map((report, index) => (
                <a key={index} href={report.url} target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-[#0d3862] hover:shadow-lg transition-all duration-300 text-center group block">
                  <div className="w-16 h-16 bg-[#0d3862] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg text-[#0d3862] mb-2 group-hover:underline">{report.title}</h3>
                </a>
              ))}
            </div>

            <div className="border-t-2 border-gray-300 pt-8"></div>

            <div className="space-y-4">
              <Collapsible open={isPreviousReportsOpen} onOpenChange={setIsPreviousReportsOpen}>
                <CollapsibleTrigger className="w-full bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#0d3862] hover:shadow-lg transition-all duration-300 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0d3862] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl text-[#0d3862]">Previous Years Reports</h3>
                  </div>
                  <svg className={`w-6 h-6 text-gray-600 transition-transform ${isPreviousReportsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 space-y-3">
                    {previousReports.map((report, index) => (
                      <a key={index} href={report.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded hover:bg-gray-50 transition-colors group">
                        <svg className="w-5 h-5 text-[#0d3862] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 group-hover:text-[#0d3862]">{report.title}</span>
                      </a>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={isPoliciesOpen} onOpenChange={setIsPoliciesOpen}>
                <CollapsibleTrigger className="w-full bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#0d3862] hover:shadow-lg transition-all duration-300 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0d3862] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl text-[#0d3862]">Policies</h3>
                  </div>
                  <svg className={`w-6 h-6 text-gray-600 transition-transform ${isPoliciesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 space-y-3">
                    {policies.map((policy, index) => (
                      <a key={index} href={policy.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded hover:bg-gray-50 transition-colors group">
                        <svg className="w-5 h-5 text-[#0d3862] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 group-hover:text-[#0d3862]">{policy.title}</span>
                      </a>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="text-center mt-8">
              <a href="https://www.ashoka.edu.in/resources/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#0d3862] hover:text-[#1a5280] transition-colors text-lg group">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="group-hover:underline">View All Resources, Reports & Policies</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-8 text-4xl">Join the Movement</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify mb-6">
            Sustainability at Ashoka is a collective effort. It integrates green technology interventions, behavioural changes, and operational interventions, making sustainability a tangible and integral part of campus life. The initiative empowers the Ashoka community to adopt green technologies, implement behavioural changes, and actively participate in operational interventions that promote sustainability.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Connect with us <a href="mailto:sustainability@ashoka.edu.in" className="text-[#0d3862] hover:underline font-medium">sustainability@ashoka.edu.in</a>
          </p>
        </div>
      </section>
    </div>
  );
}
