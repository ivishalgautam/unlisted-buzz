import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/markets"
                  className="hover:text-white transition-colors"
                >
                  Markets
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/watchlist"
                  className="hover:text-white transition-colors"
                >
                  Watchlist
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Market Info
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/market-overview"
                  className="hover:text-white transition-colors"
                >
                  Market Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/stocks"
                  className="hover:text-white transition-colors"
                >
                  Stocks
                </Link>
              </li>
              <li>
                <Link
                  href="/commodities"
                  className="hover:text-white transition-colors"
                >
                  Commodities
                </Link>
              </li>
              <li>
                <Link
                  href="/currencies"
                  className="hover:text-white transition-colors"
                >
                  Currencies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/education"
                  className="hover:text-white transition-colors"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="hover:text-white transition-colors"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="hover:text-white transition-colors"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
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
            © {new Date().getFullYear()} StockMarket Inc. All rights reserved.
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
