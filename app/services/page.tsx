import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "../components/EnquiryForm";
import EnquiryButton from "../components/EnquiryButton";

const services = [
  {
    id: 1,
    title: "Mega Service Camp Management",
    description: "End-to-end planning and execution of large-scale service camps, including logistics, manpower, customer handling, and on-ground operations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    images: [
      "/grid1/Screenshot 2025-12-20 at 10.08.05 PM.png",
      "/grid1/Screenshot 2025-12-20 at 10.08.20 PM.png",
      "/grid1/Screenshot 2025-12-20 at 10.08.43 PM.png"
    ]
  },
  {
    id: 2,
    title: "Residential & Apartment Activation Programs",
    description: "Conducting apartment-level engagement activities to promote products, generate leads, and build direct consumer interaction.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    images: [
      "/grid2/Screenshot 2025-12-20 at 10.10.18 PM.png",
      "/grid2/Screenshot 2025-12-20 at 10.10.44 PM.png",
      "/grid2/Screenshot 2025-12-20 at 10.10.58 PM.png"
    ]
  },
  {
    id: 3,
    title: "Sales Conference & Dealer Meet Execution",
    description: "Organizing sales conferences, dealer meets, award ceremonies, and corporate events with complete branding and stage management.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    images: [
      "/grid3/Screenshot 2025-12-20 at 10.12.39 PM.png",
      "/grid3/Screenshot 2025-12-20 at 10.13.02 PM.png",
      "/grid3/Screenshot 2025-12-20 at 10.13.18 PM.png"
    ]
  },
  {
    id: 4,
    title: "In-Store Product Promotion & Visibility",
    description: "Designing and executing in-store promotions, shelf branding, gondola displays, and point-of-sale visibility across modern trade and general trade outlets.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    images: [
      "/grid4/Screenshot 2025-12-20 at 10.14.29 PM.png",
      "/grid4/Screenshot 2025-12-20 at 10.14.49 PM.png",
      "/grid4/Screenshot 2025-12-20 at 10.15.04 PM.png"
    ]
  },
  {
    id: 5,
    title: "Rural & Highway Branding (Dhaba Branding)",
    description: "Strategic branding at highways, dhabas, and rural touchpoints to maximize visibility and recall among mass and transit audiences.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    images: [
      "/grid5/Screenshot 2025-12-20 at 10.15.55 PM.png",
      "/grid5/Screenshot 2025-12-20 at 10.16.04 PM.png",
      "/grid5/Screenshot 2025-12-20 at 10.16.20 PM.png"
    ]
  },
  {
    id: 6,
    title: "Shop Branding & Unipole Installation",
    description: "Installation of backlit signages, frontlets, shop boards, and unipoles for enhanced dealer and retail branding.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    images: [
      "/grid6/Screenshot 2025-12-20 at 10.17.46 PM.png",
      "/grid6/Screenshot 2025-12-20 at 10.18.18 PM.png",
      "/grid6/Screenshot 2025-12-20 at 10.18.43 PM.png"
    ]
  },
  {
    id: 7,
    title: "Mobile Van & Roadshow Promotions",
    description: "Executing mobile van campaigns and roadshows for deep market penetration, live demonstrations, and rural outreach.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    images: [
      "/grid7/Screenshot 2025-12-20 at 10.19.45 PM.png",
      "/grid7/Screenshot 2025-12-20 at 10.20.04 PM.png",
      "/grid7/Screenshot 2025-12-20 at 10.20.23 PM.png"
    ]
  },
  {
    id: 8,
    title: "Dealership Interior & Exterior Branding",
    description: "Complete dealership branding solutions including wall panels, posters, display units, test ride zones, and showroom ambience enhancement.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    images: [
      "/grid8/Screenshot 2025-12-20 at 10.21.41 PM.png",
      "/grid8/Screenshot 2025-12-20 at 10.22.00 PM.png",
      "/grid8/Screenshot 2025-12-20 at 10.22.24 PM.png"
    ]
  },
  {
    id: 9,
    title: "Outdoor Advertising & Wall Wrap Displays",
    description: "High-impact wall wraps, hoardings, and outdoor displays in urban and semi-urban locations for sustained brand visibility.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    images: [
      "/grid9/Screenshot 2025-12-20 at 10.23.47 PM.png",
      "/grid9/Screenshot 2025-12-20 at 10.24.06 PM.png",
      "/grid9/Screenshot 2025-12-20 at 10.24.35 PM.png"
    ]
  },
  {
    id: 10,
    title: "Petrol Pump Activation Campaigns",
    description: "Conducting petrol pump activations with kiosks, product demos, customer engagement, and on-spot lead generation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    images: [
      "/grid10/Screenshot 2025-12-20 at 10.27.00 PM.png",
      "/grid10/Screenshot 2025-12-20 at 10.27.20 PM.png",
      "/grid10/Screenshot 2025-12-20 at 10.27.41 PM.png"
    ]
  }
];

export default function ServicesPage() {
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
            <Link href="/" className="flex items-center space-x-3">
              {/* Logo placeholder - you can replace with actual logo */}
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IS</span>
                </div>
                <span className="text-xl font-bold text-slate-900">Impression Imaging</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-900 hover:text-red-600 transition-colors font-medium">Home</Link>
              <Link href="/services" className="text-red-600 font-medium">Our Services</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Services Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-red-400 font-semibold mb-8">
              Comprehensive Solutions for Your Brand
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-8"></div>
            <EnquiryButton whatsappNumber="+919876543210" className="text-lg py-4 px-8" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 hover:border-red-300"
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
                  
                  <div className="p-8 relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform text-white">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight">
                          {service.title}
                        </h3>
                        <div className="h-1 w-16 bg-red-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 leading-relaxed mb-6 text-base">
                      {service.description}
                    </p>

                    {/* Images Grid */}
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      {service.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 group-hover:scale-105 transition-transform duration-300"
                        >
                          <Image
                            src={image}
                            alt={`${service.title} - Image ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 border-2 border-red-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Interested in Our Services?</h2>
            <p className="text-xl text-slate-600 mb-8">Get in touch with us for your branding needs</p>
            <EnquiryButton whatsappNumber="+919876543210" className="text-lg py-4 px-8" />
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

