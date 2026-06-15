import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/POOL.webp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[rgb(63,45,131)] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <img src={Logo} alt="logo" className="h-12" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center text-white">
          <li>
            <a href="#" className="hover:text-gray-300">
              HOME
            </a>
          </li>

          <li>
            <Menu as="div" className="relative">
              <Menu.Button className="font-medium hover:text-gray-300">
                ABOUT US
              </Menu.Button>

              <Menu.Items className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border z-50">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-3 ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Board Members
                    </a>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-3 ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      History
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>

          <li>
            <a href="#" className="hover:text-gray-300">
              Loans
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-gray-300">
              SERVICES
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-gray-300">
              CONTACT US
            </a>
          </li>
            <li>
            <a href="#" className="hover:text-gray-300">
              JOIN OUR FAMILY
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[rgb(63,45,131)] border-t border-purple-700">
          <ul className="flex flex-col text-white">
            <li>
              <a
                href="#"
                className="block px-6 py-4 hover:bg-purple-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <details className="group">
                <summary className="list-none cursor-pointer px-6 py-4 hover:bg-purple-800 flex justify-between items-center">
                  About Us
                  <span className="group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>

                <div className="bg-purple-900">
                  <a
                    href="#"
                    className="block px-10 py-3 hover:bg-purple-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Board Members
                  </a>
                  <a
                    href="#"
                    className="block px-10 py-3 hover:bg-purple-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    History
                  </a>
                </div>
              </details>
            </li>

            <li>
              <a
                href="#"
                className="block px-6 py-4 hover:bg-purple-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Loans
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block px-6 py-4 hover:bg-purple-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block px-6 py-4 hover:bg-purple-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}