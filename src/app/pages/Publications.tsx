import type { ReactNode } from "react";

/** 3CS-affiliated author. */
function A({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-[#0d3862]">{children}</strong>;
}

/** Journal name, volume or other italicised element of a citation. */
function I({ children }: { children: ReactNode }) {
  return <em className="italic">{children}</em>;
}

interface Publication {
  citation: ReactNode;
  url?: string;
}

const publications2026: Publication[] = [
  {
    citation: (
      <>
        Patel, V., Kalita, A., Furtado, K. M., Mor, N., Bhadada, S., Albert, S., Ashraf, H., Balsari, S.,
        Bhushan, I., Chandru, V., Chatterjee, M., Chaturvedi, S., Dharmaraju, R., Gupta, A.,
        Mazumdar-Shaw, K., <A>Menon, G. I.</A>, Mukherji, A., Muttreja, P., Nambiar, A., Narayan, T.,
        Patwardhan, B., Ravi, T., Sharma, S., Shetty, D., Shukla, S. K., Subramanian, S. V., Varkey, L.,
        Venkateswaran, S., Zadey, S., &amp; Khanna, T. The <I>Lancet</I> Commission on a citizen-centred
        health system for India. <I>The Lancet</I>, 2026; 407, 388–468.
      </>
    ),
    url: "https://doi.org/10.1016/S0140-6736(25)02169-5"
  },
  {
    citation: (
      <>
        Sharma, I., Soni, B., Barik, M., Tyagi, J., Ingale, S., Singh, C., <A>Menon, G. I.</A>, &amp;
        Bhaumik, S. Climate change and health in South Asia: A systematic mapping.{" "}
        <I>The Journal of Climate Change and Health</I>, 2026; 27, 100645.
      </>
    ),
    url: "https://doi.org/10.1016/j.joclim.2025.100645"
  },
  {
    citation: (
      <>
        Shit, B., Makinishi, S., Singh, T., &amp; <A>Khan, I.</A> Diet impacts the effects of thermal
        stress on infection outcomes. <I>BMC Ecology and Evolution</I>, 26, 34 (2026).
      </>
    ),
    url: "https://doi.org/10.1186/s12862-026-02516-w"
  },
  {
    citation: (
      <>
        <A>Basu, D. N.</A>, Khangar, P., Joshi, K., <A>Krishna, S.</A>, &amp; <A>Khan, I.</A> Tracking
        microbiome composition and stability across Indian social honeybees foraging in a homogeneous
        mustard crop landscape. <I>Microbial Ecology</I> (2026).
      </>
    ),
    url: "https://doi.org/10.1007/s00248-026-02828-w"
  },
  {
    citation: (
      <>
        Dovih, P., Karjee, R., Garg, K. M., &amp; <A>Chattopadhyay, B.</A> Northeast India as the next
        frontier of EcoHealth and One Health research. <I>EcoHealth</I> (2026).
      </>
    ),
    url: "https://doi.org/10.1007/s10393-026-01782-w"
  },
  {
    citation: (
      <>
        Iyer, V., Ansil, B. R., Sreenivas, D., Sanyal, A., Ramakrishnan, U., &amp;{" "}
        <A>Chattopadhyay, B.</A> (2026). Anthropogenic habitats shape gut microbiome composition in
        Southern Indian bats. <I>bioRxiv</I>.
      </>
    ),
    url: "https://doi.org/10.64898/2025.12.23.695677"
  },
  {
    citation: (
      <>
        Bandyopadhyay, S., Dutta, P. P., Hari, N., &amp; <A>Maity, B.</A> (2026). Female legislators and
        forest conservation in India. <I>Journal of Economic Behavior &amp; Organization</I>, <I>241</I>,
        107375.
      </>
    ),
    url: "https://doi.org/10.1016/j.jebo.2025.107375"
  },
  {
    citation: (
      <>
        Ghosh, A., Borgohain, J., War, R. M., &amp; <A>Rajaraman, B. K.</A> (2026).{" "}
        <I>Passive acoustic monitoring of Ensiferan calling diversity in a sub-tropical forest of
        Northeast India</I> [Preprint]. bioRxiv.
      </>
    ),
    url: "https://doi.org/10.64898/2026.06.14.732046"
  }
];

const publicationsPrevious: Publication[] = [
  {
    citation: (
      <>
        Cherian, P., &amp; <A>Menon, G. I.</A> Modelling a potential zoonotic spillover event of H5N1
        influenza. <I>BMC Public Health</I>, 2025; 25(1), 3983.
      </>
    ),
    url: "https://doi.org/10.1186/s12889-025-25358-5"
  },
  {
    citation: (
      <>
        Kottillil, S., Kottillil, S., Krishna, Y., Ferretti, F., &amp; <A>Karnad, D.</A> (2025). Digital
        conservation can fill data gaps in data-poor regions: Case of elasmobranchs in India.{" "}
        <I>Aquatic Conservation: Marine and Freshwater Ecosystems</I>, 35(11), e70241.
      </>
    ),
    url: "https://doi.org/10.1002/aqc.70241"
  },
  {
    citation: (
      <>
        Seal, S., Basu, D. N., Ghosh, K., Ramachandran, A., Kutum, R., Shelke, T., Gupta, I., &amp;{" "}
        <A>Khan, I.</A> (2025). Pathogen growth and virulence dynamics drive the host evolution against
        coinfections. <I>Proceedings of the National Academy of Sciences</I>, 122(17), e2412124122.
      </>
    ),
    url: "https://doi.org/10.1073/pnas.2412124122"
  },
  {
    citation: (
      <>
        Ghosh, A., Dasoju, V., Borgohain, J., Rahman, A., &amp; <A>Rajaraman, B.</A> (2024). Syntopic call
        diversity among morphologically similar calling morphs of the paleotropical katydid of genus{" "}
        <I>Mecopoda</I> (Tettigoniidae) from an Indo-Burma biodiversity hotspot.
      </>
    ),
    url: "https://doi.org/10.1101/2024.11.20.624612"
  },
  {
    citation: (
      <>
        Garg, K. M., Lamba, V., Sanyal, A., Dovih, P., &amp; <A>Chattopadhyay, B.</A> Next generation
        sequencing revolutionizes organismal biology research in bats.{" "}
        <I>Journal of Molecular Evolution</I>, 2023; 91(4), 391–404.
      </>
    ),
    url: "https://doi.org/10.1007/s00239-023-10107-2"
  },
  {
    citation: (
      <>
        Ghosh, A., Jaiswara, R., Monaal, Sabharwal, S., Dasoju, V., Bhattacharjee, A., &amp;{" "}
        <A>Rajaraman, B. K.</A> (2023). Description of three new species of predatory genus{" "}
        <I>Hexacentrus</I> (Orthoptera: Tettigoniidae) from India, with bioacoustic and morphological
        characterizations. <I>Zootaxa</I>, 5249(3), 335–356.
      </>
    ),
    url: "https://doi.org/10.11646/zootaxa.5249.3.2"
  },
  {
    citation: (
      <>
        Chandel, A., Sarwat, W., Najah, A., Dhanagare, S., &amp; <A>Agarwala, M.</A> (2022). Evaluating
        methods to map burned area at 30-meter resolution in forests and agricultural areas of Central
        India. <I>Frontiers in Forests and Global Change</I>, 5, 933807.
      </>
    ),
    url: "https://doi.org/10.3389/ffgc.2022.933807"
  },
  {
    citation: (
      <>
        <A>Agarwala, M.</A>, Bhattacharjee, S., &amp; Dasgupta, A. (2022). Unintended consequences of
        Indian groundwater preservation law on crop residue burning. <I>Economics Letters</I>,{" "}
        <I>214</I>, 110446.
      </>
    ),
    url: "https://doi.org/10.1016/j.econlet.2022.110446"
  },
  {
    citation: (
      <>
        Chakraborty, A., Kumar, S., <A>Shashidhara, L. S.</A>, &amp; Taneja, A. (2021). Building
        sustainable societies through purpose-driven universities: A case study from Ashoka University
        (India). <I>Sustainability</I>, <I>13</I>(13), 7423.
      </>
    ),
    url: "https://doi.org/10.3390/su13137423"
  }
];

function PublicationList({ items }: { items: Publication[] }) {
  return (
    <ol className="space-y-4">
      {items.map((pub, index) => (
        <li
          key={index}
          className="bg-white border border-gray-200 border-l-4 border-l-[#0d3862] rounded-r-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex gap-4">
            <span className="shrink-0 w-8 h-8 rounded-full bg-gray-100 text-[#0d3862] flex items-center justify-center text-sm font-semibold">
              {index + 1}
            </span>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed text-justify">{pub.citation}</p>
              {pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-[#0d3862] hover:text-[#1a5280] transition-colors group/link"
                >
                  <span className="text-sm font-medium group-hover/link:underline">View Publication</span>
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function SectionHeading({ title, count }: { title: string; count: number }) {
  return (
    <div className="flex items-baseline gap-4 mb-6">
      <h2 className="text-3xl text-[#0d3862] font-semibold">{title}</h2>
      <span className="h-px flex-1 bg-gray-200" />
      <span className="text-sm text-gray-500">
        {count} {count === 1 ? "publication" : "publications"}
      </span>
    </div>
  );
}

export function Publications() {
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <SectionHeading title="2026" count={publications2026.length} />
            <PublicationList items={publications2026} />
          </div>

          <div>
            <SectionHeading title="Previous Years" count={publicationsPrevious.length} />
            <PublicationList items={publicationsPrevious} />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl text-[#0d3862] mb-4 font-semibold">Explore More Publications</h3>
            <p className="text-gray-700 mb-6 text-justify">
              Visit the Ashoka University research portal to explore the complete collection of
              publications from across the university.
            </p>
            <a
              href="https://ashokapvs.researgence.ai/Home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0d3862] to-[#1a5280] text-white px-8 py-3 rounded-lg hover:shadow-xl transition-all text-lg font-medium group"
            >
              <span>View Ashoka University Publications</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="/research"
            className="inline-flex items-center text-[#0d3862] hover:gap-3 gap-2 transition-all text-lg group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Research
          </a>
        </div>
      </section>
    </div>
  );
}
