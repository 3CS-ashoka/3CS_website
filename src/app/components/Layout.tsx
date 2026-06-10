import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import logo from "../../imports/3cs_(1)-1.png";

export function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResearchDropdownOpen, setIsResearchDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/research", label: "Research", hasDropdown: true },
    { path: "/innovation", label: "Innovation" },
    { path: "/education", label: "Initiatives" },
    { path: "/sustainability", label: "Sustainability at Ashoka" },
  ];

  const researchDropdownItems = [
    { path: "/research", label: "Theme" },
    { path: "/publications", label: "Publications" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Centre for Climate Change and Sustainability"
                className="h-20 w-auto"
              />
            </Link>

            <nav className="hidden md:flex space-x-1">
              {navLinks.map((link) => {
                if (link.hasDropdown && link.path === "/research") {
                  return (
                    <div
                      key={link.path}
                      className="relative"
                      onMouseEnter={() => setIsResearchDropdownOpen(true)}
                      onMouseLeave={() => setIsResearchDropdownOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`px-4 py-2 rounded-md transition-all inline-flex items-center gap-1 ${
                          location.pathname.startsWith("/research") || location.pathname === "/people" || location.pathname === "/publications"
                            ? "bg-[#0d3862] text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {link.label}
                        <svg className={`w-4 h-4 transition-transform ${isResearchDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      {isResearchDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-50">
                          {researchDropdownItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`block px-4 py-3 transition-all ${
                                location.pathname === item.path
                                  ? "bg-[#0d3862] text-white"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-md transition-all ${
                      location.pathname === link.path
                        ? "bg-[#0d3862] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 mt-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  if (link.hasDropdown && link.path === "/research") {
                    return (
                      <div key={link.path}>
                        <button
                          onClick={() => setIsResearchDropdownOpen(!isResearchDropdownOpen)}
                          className={`w-full text-left px-4 py-3 rounded-md transition-all flex items-center justify-between ${
                            location.pathname.startsWith("/research") || location.pathname === "/people" || location.pathname === "/publications"
                              ? "bg-[#0d3862] text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {link.label}
                          <svg className={`w-4 h-4 transition-transform ${isResearchDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isResearchDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {researchDropdownItems.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsResearchDropdownOpen(false);
                                }}
                                className={`block px-4 py-2 rounded-md transition-all ${
                                  location.pathname === item.path
                                    ? "bg-[#0d3862] text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-md transition-all ${
                        location.pathname === link.path
                          ? "bg-[#0d3862] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-[#0d3862] text-white mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="mb-4 text-xl">Centre for Climate Change and Sustainability</h3>
              <p className="text-gray-300 mb-4">Ashoka University</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                A hub for interdisciplinary research, innovation, and action on climate change and sustainability, bringing together expertise from natural sciences, social sciences, humanities, policy, business, and technology.
              </p>
              <a href="https://www.ashoka.edu.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-200 hover:text-white transition-colors text-sm border border-gray-400 hover:border-white px-4 py-2 rounded-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Ashoka University
              </a>
            </div>
            <div>
              <h4 className="mb-4 text-sm uppercase tracking-wider text-gray-300">Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-200 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm uppercase tracking-wider text-gray-300">Follow Us</h4>
              <div className="flex gap-4 mb-6">
                <a href="https://in.linkedin.com/showcase/office-of-sustainability-ashoka-university/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/livegreenashoka/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
              <h4 className="mb-3 text-sm uppercase tracking-wider text-gray-300">Contact Details</h4>
              <p className="text-gray-200 text-sm mb-2">
                <a href="mailto:3CS@ashoka.edu.in" className="hover:text-white transition-colors">
                  3CS@ashoka.edu.in
                </a>
              </p>
              <p className="text-gray-200 text-sm leading-relaxed">
                Campus<br />
                Ashoka University, Rai,<br />
                Sonipat, Haryana 131 029 (India)
              </p>
            </div>
          </div>
          <div className="border-t border-[#1a5280] mt-12 pt-8 text-center text-gray-300 text-sm">
            <p>&copy; 2026 Centre for Climate Change and Sustainability. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
