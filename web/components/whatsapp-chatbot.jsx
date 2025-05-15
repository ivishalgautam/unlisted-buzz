"use client";
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all hover:scale-105"
        aria-label="Open Unlisted Buzz Chat"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 origin-bottom-right transform rounded-xl bg-white shadow-2xl transition-all duration-300">
          <div className="flex items-center bg-primary p-4 rounded-t-xl">
            <div className="mr-3 rounded-full bg-white p-2">
              <MessageCircle size={20} color="#16a34a" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Unlisted Buzz Buddy
              </h3>
              <p className="text-xs text-green-100">
                Expert Assistance | Online
              </p>
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto bg-gray-50 p-4 space-y-3">
            <div className="self-start max-w-[75%] rounded-lg bg-primary/10 px-4 py-3">
              <p className="text-gray-800 text-sm">
                👋 Hello! I'm your Unlisted Buzz Buddy.
              </p>
            </div>
            <div className="self-start max-w-[75%] rounded-lg bg-primary/10 px-4 py-3">
              <p className="text-gray-800 text-sm">I can assist you with:</p>
              <ul className="list-disc list-inside text-gray-800 text-sm mt-1">
                <li>Buying Unlisted Shares</li>
                <li>Selling Unlisted Shares</li>
                <li>Company Insights & Reports</li>
              </ul>
            </div>
            <div className="self-start max-w-[75%] rounded-lg bg-primary/10 px-4 py-3">
              <p className="text-gray-800 text-sm">How can I help you today?</p>
            </div>
          </div>

          <div className="border-t border-gray-200 p-4">
            <a
              href="https://wa.me/9220902567"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-primary px-4 py-3 text-center font-semibold text-white transition hover:bg-primary"
            >
              Chat with Expert on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
