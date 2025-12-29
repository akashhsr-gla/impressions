import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-red-400 font-semibold mb-8">
              Impression Imaging Services Private Limited
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Company Information Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Company Overview */}
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-red-600">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Company Overview</h2>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  <p>
                    <span className="text-red-600 font-bold text-xl">Impression Imaging Services Private Limited</span> is a leading provider of comprehensive branding and activation solutions with over <span className="text-red-600 font-semibold">23 years of experience</span> in the industry.
                  </p>
                  <p>
                    We are a <span className="font-semibold">360-degree solutions powerhouse</span>, specializing in digital, ATL, BTL, and activation services. Since 1999, we have been committed to delivering strategic, creative, and tactical solutions that work for your brand.
                  </p>
                  <p>
                    Our approach focuses on <span className="text-red-600 font-semibold">brand preference, passion, and evangelism</span> rather than generic brand promotion, helping businesses break through the marketplace cacophony and establish meaningful connections with their audience.
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Details */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Registration Details</h2>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl p-8 md:p-10 text-white">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-4">Legal Information</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-300 text-sm mb-1">Legal Name</p>
                        <p className="text-white font-semibold text-lg">IMPRESSION IMAGING SERVICES PRIVATE LIMITED</p>
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm mb-1">Trade Name</p>
                        <p className="text-white font-semibold text-lg">IMPRESSION IMAGING SERVICES PRIVATE LIMITED</p>
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm mb-1">Constitution of Business</p>
                        <p className="text-white font-semibold text-lg">Private Limited Company</p>
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm mb-1">Type of Registration</p>
                        <p className="text-white font-semibold text-lg">Regular</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-4">GST Information</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-300 text-sm mb-1">GST Identification Number</p>
                        <p className="text-white font-semibold text-lg">10AAICI5373B1Z1</p>
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm mb-1">Registration Number</p>
                        <p className="text-white font-semibold text-lg">10AAICI5373B1Z1</p>
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm mb-1">Date of Liability</p>
                        <p className="text-white font-semibold text-lg">11/12/2025</p>
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm mb-1">Date of Issue</p>
                        <p className="text-white font-semibold text-lg">11/12/2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Address */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Principal Place of Business</h2>
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-slate-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Registered Office Address</h3>
                    <div className="space-y-2 text-slate-700 text-lg">
                      <p><span className="font-semibold">Building:</span> Ground Floor 01 & 02</p>
                      <p><span className="font-semibold">Premises:</span> Krishna Compound</p>
                      <p><span className="font-semibold">Road/Street:</span> Fraser Road</p>
                      <p><span className="font-semibold">Landmark:</span> Behind Jagat Trade Center</p>
                      <p><span className="font-semibold">Locality:</span> Lodipur</p>
                      <p><span className="font-semibold">City:</span> Patna</p>
                      <p><span className="font-semibold">District:</span> Patna</p>
                      <p><span className="font-semibold">State:</span> Bihar</p>
                      <p><span className="font-semibold">PIN Code:</span> 800001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg p-6 border border-slate-200 hover:border-red-300 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Strategic</h3>
                  <p className="text-slate-600">We approach every project with strategic thinking and planning to deliver maximum impact.</p>
                </div>
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg p-6 border border-slate-200 hover:border-red-300 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Creative</h3>
                  <p className="text-slate-600">Our creative solutions break through the noise and create lasting brand impressions.</p>
                </div>
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg p-6 border border-slate-200 hover:border-red-300 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Tactical</h3>
                  <p className="text-slate-600">We execute with precision and tactical excellence to ensure optimal results.</p>
                </div>
              </div>
            </div>

            {/* Directors Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Our Directors</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 {/* Director 1 - Lalan Kumar Dixit */}
                 <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-all">
                   <div className="flex flex-col items-center text-center">
                     <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
                       <Image
                         src="/directors/WhatsApp Image 2025-12-28 at 14.50.04.jpeg"
                         alt="Lalan Kumar Dixit"
                         fill
                         className="object-cover"
                         sizes="(max-width: 768px) 192px, 192px"
                       />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-2">Lalan Kumar Dixit</h3>
                     <p className="text-red-600 font-semibold mb-4">Director</p>
                     <div className="flex items-center space-x-2 text-slate-600">
                       <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                       <a href="mailto:jitendra@impressionimaging.co.in" className="hover:text-red-600 transition-colors">
                         jitendra@impressionimaging.co.in
                       </a>
                     </div>
                   </div>
                 </div>

                 {/* Director 2 - Jitendra Kumar */}
                 <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-all">
                   <div className="flex flex-col items-center text-center">
                     <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
                       <Image
                         src="/directors/WhatsApp Image 2025-12-28 at 14.47.19.jpeg"
                         alt="Jitendra Kumar"
                         fill
                         className="object-cover"
                         sizes="(max-width: 768px) 192px, 192px"
                       />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-2">Jitendra Kumar</h3>
                     <p className="text-red-600 font-semibold mb-4">Director</p>
                     <div className="flex items-center space-x-2 text-slate-600">
                       <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                       <a href="mailto:lalan@impressionimaging.co.in" className="hover:text-red-600 transition-colors">
                         lalan@impressionimaging.co.in
                       </a>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-600 rounded-2xl shadow-2xl p-10 md:p-12 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <div className="text-6xl md:text-7xl font-bold mb-4">23+</div>
                <div className="text-2xl md:text-3xl font-semibold mb-2">Years of Excellence</div>
                <div className="text-xl text-red-100">Serving brands since 1999</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-12">
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
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
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
              <div className="text-red-100 space-y-2">
                <p className="text-sm">GST: 10AAICI5373B1Z1</p>
                <p className="text-sm">Patna, Bihar - 800001</p>
              </div>
            </div>
          </div>
          <div className="border-t border-red-500 pt-8 text-center text-red-100">
            <p>&copy; {new Date().getFullYear()} Impression Imaging Services Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

