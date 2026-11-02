import { Link } from "react-router";
import { SDGLogo } from "../components/SDGLogo";
import { HeroBanner } from "../components/HeroBanner";

export function Home() {
  const images = [
    "/images/photos/home/Doriya_River_of_Majuli.jpg",
    "/images/photos/home/IMG20241116170255 (1).jpg",
    "/images/photos/home/v2 (10).jpeg",
    "/images/photos/home/v2 (6).jpeg",
    "/images/photos/home/v2 (7).jpeg",
    "/images/photos/home/v2 (9).jpeg"
  ];

  const focusAreas = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Research",
      description: "Advancing research on climate change and sustainability through interdisciplinary working groups spanning climate science, adaptation, and policy.",
      path: "/research"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Translating research into sustainable innovation and policy making through industry-academia partnerships and practical solutions.",
      path: "/innovation"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Initiatives",
      description: "Strengthening public understanding and building capacity through Community Engagement, training programs, workshops, and innovative educational initiatives.",
      path: "/education"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Sustainability at Ashoka",
      description: "Promoting sustainable practices across campus operations, infrastructure, and community engagement to create a model for environmental stewardship in higher education.",
      path: "/sustainability"
    }
  ];

  return (
    <div>
      <HeroBanner images={images} className="py-32">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-5xl leading-tight font-bold">Centre for Climate Change and Sustainability</h1>
          <p className="text-2xl mb-12 text-gray-100 leading-relaxed">
            Advancing interdisciplinary research, innovation, and action on climate change and sustainability at Ashoka University.
          </p>
          <div className="flex gap-4">
            <a href="/about" className="bg-white text-[#0d3862] px-8 py-4 rounded-md hover:bg-gray-100 transition-all text-lg font-medium shadow-md">
              Learn More
            </a>
            <a href="/research" className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-[#0d3862] transition-all text-lg font-medium shadow-md">
              Our Research
            </a>
          </div>
        </div>
      </HeroBanner>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl">Our Focus Areas</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              The Centre serves as a hub for interdisciplinary research, innovation, and action on climate change and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {focusAreas.map((area, index) => (
              <Link key={index} to={area.path} className="group bg-white border-2 border-gray-200 p-6 md:p-10 rounded-lg hover:border-[#0d3862] hover:shadow-xl transition-all duration-300 block">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0d3862] rounded-full flex items-center justify-center mb-4 md:mb-6 transition-all">
                  <div className="text-white transition-all">
                    {area.icon}
                  </div>
                </div>
                <h3 className="mb-3 md:mb-4 text-xl md:text-2xl text-[#0d3862] group-hover:underline">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HeroBanner images={['/images/photos/Upcoming Events/_MG_9650.jpg']} className="py-24">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-4xl">Upcoming Events</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Join us for upcoming events and workshops at the Centre for Climate Change and Sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <a href="/healing-earth-workshop" className="bg-white text-gray-900 p-8 rounded-lg hover:shadow-2xl transition-all duration-300 block group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#0d3862] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl text-[#0d3862] mb-1 group-hover:underline">Healing Earth Workshop</h3>
                <p className="text-gray-600">Annual Flagship Event</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The Healing Earth Workshop is a flagship annual event organised by the Centre for Climate Change and Sustainability (3CS) to facilitate conversations around the effects of the climate crisis and its wider impact on our world today. Launched in 2021, the workshop aims to bring together researchers, practitioners, and faculty to explore the links, trade-offs, and tensions at the nexus of climate change, health, and ecosystems.
            </p>
            <div className="mt-4 inline-flex items-center text-[#0d3862] gap-2 group-hover:gap-3 transition-all">
              <span>Learn more about Healing Earth Workshop</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          <a href="/sdg-expo" className="bg-white text-gray-900 p-8 rounded-lg hover:shadow-2xl transition-all duration-300 block group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <SDGLogo className="w-16 h-16" />
              </div>
              <div>
                <h3 className="text-2xl text-[#0d3862] mb-1 group-hover:underline">SDG Expo</h3>
                <p className="text-gray-600">Annual Sustainability Showcase</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The SDG Expo at Ashoka University marks the observance of UN SDG Day by creating a dynamic platform to showcase the university's commitment to sustainable development. Bringing together students, faculty, and partners, the Expo highlights innovative projects, research, and initiatives aligned with the Sustainable Development Goals.
            </p>
            <div className="mt-4 inline-flex items-center text-[#0d3862] gap-2 group-hover:gap-3 transition-all">
              <span>Learn more about SDG Expo</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>

        <div className="text-center mt-12">
          <a href="https://www.ashoka.edu.in/events/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white border-2 border-white px-8 py-3 rounded-md hover:bg-white hover:text-[#0d3862] transition-all text-lg">
            <span>Click here to view more upcoming events</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </HeroBanner>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl">Our Vision & Resources</h2>
              <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-justify">
                To create a leading research centre on climate and sustainability with the country's most vibrant and sophisticated climate and sustainability communication program, which will bring together scientists, humanists, and social scientists, along with professionals and practitioners in the field.
              </p>
              <a href="/about" className="inline-flex items-center text-[#0d3862] hover:gap-3 gap-2 transition-all text-base md:text-lg group mb-8">
                Read more about our vision
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <div className="bg-white border-2 border-[#0d3862] p-6 rounded-lg mt-8">
                <h3 className="text-xl text-[#0d3862] mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Apply for Internship
                </h3>
                <p className="text-gray-600 mb-4 text-sm text-justify">Join our team and contribute to meaningful climate research and sustainability initiatives.</p>
                <a href="https://forms.gle/mFGPkfX9fonGbJry9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0d3862] text-white px-6 py-3 rounded-md hover:bg-[#1a5280] transition-all w-full justify-center">
                  <span>Apply Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <div className="bg-[#0d3862] text-white p-8 rounded-lg h-full flex flex-col">
                <h3 className="mb-6 text-2xl">Key Highlights</h3>
                <ul className="space-y-4 mb-6 flex-1">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="leading-relaxed text-justify">Established in 2019 as a vibrant, multi-disciplinary centre</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="leading-relaxed text-justify">Interdisciplinary research spanning natural sciences, social sciences, and humanities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="leading-relaxed text-justify">Focus on AI and emerging technologies for climate solutions</span>
                  </li>
                </ul>
                <div className="border-t border-white border-opacity-20 pt-6">
                  <a href="https://drive.google.com/file/d/11iPiXee22vvqWVdtAf9W_tCoOAW3KF7h/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#0d3862] px-6 py-3 rounded-md hover:bg-gray-100 transition-all group w-full justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>View Centre Brochure</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl">Follow Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay connected with our latest updates, events, and initiatives on social media
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0077b5] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h3 className="text-2xl text-[#0077b5]">LinkedIn</h3>
              </div>
              <p className="text-gray-700 mb-6">Connect with us professionally and stay updated on our research publications, academic events, and career opportunities.</p>
              <a href="https://in.linkedin.com/showcase/office-of-sustainability-ashoka-university/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded-md hover:bg-[#006399] transition-all group">
                <span>Follow on LinkedIn</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <div className="mt-6 bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-gray-600 italic">Latest professional updates and research insights</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-100 border-2 border-pink-200 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <h3 className="text-2xl text-pink-600">Instagram</h3>
              </div>
              <p className="text-gray-700 mb-6">Discover behind-the-scenes moments, campus sustainability initiatives, and community engagement through our visual stories.</p>
              <a href="https://www.instagram.com/livegreenashoka/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-3 rounded-md hover:shadow-lg transition-all group">
                <span>Follow on Instagram</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <div className="mt-6 bg-white rounded-lg p-4 border border-pink-200">
                <p className="text-sm text-gray-600 italic">Visual stories from our sustainability journey</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Join our growing community and be part of the climate action movement
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
