import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Terms() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow bg-gray-50 px-6 sm:px-10 lg:px-16 py-12 overflow-auto">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-6 border-b pb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using ElectraX, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
              <p>
                ElectraX is an AI-powered electrical assistant designed to help UK electricians, inspectors, and students with code lookups, standards, and calculations. The service is provided "as is" and we reserve the right to modify, suspend, or discontinue any part of the service at any time.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account information. You agree to use ElectraX only for lawful purposes and in accordance with these Terms. Any reliance you place on the information provided by our AI is strictly at your own risk. Always verify critical electrical data against official UK standards (BS 7671).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of ElectraX, including but not limited to text, graphics, logos, and software, are the exclusive property of ElectraX and are protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
              <p>
                In no event shall ElectraX, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the service.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
