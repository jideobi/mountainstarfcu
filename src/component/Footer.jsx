import Logo from "../assets/POOL.webp";

export default function Footer() {
  return (
    <footer className="bg-[rgb(63,45,131)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Contact */}
        <div>
          <img
            src={Logo}
            alt="Company Logo"
            className="h-14 mb-4"
          />

          <p className="text-sm leading-7 text-gray-200">
            123 Main Street <br />
            Your City, State 100001
          </p>

          <div className="mt-4 space-y-1 text-sm text-gray-200">
            <p>📞 +234 (0) 800 000 0000</p>
            <p>✉️ info@yourcreditunion.org</p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300">Savings</a></li>
            <li><a href="#" className="hover:text-yellow-300">Loans</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            Resources
          </h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-yellow-300">Financial Tips</a></li>
            <li><a href="#" className="hover:text-yellow-300">Forms & Downloads</a></li>
            <li><a href="#" className="hover:text-yellow-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-300">FAQs</a></li>
            <li><a href="#" className="hover:text-yellow-300">Member Support</a></li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            Office Hours
          </h3>

          <div className="text-sm text-gray-200 space-y-3">
            <div>
              <p className="font-medium text-white">Lobby Hours</p>
              <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
            </div>

            <div>
              <p className="font-medium text-white">Support Hours</p>
              <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Your Credit Union. All Rights Reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-yellow-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-300">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}