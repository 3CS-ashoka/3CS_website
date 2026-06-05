import { useState } from "react";

export function Publications() {
  const [expandedYear, setExpandedYear] = useState<string>("2026");

  const publications = [
    // 2026
    {
      title: "The Lancet Commission on a citizen-centred health system for India",
      url: "https://doi.org/10.1016/S0140-6736(25)02169-5",
      status: "Published",
      year: "2026",
      sdgs: [
        { number: 3, title: "Good Health & Well-being" },
        { number: 10, title: "Reduced Inequalities" }
      ]
    },
    {
      title: "Female Legislators and Forest Conservation in India",
      url: "https://doi.org/10.1016/j.jebo.2025.107375",
      status: "Published",
      year: "2026",
      sdgs: [
        { number: 5, title: "Gender Equality" },
        { number: 15, title: "Life on Land" }
      ]
    },
    // 2025
    {
      title: "Pathogen growth and virulence dynamics drive the host evolution against coinfections",
      url: "https://doi.org/10.1073/pnas.2412124122",
      status: "Published",
      year: "2025",
      sdgs: [
        { number: 3, title: "Good Health & Well-being" }
      ]
    },
    {
      title: "Syntopic call diversity among morphologically similar calling morphs of the paleotropical katydid of genus Mecopoda",
      url: "https://doi.org/10.1080/09524622.2025.2476002",
      status: "Published",
      year: "2025",
      sdgs: [
        { number: 3, title: "Good Health & Well-being" },
        { number: 10, title: "Reduced Inequalities" }
      ]
    },
    {
      title: "Anthropogenic habitats shape gut microbiome composition in Southern Indian bats",
      url: "https://doi.org/10.1101/2025.12.23.695677",
      status: "Published",
      year: "2025",
      sdgs: [
        { number: 3, title: "Good Health & Well-being" },
        { number: 15, title: "Life on Land" }
      ]
    },
    {
      title: "Digital Conservation Can Fill Data Gaps in Data-Poor Regions: Case of Elasmobranchs in India",
      url: "https://doi.org/10.1002/aqc.70241",
      status: "Published",
      year: "2025",
      sdgs: [
        { number: 14, title: "Life Below Water" },
        { number: 17, title: "Partnerships" }
      ]
    },
    {
      title: "Climate change and health in South Asia: a systematic mapping",
      url: "https://www.sciencedirect.com/science/article/pii/S2667278225001440",
      status: "Published",
      year: "2025",
      sdgs: [
        { number: 3, title: "Good Health & Well-being" },
        { number: 13, title: "Climate Action" }
      ]
    },
    // 2024
    {
      title: "Sowing the seeds of climate crisis in Odisha",
      url: "https://ruralindiaonline.org/en/articles/sowing-the-seeds-of-climate-crisis-in-odisha/",
      status: "Published",
      year: "2024",
      sdgs: [
        { number: 13, title: "Climate Action" },
        { number: 1, title: "No Poverty" },
        { number: 15, title: "Life on Land" }
      ]
    },
    {
      title: "Cotton has now become a headache",
      url: "https://ruralindiaonline.org/en/articles/cotton-has-now-become-a-headache/",
      status: "Published",
      year: "2024",
      sdgs: [
        { number: 12, title: "Responsible Consumption & Production" },
        { number: 8, title: "Decent Work & Economic Growth" }
      ]
    },
    // 2023
    {
      title: "Next Generation Sequencing Revolutionizes Organismal Biology Research in Bats",
      url: "https://doi.org/10.1007/s00239-023-10114-1",
      status: "Published",
      year: "2023",
      sdgs: [
        { number: 9, title: "Industry & Innovation" },
        { number: 15, title: "Life on Land" }
      ]
    },
    {
      title: "Description of three new species of predatory Genus Hexacentrus from India",
      url: "https://doi.org/10.11646/zootaxa.5249.3.2",
      status: "Published",
      year: "2023",
      sdgs: [
        { number: 15, title: "Life on Land" },
        { number: 9, title: "Industry & Innovation" }
      ]
    },
    // 2022
    {
      title: "Unintended Consequences of Indian Groundwater Preservation Law on Crop Residue Burning",
      url: "https://doi.org/10.1016/j.econlet.2022.110446",
      status: "Published",
      year: "2022",
      sdgs: [
        { number: 13, title: "Climate Action" },
        { number: 6, title: "Clean Water" },
        { number: 2, title: "Zero Hunger" }
      ]
    },
    {
      title: "Evaluating methods to map burned area at 30-meter resolution in Central India",
      url: "https://doi.org/10.3389/ffgc.2022.933807",
      status: "Published",
      year: "2022",
      sdgs: [
        { number: 15, title: "Life on Land" },
        { number: 13, title: "Climate Action" }
      ]
    },
    // 2021 & Previous
    {
      title: "Building Sustainable Societies through Purpose-Driven Universities: A Case Study from Ashoka University",
      url: "https://www.mdpi.com/2071-1050/13/13/7423",
      status: "Published",
      year: "2021",
      sdgs: [
        { number: 4, title: "Quality Education" },
        { number: 11, title: "Sustainable Cities" }
      ]
    },
    {
      title: "Political cycles in crop residue burning: Evidence from India",
      url: "https://www.ashoka.edu.in/research/political-cycles-in-crop-residue-burningevidence-from-india/",
      status: "Published",
      year: "2021",
      sdgs: [
        { number: 13, title: "Climate Action" },
        { number: 11, title: "Sustainable Cities" }
      ]
    },
    // Manuscripts in Review
    {
      title: "Out of Sight, Out of Mind: Societal Extinction of Sawfish in Coastal India",
      url: null,
      status: "In Review",
      year: "In Review",
      sdgs: [
        { number: 14, title: "Life Below Water" }
      ]
    },
    {
      title: "Increases in Wheat and Rice Production Associated with Increasing Crop Residue Burning (CRB) in India",
      url: null,
      status: "In Review",
      year: "In Review",
      sdgs: [
        { number: 6, title: "Clean Water" },
        { number: 13, title: "Climate Action" }
      ]
    }
  ];

  // Group publications by year
  const groupedPublications: { [key: string]: typeof publications } = {
    "2026": [],
    "2025": [],
    "2024": [],
    "2023": [],
    "2022": [],
    "2021 & Previous": [],
    "Manuscripts in Review": []
  };

  publications.forEach(pub => {
    if (pub.year === "2026") {
      groupedPublications["2026"].push(pub);
    } else if (pub.year === "2025") {
      groupedPublications["2025"].push(pub);
    } else if (pub.year === "2024") {
      groupedPublications["2024"].push(pub);
    } else if (pub.year === "2023") {
      groupedPublications["2023"].push(pub);
    } else if (pub.year === "2022") {
      groupedPublications["2022"].push(pub);
    } else if (pub.year === "2021") {
      groupedPublications["2021 & Previous"].push(pub);
    } else if (pub.year === "In Review") {
      groupedPublications["Manuscripts in Review"].push(pub);
    }
  });

  const yearOrder = ["2026", "2025", "2024", "2023", "2022", "2021 & Previous", "Manuscripts in Review"];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0d3862] via-[#1a5280] to-[#0d3862] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl">Publications</h1>
          <p className="text-2xl text-gray-100 max-w-3xl leading-relaxed">
            Research publications from the Centre for Climate Change and Sustainability
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {yearOrder.map((year, yearIndex) => {
              const pubs = groupedPublications[year];
              if (pubs.length === 0) return null;
              const isExpanded = expandedYear === year;

              return (
                <div
                  key={year}
                  className="group"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${yearIndex * 0.1}s both`
                  }}
                >
                  <button
                    onClick={() => setExpandedYear(isExpanded ? "" : year)}
                    className="w-full flex items-center justify-between bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-800 p-5 rounded-xl hover:border-[#0d3862] hover:bg-gradient-to-r hover:from-[#0d3862] hover:to-[#1a5280] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-white/20 group-hover:to-white/10 flex items-center justify-center transition-all duration-300">
                        <span className="text-xl font-bold text-[#0d3862] group-hover:text-white">
                          {yearIndex + 1}
                        </span>
                      </div>
                      <div className="text-left">
                        <h2 className="text-2xl font-semibold">{year}</h2>
                        <p className="text-sm opacity-70 group-hover:opacity-90">
                          {pubs.length} {pubs.length === 1 ? 'publication' : 'publications'}
                        </p>
                      </div>
                    </div>
                    <svg
                      className={`w-7 h-7 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div
                      className="mt-4 space-y-3 overflow-hidden"
                      style={{
                        animation: 'slideDown 0.4s ease-out'
                      }}
                    >
                      {pubs.map((pub, index) => (
                        <div
                          key={index}
                          className="bg-white border-l-4 border-transparent hover:border-[#0d3862] p-6 rounded-r-xl shadow-sm hover:shadow-md transition-all duration-300 ml-4"
                          style={{
                            animation: `fadeInLeft 0.4s ease-out ${index * 0.1}s both`
                          }}
                        >
                          <h3 className="text-lg text-gray-900 mb-3 leading-relaxed text-justify font-medium">
                            {pub.title}
                          </h3>

                          {pub.url && (
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[#0d3862] hover:text-[#1a5280] transition-colors group/link mb-3"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                              <span className="group-hover/link:underline text-sm font-medium">View Publication</span>
                              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}

                          <div className="flex items-center gap-3 flex-wrap">
                            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${
                              pub.status === "Published"
                                ? "bg-green-100 text-green-800 border border-green-200"
                                : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                            }`}>
                              <span className={`w-2 h-2 rounded-full mr-2 ${
                                pub.status === "Published" ? "bg-green-500" : "bg-yellow-500"
                              }`}></span>
                              {pub.status}
                            </span>

                            {pub.sdgs.map((sdg, sdgIndex) => (
                              <div
                                key={sdgIndex}
                                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1.5 rounded-full border border-gray-200 hover:shadow-md transition-all group/sdg"
                              >
                                <span className="text-xs font-medium text-gray-600 group-hover/sdg:text-gray-800">SDG</span>
                                <span
                                  className="text-xs font-bold text-white px-2 py-0.5 rounded-full shadow-sm"
                                  style={{ backgroundColor: getSDGColor(sdg.number) }}
                                  title={sdg.title}
                                >
                                  {sdg.number}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl text-[#0d3862] mb-4 font-semibold">Explore More Publications</h3>
            <p className="text-gray-700 mb-6 text-justify">
              Visit the Ashoka University research portal to explore the complete collection of publications from across the university.
            </p>
            <a
              href="https://ashokapvs.researgence.ai/Home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0d3862] to-[#1a5280] text-white px-8 py-3 rounded-lg hover:shadow-xl transition-all text-lg font-medium group"
            >
              <span>View Ashoka University Publications</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a href="/research" className="inline-flex items-center text-[#0d3862] hover:gap-3 gap-2 transition-all text-lg group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Research
          </a>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 5000px;
          }
        }
      `}</style>
    </div>
  );
}

function getSDGColor(number: number): string {
  const colors: { [key: number]: string } = {
    1: "#E5243B",
    2: "#DDA63A",
    3: "#4C9F38",
    4: "#C5192D",
    5: "#FF3A21",
    6: "#26BDE2",
    8: "#A21942",
    9: "#FD6925",
    10: "#DD1367",
    11: "#FD9D24",
    12: "#BF8B2E",
    13: "#3F7E44",
    14: "#0A97D9",
    15: "#56C02B",
    17: "#19486A"
  };
  return colors[number] || "#000000";
}
