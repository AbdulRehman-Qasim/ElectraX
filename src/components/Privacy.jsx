import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Privacy() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow bg-gray-50 px-6 sm:px-10 lg:px-16 py-12 overflow-auto">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-6 border-b pb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you create or modify your account, request support, or interact with our AI assistant. This may include your name, email address, password, and the content of your queries.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to process transactions, to send you related information, and to respond to your comments and questions.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to maintain the safety of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Sharing of Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law or to trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Contact Us Regarding Privacy</h2>
              <p>
                If you have any questions about this Privacy Policy or our treatment of your personal data, please contact us via our Contact page or directly at privacy@electrax.co.uk.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
