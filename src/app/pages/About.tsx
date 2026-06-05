import imrozeKhan from "../../imports/Image_1.jfif";
import shivaniKrishna from "../../imports/Image_2.jpg";
import gauravGarg from "../../imports/Image_3.jpg";
import rohithUnnikrishnan from "../../imports/Image_4.jfif";
import { ScrollReveal } from "../components/ScrollReveal";

export function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0d3862] via-[#1a5280] to-[#0d3862] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl">About 3CS</h1>
          <p className="text-2xl text-gray-100 max-w-3xl leading-relaxed">
            The Centre for Climate Change and Sustainability at Ashoka University
          </p>
        </div>
      </section>

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

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-8">People</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#0d3862] hover:shadow-lg transition-all duration-300">
              <a href="https://www.ashoka.edu.in/profile/imroze-khan/" target="_blank" rel="noopener noreferrer" className="block">
                <img src={imrozeKhan} alt="Imroze Khan" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl text-[#0d3862] mb-2">Imroze Khan</h3>
                  <p className="text-gray-600 leading-relaxed">Director, Centre for Climate Change and Sustainability</p>
                </div>
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#0d3862] hover:shadow-lg transition-all duration-300">
              <a href="https://www.ashoka.edu.in/profile/shivani-krishna/" target="_blank" rel="noopener noreferrer" className="block">
                <img src={shivaniKrishna} alt="Shivani Krishna" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl text-[#0d3862] mb-2">Shivani Krishna</h3>
                  <p className="text-gray-600 leading-relaxed">Faculty Coordinator</p>
                </div>
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#0d3862] hover:shadow-lg transition-all duration-300">
              <a href="https://www.ashoka.edu.in/profile/gaurav-c-garg/" target="_blank" rel="noopener noreferrer" className="block">
                <img src={gauravGarg} alt="Gaurav Garg" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl text-[#0d3862] mb-2">Gaurav Garg</h3>
                  <p className="text-gray-600 leading-relaxed">Faculty Coordinator</p>
                </div>
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#0d3862] hover:shadow-lg transition-all duration-300">
              <div className="block">
                <img src={rohithUnnikrishnan} alt="Rohith Unnikrishnan" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl text-[#0d3862] mb-2">Rohith Unnikrishnan</h3>
                  <p className="text-gray-600 leading-relaxed">Deputy Manager</p>
                </div>
              </div>
            </div>
          </div>
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

            <ScrollReveal delay={150}>
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

            <ScrollReveal delay={300}>
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
