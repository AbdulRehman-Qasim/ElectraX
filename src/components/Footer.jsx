export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 sticky bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 text-sm">
          {/* Left Side */}
          <p className="text-gray-600 mb-2 md:mb-0">
            © {new Date().getFullYear()} ElectraX. All Rights Reserved.
          </p>

          {/* Right Side */}
          <div className="flex gap-6">
            <a
              href="#terms"
              className="no-underline text-black hover:text-gray-700 transition"
            >
              Terms of Service
            </a>
            <a
              href="#privacy"
              className="no-underline text-black hover:text-gray-700 transition"
            >
              Privacy Policy
            </a>
            <a
              href="#contact"
              className="no-underline text-black hover:text-gray-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
