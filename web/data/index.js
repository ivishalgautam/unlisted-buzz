import { rupee } from "@/hooks/Intl";
import {
  ChartCandlestick,
  ChartNoAxesCombined,
  Clock2,
  Headset,
  ReceiptIndianRupee,
  ShieldCheck,
  SirenIcon,
  UserRoundCheck,
} from "lucide-react";

export const whyChooseUs = [
  {
    title: "Real-Time Alerts",
    icon: SirenIcon,
    description:
      "Stay ahead of the market with instant notifications on price changes, trends, and breaking news.",
  },
  {
    title: "User-Friendly Platform",
    icon: UserRoundCheck,
    description:
      "Enjoy a clean, intuitive interface that makes buying and selling stocks simple, even for beginners.",
  },
  {
    title: "Advanced Analytics",
    icon: ChartNoAxesCombined,
    description:
      "Access powerful tools like charts, market trends, and insights to optimize your investment strategies.",
  },
  {
    title: "Secure Transactions",
    icon: ShieldCheck,
    description:
      "Trade with confidence knowing that your data and funds are protected by industry-leading security measures.",
  },
  {
    title: "24/7 Support",
    icon: Clock2,
    description:
      "Our dedicated team is available around the clock to assist with any questions or concerns.",
  },
  {
    title: "Custom Stock Alerts",
    icon: ChartCandlestick,
    description:
      "Set custom alerts based on your preferences, ensuring you never miss a valuable trading opportunity.",
  },
  {
    title: "Low Fees",
    icon: ReceiptIndianRupee,
    description:
      "Enjoy competitive transaction fees, so you keep more of what you earn in every trade.",
  },
  {
    title: "Expert Insights",
    icon: Headset,
    description:
      "Access market analysis and tips from experienced traders to sharpen your skills and strategies.",
  },
];

export const testimonials = [
  {
    content:
      'The platform has helped our team at Harmony save countless hours in stock analysis and trading decisions. "It\'s an indispensable tool for any trader."',
    author: "John, Portfolio Manager at Harmony",
    imgAlt: "John",
  },
  {
    content:
      '"I love how the platform adapts to my stock trading strategy. It feels like having a personal analyst right by my side!"',
    author: "James, Stock Trader at Sage",
    imgAlt: "James",
  },
  {
    content:
      "Traders report an average 20% boost in trade accuracy and portfolio performance using this platform.",
    author: "Peter, Investor",
    imgAlt: "Peter",
  },
  {
    content:
      '"The platform has simplified our stock tracking and allowed us to make quicker, smarter trading decisions!"',
    author: "Laura, Senior Analyst at Apex Trading",
    imgAlt: "Laura",
  },
  {
    content:
      '"With this platform, we’ve automated our stock alerts and analysis, enabling us to capitalize on every opportunity."',
    author: "Mike, Equity Trader at Tech Innovations",
    imgAlt: "Mike",
  },
  {
    content:
      '"The data insights provided by the platform are invaluable for making informed decisions in today\'s fast-paced stock market."',
    author: "Sarah, Day Trader at Bright Investments",
    imgAlt: "Sarah",
  },
  {
    content:
      '"Thanks to this platform, we’ve seen better results with our stock picks and quicker trade executions."',
    author: "David, Investment Analyst at FinTech Traders",
    imgAlt: "David",
  },
  {
    content:
      '"The stock tracking and analysis tools available have greatly improved our decision-making process for investments."',
    author: "Emily, Portfolio Manager at Global Ventures",
    imgAlt: "Emily",
  },
  {
    content:
      '"With this platform, I can stay updated on stock trends and make smarter, quicker buy/sell decisions."',
    author: "Samantha, Active Investor at InnovateTech",
    imgAlt: "Samantha",
  },
  {
    content:
      '"The platform has transformed my stock trading strategy with its real-time alerts and portfolio tracking features."',
    author: "Chris, Swing Trader at Peak Markets",
    imgAlt: "Chris",
  },
  {
    content:
      '"The insights and tools provided by the platform have allowed me to consistently make profitable trades."',
    author: "Kelly, Professional Trader at Visionary Capital",
    imgAlt: "Kelly",
  },
  {
    content:
      '"The predictive analytics on this platform have helped me identify profitable stock trends I would have otherwise missed."',
    author: "Alex, Trader at Digital Investments",
    imgAlt: "Alex",
  },
];

