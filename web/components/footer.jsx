import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { tabs } from "./navbar";
import Logo from "./logo";
import { Small } from "./typography";
import { QUICK_LINKS } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="">
            <div className="mb-4 bg-white rounded-2xl w-max p-4">
              <Logo />
            </div>
            <Small>
              India’s Most Trusted Platform for Buying & Selling Unlisted &
              Pre-IPO Shares – Invest in Tomorrow’s Leaders Today!
            </Small>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Unlisted Buzz
            </h2>
            <ul className="space-y-2">
              {tabs.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.link}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Connect With Us
            </h2>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} UnlistedBuzz. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-gray-300">
            Disclaimer: The information provided on this website is for general
            informational purposes only and should not be considered as
            investment advice. Investing in stocks carries risks, and past
            performance is not indicative of future results. Always conduct your
            own research and consult with a qualified financial advisor before
            making any investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
