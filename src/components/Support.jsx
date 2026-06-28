import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "What is ElectraX and who is it for?",
    answer: "ElectraX is an AI-powered electrical assistant designed specifically for UK electricians, inspectors, and students to quickly find answers to complex electrical code and standard queries.",
  },
  {
    question: "How accurate is the AI in providing UK standards?",
    answer: "Our AI model is heavily trained and fine-tuned on BS 7671 and other relevant UK standards. However, it should be used as a supplementary tool, and all critical decisions should be verified against official documentation.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel or change your subscription plan at any time from your account settings. If you cancel, you will continue to have access until the end of your billing cycle.",
  },
  {
    question: "How do I get technical support if something breaks?",
    answer: "You can reach out to our support team via the Contact Us page or email us directly at support@electrax.co.uk. Paid plans include priority support with faster response times.",
  }
];

export default function Support() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow bg-gray-50 px-6 sm:px-10 lg:px-16 py-12 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
              Help & Support
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions or reach out to our team for help.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100 transition focus:outline-none"
                  >
                    <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-white text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-6 bg-yellow-50 rounded-lg border border-yellow-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Still need help?</h3>
              <p className="text-gray-700 mb-4">
                If you couldn't find what you were looking for, our support team is here to assist you.
              </p>
              <a
                href="/contact"
                className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