export const faqs = [
  {
    question: "What is a stock trading platform?",
    answer:
      "A stock trading platform is a digital tool that allows investors and traders to buy, sell, and track stocks and other financial instruments. It provides real-time data, analytics, and tools to help make informed trading decisions.",
  },
  {
    question: "How do I get started with the platform?",
    answer:
      "Simply sign up for an account on our website, complete the necessary verification process, and fund your account. Once you're set up, you can start tracking stocks, setting alerts, and executing trades.",
  },
  {
    question: "Is the platform suitable for beginners?",
    answer:
      "Yes, our platform is designed for both beginners and experienced traders. It offers easy-to-use features, educational resources, and customer support to guide you through the process of trading stocks.",
  },
  {
    question: "Can I trade stocks in real-time?",
    answer:
      "Yes, our platform provides real-time stock data, so you can monitor market movements and make timely trading decisions. You’ll receive immediate alerts based on your preferences for price changes and trends.",
  },
];

export const popularUnlistedShares = [
  {
    icon: "/stocks/nse.png",
    title: "NSE India Limited Unlisted Shares",
    price: 763,
    isUp: Math.random() > 0.5,
    status: function () {
      return `(${this.isUp ? "+" : "-"}${Math.floor(Math.random() * 10)}) (${Math.floor(
        Math.random() * 200
      )}%) 15D`;
    },
  },
  {
    icon: "/stocks/mse.png",
    title: "Metropolitan Stock Exchange (MSEI) Unlisted Shares",
    price: 826,
    isUp: Math.random() > 0.5,
    status: function () {
      return `(${this.isUp ? "+" : "-"}${Math.floor(Math.random() * 10)}) (${Math.floor(
        Math.random() * 200
      )}%) 15D`;
    },
  },
  {
    icon: "/stocks/oyo.jpeg",
    title: "ORAVEL STAYS LIMITED (Oyo Unlisted Shares)",
    price: 815,
    isUp: Math.random() > 0.5,
    status: function () {
      return `(${this.isUp ? "+" : "-"}${Math.floor(Math.random() * 10)}) (${Math.floor(
        Math.random() * 200
      )}%) 15D`;
    },
  },
  {
    icon: "/stocks/apollo.jpeg",
    title: "Apollo Green Energy Limited Unlisted Shares",
    price: 432,
    isUp: Math.random() > 0.5,
    status: function () {
      return `(${this.isUp ? "+" : "-"}${Math.floor(Math.random() * 10)}) (${Math.floor(
        Math.random() * 200
      )}%) 15D`;
    },
  },
  {
    icon: "/stocks/sed.png",
    title: "Spray Engineering Devices Unlisted Shares",
    price: 451,
    isUp: Math.random() > 0.5,
    status: function () {
      return `(${this.isUp ? "+" : "-"}${Math.floor(Math.random() * 10)}) (${Math.floor(
        Math.random() * 200
      )}%) 15D`;
    },
  },
  {
    icon: "/stocks/motilal.jpeg",
    title: "Motilal Oswal Home Finance Limited Unlisted Shares",
    price: 981,
    isUp: Math.random() > 0.5,
    status: function () {
      return `(${this.isUp ? "+" : "-"}${Math.floor(Math.random() * 10)}) (${Math.floor(
        Math.random() * 200
      )}%) 15D`;
    },
  },
];

