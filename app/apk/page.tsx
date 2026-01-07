'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';

export default function APKPage() {
  useEffect(() => {
    // Automatically trigger download when page loads
    const link = document.createElement('a');
    link.href = '/app.apk';
    link.download = 'impression-imaging-app.apk';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Download Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12 border border-slate-200">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Downloading App
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Your download should start automatically. If it doesn't, click the button below.
              </p>

              {/* Manual Download Button */}
              <a
                href="/app.apk"
                download="impression-imaging-app.apk"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-6"
              >
                Download APK
              </a>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <Link
                  href="/"
                  className="text-red-600 hover:text-red-700 font-semibold transition-colors"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-slate-50 rounded-xl p-6 text-left">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Installation Instructions:</h3>
              <ol className="space-y-2 text-slate-700 list-decimal list-inside">
                <li>Allow installation from unknown sources in your device settings</li>
                <li>Open the downloaded APK file</li>
                <li>Follow the on-screen installation prompts</li>
                <li>Launch the app after installation completes</li>
              </ol>
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

