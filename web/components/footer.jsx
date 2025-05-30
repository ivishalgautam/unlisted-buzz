import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  Youtube,
} from "lucide-react";
import Logo from "./logo";
import { Small } from "./typography";
import { QUICK_LINKS } from "@/data";

export const tabs = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "All Unlisted Shares", link: "/all-unlisted-shares" },
  { label: "DRHP-Filed", link: "/drhp-filed" },
  { label: "Contact Us", link: "/contact-us" },
  { label: "Banking alert", link: "/banking-alert" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300">
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
              <a
                target="_blank"
                href="https://www.instagram.com/unlistedbuzz"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>

              <a
                target="_blank"
                href="https://www.youtube.com/@UnlistedBuzz"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <div className="mt-4">
              <div
                className={"flex items-center gap-2 justify-start font-medium"}
              >
                <Phone size={20} className="text-secondary" />{" "}
                <span>Phone</span>
              </div>
              <div className="flex flex-col mt-2 space-y-2">
                <Small>+91 92209 02567</Small>
                <Small>+91 88007 30066</Small>
              </div>
            </div>
            <div className="mt-2">
              <div
                className={"flex items-center gap-2 justify-start font-medium"}
              >
                <Mail size={20} className="text-secondary" /> <span>Email</span>
              </div>
              <Small>aqifybesol@gmail.com</Small>
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
