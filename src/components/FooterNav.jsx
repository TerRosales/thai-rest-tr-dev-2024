"use client";
import Image from "next/image";
import Link from "next/link";
const FooterNav = () => {
  return (
    <footer className="bg-neutral-50-900 text-neutral-800 py-12 border-t border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                src="/images/logo.png" // Update with your logo path
                alt="Logo"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:space-x-16">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-3">Company</h4>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:text-red-400">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-red-400">
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-red-400">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-3">Resources</h4>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:text-red-400">
                    Support
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-red-400">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-red-400">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-3">Contact</h4>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:text-red-400">
                    Email Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-red-400">
                    Help Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-red-400">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-400 pt-4">
          <p className="text-sm">&copy; 2024 Food Zone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
