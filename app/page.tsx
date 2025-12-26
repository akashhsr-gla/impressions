import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "./components/EnquiryForm";
import EnquiryButton from "./components/EnquiryButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm relative overflow-hidden">
        {/* Red circle light gradients */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-500 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full opacity-15 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-red-400 rounded-full opacity-25 blur-2xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-2xl"></div>
        
        <nav className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Logo placeholder - you can replace with actual logo */}
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IS</span>
                </div>
                <span className="text-xl font-bold text-slate-900">Impression Imaging</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-900 hover:text-red-600 transition-colors font-medium">Home</a>
              <Link href="/services" className="text-slate-900 hover:text-red-600 transition-colors font-medium">Our Services</Link>
              <Link href="/about" className="text-slate-900 hover:text-red-600 transition-colors font-medium">About Us</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-4xl">IS</span>
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 bg-white rounded-full opacity-20"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Impression Imaging Services
          </h1>
            <p className="text-2xl md:text-3xl text-red-400 font-semibold mb-8">
              Experience of 23 Years
            </p>
            <div className="flex items-center justify-center space-x-2 mt-12">
              <span className="px-6 py-2 bg-red-600 rounded-full text-sm font-semibold">Strategic</span>
              <span className="text-yellow-400">✦</span>
              <span className="px-6 py-2 bg-red-600 rounded-full text-sm font-semibold">Creative</span>
              <span className="text-yellow-400">✦</span>
              <span className="px-6 py-2 bg-red-600 rounded-full text-sm font-semibold">Tactical</span>
            </div>
            
            {/* Enquiry Button */}
            <div className="mt-12">
              <EnquiryButton whatsappNumber="+919876543210" className="text-lg py-4 px-8" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
                Who We Are?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              {/* First Statement */}
              <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-red-600 transform hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium">
                      <span className="text-red-600 font-bold text-2xl md:text-3xl">We are</span>{" "}
                      <span className="text-slate-900 font-bold">A 360 degree solutions powerhouse.</span>{" "}
                      Be it digital, ATL, BTL or activation, we set our sight on solutions that work for you and your brand{" "}
                      <span className="text-red-600 font-semibold italic">since 1999</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Statement */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-8 md:p-10 transform hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xl md:text-2xl text-white leading-relaxed">
                      <span className="text-red-400 font-bold">We do what</span>{" "}
                      <span className="text-white/90">traditional advertising, marketing, public relations and digital agencies cannot;</span>{" "}
                      <span className="text-red-400 font-semibold">enhance brand resonance, catalyze brand engagement</span>{" "}
                      <span className="text-white/90">and</span>{" "}
                      <span className="text-red-400 font-semibold">optimize brand advocacy</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Third Statement */}
              <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-10 border-r-4 border-red-600 transform hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xl md:text-2xl text-slate-800 leading-relaxed">
                      <span className="text-red-600 font-bold">We are the point</span>{" "}
                      <span className="text-slate-700">where</span>{" "}
                      <span className="text-slate-900 font-semibold">insight meets execution</span>{" "}
                      <span className="text-slate-700">and we bridge the divide between</span>{" "}
                      <span className="text-red-600 italic">what a brand is now</span>{" "}
                      <span className="text-slate-700">and</span>{" "}
                      <span className="text-red-600 italic font-semibold">what it could be in the future</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fourth Statement - Special Highlight */}
              <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-600 rounded-2xl shadow-2xl p-10 md:p-12 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                        <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        <span className="block mb-2">We are</span>
                        <span className="text-yellow-300 inline-block mr-4">strategic.</span>
                        <span className="text-yellow-300 inline-block mr-4">creative.</span>
                        <span className="text-yellow-300 inline-block">tactical.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committed To Make A Difference Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="h-1 w-16 bg-red-600 rounded-full"></div>
                <div className="mx-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="h-1 w-16 bg-red-600 rounded-full"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
                <span className="italic font-serif">Committed To Make</span>
                <br />
                <span className="text-red-600 font-extrabold">A Difference</span>
              </h2>
              <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto mt-6">
                We engender brand preference, passion and evangelism, rather than generic brand promotion, to break through the cacophony in the marketplace.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Card 1: Brand Preference */}
              <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-red-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide">Brand Preference</h3>
                      <div className="h-1 w-12 bg-red-600 rounded-full mb-3"></div>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base font-medium">
                    We foster brand preference by driving <span className="text-red-600 font-semibold">brand curiosity</span>, <span className="text-red-600 font-semibold">interest</span> and <span className="text-red-600 font-semibold">inquiry</span> which serves to catalyze brand trial, experience, engagement and advocacy.
                  </p>
                </div>
              </div>

              {/* Card 2: Brand Preference Programs */}
              <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-red-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide">Strategic Programs</h3>
                      <div className="h-1 w-12 bg-red-600 rounded-full mb-3"></div>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base font-medium">
                    We foster brand preference by creating programs which engender <span className="text-red-600 font-semibold">brand curiosity</span>, <span className="text-red-600 font-semibold">interest</span> & <span className="text-red-600 font-semibold">inquiry</span>.
                  </p>
                </div>
              </div>

              {/* Card 3: Experience & Engagement */}
              <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-red-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide">Experience & Engagement</h3>
                      <div className="h-1 w-12 bg-red-600 rounded-full mb-3"></div>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base font-medium">
                    We utilize <span className="text-red-600 font-semibold">experience</span> and <span className="text-red-600 font-semibold">engagement</span> to create brand-centric conversation and storytelling, optimizing <span className="text-red-600 font-semibold">brand mind-share</span>.
                  </p>
                </div>
              </div>

              {/* Card 4: Brand Trial & Advocacy */}
              <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-red-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide">Trial & Advocacy</h3>
                      <div className="h-1 w-12 bg-red-600 rounded-full mb-3"></div>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base font-medium">
                    We drive <span className="text-red-600 font-semibold">brand trial</span>, <span className="text-red-600 font-semibold">experience</span>, <span className="text-red-600 font-semibold">engagement</span> and <span className="text-red-600 font-semibold">advocacy</span>.
                  </p>
                </div>
              </div>

              {/* Card 5: Mind-share to Market-share */}
              <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-red-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide">Mind-share to Market-share</h3>
                      <div className="h-1 w-12 bg-red-600 rounded-full mb-3"></div>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base font-medium">
                    We transform <span className="text-red-600 font-semibold">brand mind-share</span> into <span className="text-red-600 font-semibold">brand market-share</span> by leveraging engagement and affinity to engender <span className="text-red-600 font-semibold">advocacy</span> and <span className="text-red-600 font-semibold">recommendation</span>.
                  </p>
                </div>
              </div>

              {/* Card 6: Pull vs Push Philosophy */}
              <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-red-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide">Our Philosophy</h3>
                      <div className="h-1 w-12 bg-red-600 rounded-full mb-3"></div>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base font-medium">
                    We believe in <span className="text-red-600 font-semibold">pull vs. push</span> and <span className="text-red-600 font-semibold">adoption over incursion</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Statement - Full Width */}
            <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 md:p-12 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 opacity-10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 opacity-10 rounded-full -ml-32 -mb-32"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    We translate <span className="text-red-400 italic">brand mindshare</span> into <span className="text-red-400 italic">market share</span>
                  </h3>
                  <div className="flex items-center justify-center md:justify-start space-x-2 mt-4">
                    <div className="h-1 w-12 bg-red-600 rounded-full"></div>
                    <div className="h-1 w-1 bg-red-600 rounded-full"></div>
                    <div className="h-1 w-1 bg-red-600 rounded-full"></div>
                    <div className="h-1 w-12 bg-red-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-red-100 mb-8">Let's discuss how we can help elevate your brand</p>
            <div className="flex justify-center">
              <EnquiryButton whatsappNumber="+919876543210" className="text-lg py-4 px-8 bg-white text-red-600 hover:bg-red-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategy Section */}
      <section id="strategy" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center uppercase tracking-wide">
              Our Strategy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Phase 1 */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-t-4 border-red-600 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-full mb-4">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <span className="text-red-400 font-semibold text-sm uppercase tracking-wider block mb-1">Phase 1 –</span>
                    <h3 className="text-white font-bold text-2xl">Strategic Planning</h3>
                  </div>
                  <ul className="space-y-4 text-white/90">
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">Conceptualize & visualize the activity</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">Appropriately name the campaign</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">Allocating frame, manpower & route plan</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-t-4 border-red-600 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-full mb-4">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <span className="text-red-400 font-semibold text-sm uppercase tracking-wider block mb-1">Phase 2 –</span>
                    <h3 className="text-white font-bold text-2xl">Creative Design</h3>
                  </div>
                  <ul className="space-y-4 text-white/90">
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">Backdrop</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">Standee</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">Banner</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">Flex</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">AV media</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">Gift items</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">T-shirt</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">Cap</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-t-4 border-red-600 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-full mb-4">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <span className="text-red-400 font-semibold text-sm uppercase tracking-wider block mb-1">Phase 3 –</span>
                    <h3 className="text-white font-bold text-2xl">Tactical Roll Out</h3>
                  </div>
                  <ul className="space-y-4 text-white/90">
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">Run-time reporting on WhatsApp</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">Convert written enquiry to electronic</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">First-cut enquiry</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="mr-3 mt-1 text-red-500 font-bold text-lg">•</span>
                      <span className="group-hover:text-white transition-colors">Presentation final report</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Have Questions?</h2>
            <p className="text-xl text-slate-600 mb-8">Get in touch with us for your branding needs</p>
            <EnquiryButton whatsappNumber="+919876543210" className="text-lg py-4 px-8" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-red-600 font-bold text-lg">IS</span>
                </div>
                <span className="text-xl font-bold">Impression Imaging Services</span>
              </div>
              <p className="text-red-100">
                Experience of 23 Years
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-red-100">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><a href="#strategy" className="hover:text-white transition-colors">Our Strategy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Our Approach</h4>
              <div className="flex items-center space-x-2 text-yellow-300">
                <span className="font-semibold">Strategic</span>
                <span>✦</span>
                <span className="font-semibold">Creative</span>
                <span>✦</span>
                <span className="font-semibold">Tactical</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
              <EnquiryForm variant="compact" whatsappNumber="+919876543210" />
            </div>
          </div>
          <div className="border-t border-red-500 pt-8 text-center text-red-100">
            <p>&copy; {new Date().getFullYear()} Impression Imaging Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Enquiry Button */}
      <EnquiryButton variant="floating" whatsappNumber="+919876543210" />
    </div>
  );
}
