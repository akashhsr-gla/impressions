import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import EnquiryButton from "../components/EnquiryButton";
import EnquiryForm from "../components/EnquiryForm";

// Service gallery data
const serviceGalleries = [
  {
    title: "3D Box Gate",
    folder: "3D/BoxGate",
    images: [
      "/service_gallerypage/3D/BoxGate/WhatsApp Image 2025-12-30 at 16.26.54 (1).jpeg",
      "/service_gallerypage/3D/BoxGate/WhatsApp Image 2025-12-30 at 16.26.55 (2).jpeg",
      "/service_gallerypage/3D/BoxGate/WhatsApp Image 2025-12-30 at 16.26.55.jpeg",
      "/service_gallerypage/3D/BoxGate/WhatsApp Image 2025-12-30 at 16.26.56.jpeg",
    ],
    description: "Stunning 3D box gate installations that create impactful brand entrances and memorable first impressions."
  },
  {
    title: "Container Activity",
    folder: "Container_Activity.",
    images: [
      "/service_gallerypage/Container_Activity./WhatsApp Image 2025-12-30 at 16.26.41.jpeg",
      "/service_gallerypage/Container_Activity./WhatsApp Image 2025-12-30 at 16.26.42 (1).jpeg",
      "/service_gallerypage/Container_Activity./WhatsApp Image 2025-12-30 at 16.26.42.jpeg",
      "/service_gallerypage/Container_Activity./WhatsApp Image 2025-12-30 at 16.26.43.jpeg",
      "/service_gallerypage/Container_Activity./WhatsApp Image 2025-12-30 at 16.26.44 (1).jpeg",
    ],
    description: "Innovative container-based activation campaigns for maximum visibility and engagement."
  },
  {
    title: "Dealer Meeting",
    folder: "Dealer_Meeting",
    images: [
      "/service_gallerypage/Dealer_Meeting/WhatsApp Image 2025-12-30 at 16.26.38 (1).jpeg",
      "/service_gallerypage/Dealer_Meeting/WhatsApp Image 2025-12-30 at 16.26.39 (1).jpeg",
      "/service_gallerypage/Dealer_Meeting/WhatsApp Image 2025-12-30 at 16.26.40 (1).jpeg",
      "/service_gallerypage/Dealer_Meeting/WhatsApp Image 2025-12-30 at 16.26.40 (2).jpeg",
    ],
    description: "Professional dealer meetings and conferences with complete branding and stage management."
  },
  {
    title: "LED Van Activity",
    folder: "LED_Van_Activity",
    images: [
      "/service_gallerypage/LED_Van_Activity/WhatsApp Image 2025-12-30 at 16.26.44 (1).jpeg",
      "/service_gallerypage/LED_Van_Activity/WhatsApp Image 2025-12-30 at 16.26.44 (2).jpeg",
      "/service_gallerypage/LED_Van_Activity/WhatsApp Image 2025-12-30 at 16.26.44.jpeg",
    ],
    description: "Dynamic LED van campaigns for high-impact mobile advertising and brand visibility."
  },
  {
    title: "POP Display",
    folder: "POP",
    images: [
      "/service_gallerypage/POP/WhatsApp Image 2025-12-30 at 16.26.48 (1).jpeg",
      "/service_gallerypage/POP/WhatsApp Image 2025-12-30 at 16.26.48 (2).jpeg",
      "/service_gallerypage/POP/WhatsApp Image 2025-12-30 at 16.26.48.jpeg",
      "/service_gallerypage/POP/WhatsApp Image 2025-12-30 at 16.26.49 (1).jpeg",
      "/service_gallerypage/POP/WhatsApp Image 2025-12-30 at 16.26.49.jpeg",
    ],
    description: "Eye-catching point-of-purchase displays that drive sales and enhance brand presence at retail locations."
  },
  {
    title: "Supply Solutions",
    folder: "Supply",
    images: [
      "/service_gallerypage/Supply/WhatsApp Image 2025-12-30 at 16.26.50.jpeg",
      "/service_gallerypage/Supply/WhatsApp Image 2025-12-30 at 16.26.51 (1).jpeg",
      "/service_gallerypage/Supply/WhatsApp Image 2025-12-30 at 16.26.51 (2).jpeg",
      "/service_gallerypage/Supply/WhatsApp Image 2025-12-30 at 16.26.51.jpeg",
    ],
    description: "Comprehensive supply chain branding solutions for seamless brand integration."
  },
  {
    title: "Toto Activity",
    folder: "Toto_Activity",
    images: [
      "/service_gallerypage/Toto_Activity/WhatsApp Image 2025-12-30 at 16.26.52.jpeg",
      "/service_gallerypage/Toto_Activity/WhatsApp Image 2025-12-30 at 16.26.53 (1).jpeg",
      "/service_gallerypage/Toto_Activity/WhatsApp Image 2025-12-30 at 16.26.53.jpeg",
    ],
    description: "Engaging Toto brand activation campaigns with creative execution and strategic placement."
  },
  {
    title: "World Activity",
    folder: "World_Activity",
    images: [
      "/service_gallerypage/World_Activity/WhatsApp Image 2025-12-30 at 16.26.45.jpeg",
      "/service_gallerypage/World_Activity/WhatsApp Image 2025-12-30 at 16.26.46 (1).jpeg",
      "/service_gallerypage/World_Activity/WhatsApp Image 2025-12-30 at 16.26.46 (2).jpeg",
      "/service_gallerypage/World_Activity/WhatsApp Image 2025-12-30 at 16.26.46.jpeg",
    ],
    description: "Global-scale activation programs with world-class execution and brand storytelling."
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="h-20 w-20 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Impression Imaging Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Service Gallery
            </h1>
            <p className="text-xl md:text-2xl text-red-400 font-semibold mb-8">
              Showcasing Our Excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto"></div>
            <p className="text-lg text-slate-300 mt-8 max-w-2xl mx-auto">
              Explore our comprehensive portfolio of branding solutions, activations, and creative executions that have helped brands achieve remarkable success.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our <span className="text-red-600">Portfolio</span>
              </h2>
              <div className="flex items-center justify-center mb-6">
                <div className="h-1 w-16 bg-red-600 rounded-full"></div>
                <div className="mx-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="h-1 w-16 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Each project represents our commitment to strategic creativity and tactical excellence
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {serviceGalleries.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  images={service.images}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-red-100 mb-8">Let's discuss how we can bring your brand vision to life</p>
            <div className="flex justify-center">
              <EnquiryButton whatsappNumber="+919876543210" className="text-lg py-4 px-8 bg-white text-red-600 hover:bg-red-50" />
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
                <div className="h-10 w-10 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Impression Imaging Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold">Impression Imaging Services</span>
              </div>
              <p className="text-red-100">
                Experience of 27 Years
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-red-100">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
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

