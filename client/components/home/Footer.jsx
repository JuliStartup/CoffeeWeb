import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-[#fffbf5]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
        {/* Company Info */}
        <div className="flex-2 mb-8 md:mb-0">
          <Link href="/" className="inline-block mb-4">
            <img className="h-10" src="/logo small.png" alt="Logo" />
          </Link>
          <p className="text-gray-700 text-sm leading-relaxed max-w-xs font-twk font-normal">
            You are unique. This is why we tailor our services to suit your
            particular vision, needs, and identity.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Grid Section */}
        <div className=" flex-1 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Explore */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base mb-3 font-twk">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-twk font-normal"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-twk font-normal"
                >
                  Sales
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-twk font-normal"
                >
                  Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base mb-3 font-twk">
              Useful Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-twk font-normal"
                >
                  Legal Warning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-twk font-normal"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-twk font-normal"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-twk font-normal"
                >
                  General Sales Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base mb-3 font-twk">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm font-twk font-normal">
                  Sales
                </span>
                <span className="text-gray-400 text-sm font-twk font-normal">
                  Phone
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm font-twk font-normal">
                  Email
                </span>
                <span className="text-gray-400 text-sm font-twk font-normal">
                  Ticket
                </span>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-twk font-normal"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