export const newArrivalsShares = [
  {
    icon: "/new-arrivals/hinduja.png",
    title: "Hinduja Leyland Finance Limited ",
    price: 275,
    isUp: Math.random() > 0.5,
    status: function () {
      return `(${this.isUp ? "+" : "-"}${Math.floor(Math.random() * 10)}) (${Math.floor(
        Math.random() * 200
      )}%) 15D`;
    },
  },
  {
    icon: "/new-arrivals/shree.jpg",
    title: "Shree Refrigerations Limited ",
    price: 225,
    isUp: Math.random() > 0.5,
    status: function () {
      return `(${this.isUp ? "+" : "-"}${Math.floor(Math.random() * 10)}) (${Math.floor(
        Math.random() * 200
      )}%) 15D`;
    },
  },
  {
    icon: "/new-arrivals/rdc.jpg",
    title: "RDC Concrete (India) Limited",
    price: 275,
    isUp: Math.random() > 0.5,
    status: function () {
      return `(${this.isUp ? "+" : "-"}${Math.floor(Math.random() * 10)}) (${Math.floor(
        Math.random() * 200
      )}%) 15D`;
    },
  },
  {
    icon: "/new-arrivals/sk-finance.jpg",
    title: "SK Finance Limited",
    price: 985,
    isUp: Math.random() > 0.5,
    status: function () {
      return `(${this.isUp ? "+" : "-"}${Math.floor(Math.random() * 10)}) (${Math.floor(
        Math.random() * 200
      )}%) 15D`;
    },
  },
  {
    icon: "/new-arrivals/veeda.png",
    title: "Veeda Clinical Research Limited",
    price: 525,
    isUp: Math.random() > 0.5,
    status: function () {
      return `(${this.isUp ? "+" : "-"}${Math.floor(Math.random() * 10)}) (${Math.floor(
        Math.random() * 200
      )}%) 15D`;
    },
  },
  {
    icon: "/new-arrivals/sambhav.png",
    title: "Sambhv Steel Unlisted Shares",
    price: 125,
    isUp: Math.random() > 0.5,
    status: function () {
      return `(${this.isUp ? "+" : "-"}${Math.floor(Math.random() * 10)}) (${Math.floor(
        Math.random() * 200
      )}%) 15D`;
    },
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Understanding Unlisted Shares",
    excerpt: "Dive into the world of unlisted shares and their potential.",
    content:
      "Unlisted shares are securities of companies that are not listed on stock exchanges. These shares can offer unique investment opportunities...",
    author: "Jane Doe",
    date: "2023-07-01",
  },
  {
    id: "2",
    title: "The Risks and Rewards of Investing in Unlisted Shares",
    excerpt:
      "Explore the pros and cons of adding unlisted shares to your portfolio.",
    content:
      "While unlisted shares can offer high growth potential, they also come with significant risks. In this post, we'll explore...",
    author: "John Smith",
    date: "2023-07-15",
  },
  {
    id: "3",
    title: "How to Evaluate Unlisted Companies",
    excerpt:
      "Learn the key factors to consider when assessing unlisted companies.",
    content:
      "Evaluating unlisted companies requires a different approach compared to public companies. Here are some key factors to consider...",
    author: "Emily Brown",
    date: "2023-08-01",
  },
  {
    id: "4",
    title: "Unlisted Shares: A Path to Diversification",
    excerpt:
      "Discover how unlisted shares can help diversify your investment portfolio.",
    content:
      "Diversification is a key strategy in investment. Unlisted shares can provide a unique avenue for diversifying your portfolio...",
    author: "Michael Johnson",
    date: "2023-08-15",
  },
  {
    id: "5",
    title: "The Future of Unlisted Shares in the Digital Age",
    excerpt: "Explore how technology is shaping the unlisted shares market.",
    content:
      "The digital revolution is transforming every aspect of finance, including the unlisted shares market. In this post, we'll look at...",
    author: "Sarah Lee",
    date: "2023-09-01",
  },
  {
    id: "6",
    title: "Unlisted Shares vs. Private Equity: Understanding the Differences",
    excerpt:
      "Learn the key distinctions between unlisted shares and private equity investments.",
    content:
      "While both unlisted shares and private equity involve investing in private companies, there are important differences to understand...",
    author: "David Chen",
    date: "2023-09-15",
  },
];
