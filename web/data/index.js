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

const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

export const popularUnlistedShareTimeRange = "15d";
export const newArrivalsTimeRange = "6m";

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

export const ALLROUTES = [
  {
    link: "/",
    roles: [],
  },
  {
    link: "/sectors",
    roles: [],
  },
  {
    link: "/sebi-guidelines",
    roles: [],
  },
  {
    link: "/off-market-annexures",
    roles: [],
  },
  {
    link: "/company-of-unlisted-share",
    roles: [],
  },
  {
    link: "/search/[subCatSlug]",
    roles: [],
  },
  { link: "/contact-us", roles: [] },
  { link: "/profile", roles: [ROLES.USER] },
  { link: "/portfolio", roles: [ROLES.USER] },
  { link: "/transactions", roles: [ROLES.USER] },
  {
    link: "/external-transactions",
    roles: [ROLES.USER],
  },
];

export const timeRanges = [
  {
    label: "1M",
    value: "1m",
  },
  {
    label: "6M",
    value: "6m",
  },
  {
    label: "1Y",
    value: "1y",
  },
  {
    label: "3Y",
    value: "3y",
  },
  {
    label: "5Y",
    value: "5y",
  },
];

export const publicRoutes = ["/", "login", "signin"];

export const OFF_MARKET_ANNEXURE = [
  {
    pdf: "/offmarket-annexure/annexure1.pdf",
    label: "Aditya Birla Money Off-Market Annexure (CDSL)",
  },
  {
    pdf: "/offmarket-annexure/annexure2.pdf",
    label: "Adroit Financials Off-Market Annexure (NSDL)",
  },
  {
    pdf: "/offmarket-annexure/annexure3.pdf",
    label: "Arihant Capital Market Off Market Annexure NSDL",
  },
  {
    pdf: "/offmarket-annexure/annexure4.pdf",
    label: "Anand Rathi CDSL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure5.pdf",
    label: "Axis Bank NSDL CDSL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure6.pdf",
    label: "Axis Securities CDSL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure7.pdf",
    label: "Bharat Bhushan Equity Traders Limited NSDL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure8.pdf",
    label: "Bonanza Portfolio NSDL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure9.pdf",
    label: "CDSL Off Market Common Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure10.pdf",
    label: "NSDL Off Market Common Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure11.pdf",
    label: "Edelweiss CDSL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure12.pdf",
    label: "Globe Securities CDSL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure13.pdf",
    label: "HDFC Bank NSDL CDSL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure14.pdf",
    label: "HDFC Securities Limited CDSL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure15.pdf",
    label: "ICICI Bank CDSL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure16.pdf",
    label: "ICICI Bank NSDL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure17.pdf",
    label: "IDBI Bank NSDL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure18.pdf",
    label: "IIFL CDSL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure19.pdf",
    label: "IIFL NSDL Off Market Annexure",
  },
  {
    pdf: "/offmarket-annexure/annexure20.pdf",
    label: "Indusind Bank NSDL Off Market Annexure",
  },
];

export const PAN_OF_UNLISTED_SHARES = [
  { company: "A V Thomas & Co. Limited Unlisted Shares", pan: "AABCA8810G" },
  { company: "ACS Technologies Limited Unlisted Shares", pan: "AAACL4102B" },
  { company: "ADIANCE TECHNOLOGIES Unlisted Shares", pan: "AAECA7251Q" },
  { company: "Adtech Systems Limited Unlisted Shares", pan: "AAACA5355K" },
  { company: "AGS Transact", pan: "AAECA0901H" },
  {
    company: "AITMC Ventures Pvt. Ltd. (AVPL) Unlisted Shares Price",
    pan: "AAPCA0994F",
  },
  { company: "Amalgamations Repco Limited Unlisted Shares", pan: "ADCA8200E1" },
  { company: "Ambadi Investments Limited (murugappa)", pan: "AAACN1078J" },
  { company: "Amol Minechem Limited", pan: "AABCA2807K" },
  { company: "Anand I Power Limited", pan: "AAACP0482E" },
  { company: "Anand Rathi Wealth Services", pan: "AAACH8136P" },
  {
    company: "Anheuser Busch Inbev (Sabmiller) India Limited Unlisted Shares",
    pan: "AAICS2238R",
  },
  {
    company: "Anugraha Valve Castings Limited Unlisted Shares",
    pan: "AACCA2285Q",
  },
  { company: "APL Metals Unlisted Shares", pan: "AACCA4246P" },
  {
    company: "Apollo Fashion International Unlisted Shares",
    pan: "AAZCA3434G",
  },
  { company: "Apollo Green Energy Limited Unlisted Shares", pan: "AAACA6447N" },
  { company: "Aptus Value Housing Finance", pan: "AAICA0871G" },
  { company: "Arch Pharmalabs Limited Unlisted Shares", pan: "AACCM0306Q" },
  { company: "Arohan Financial Services Unlisted Shares", pan: "AAECA6121D" },
  { company: "ASK Investment Managers Limited", pan: "AAFCA2302P" },
  {
    company: "Assam Carbon Products Limited Unlisted Shares",
    pan: "AACCA4236D",
  },
  { company: "AU Small Finance Bank Limited", pan: "AAACL2777N" },
  { company: "Auckland Jute Co. Limited Unlisted Shares", pan: "AACCA6099G" },
  { company: "Axles India Limited Unlisted Shares", pan: "AAACA3173D" },
  { company: "Bagrrys India Limited Unlisted Shares", pan: "AABCB8144N" },
  { company: "Bazar India Unlisted Shares", pan: "AALCM8166F" },
  {
    company: "Bellary Steel and Alloys Limited Unlisted Shares",
    pan: "AATFB5792R",
  },
  { company: "Berar Finance Limited", pan: "AAACB5861B" },
  { company: "Bharat Hotels Unlisted Shares", pan: "AAACB1298E" },
  { company: "Bharat Nidhi (Bharat Bank) Unlisted Shares", pan: "AAACB0195J" },
  { company: "Big Basket Unlisted Shares", pan: "AAQCS4503H" },
  { company: "Bira Unlisted Shares", pan: "AAECD6739Q" },
  { company: "BLSX Limited", pan: "AAKCB8340F" },
  {
    company: "Boat Unlisted Share Price (Imagine Marketing)",
    pan: "AADCI3821M",
  },
  { company: "Bolzen and Mutter Unlisted Share", pan: "AAHCB4724C" },
  { company: "Bombay Gas Company Limited Unlisted Shares", pan: "AAACB5863D" },
  {
    company: "Bombay Swadeshi Stores Limited Unlisted Shares",
    pan: "AAACB4624J",
  },
  { company: "Bootes Impex Tech Ltd.", pan: "AAJCB6841Q" },
  { company: "BVG India Limited Unlisted Share", pan: "AACCB0943N" },
  { company: "C&S Electric Limited Unlisted Shares", pan: "AAACC0909K" },
  {
    company: "C2C Advanced Systems Limited Unlisted Shares",
    pan: "AAHCC4189Q",
  },
  { company: "Calcutta Stock Exchange Unlisted Shares", pan: "AABCT8138N" },
  {
    company: "Camac Commercial Company Limited Unlisted Shares",
    pan: "AABCC0733E",
  },
  {
    company: "Capgemini Technology Services India Limited Unlisted Shares",
    pan: "AABCM4573E",
  },
  { company: "Capital Small Finance Bank Unlisted Shares", pan: "AABCC3632Q" },
  {
    company:
      "Care Health (Previously Religare Health) Insurance Company Limited Unlisted Shares",
    pan: "AADCR6281N",
  },
  {
    company: "Carrier Airconditioning & Refrigeration Limited Unlisted Shares",
    pan: "AAACC8414B",
  },
  { company: "Claps Oiltech Unlisted Share", pan: "AAJCC8125G" },
  {
    company: "Cochin International Airport Limited Unlisted Shares",
    pan: "AAACC9658B",
  },
  { company: "CSB", pan: "AABCT0024D" },
  { company: "CSK Unlisted Shares", pan: "AAFCC8730K" },
  {
    company: "CTR Manufacturing Industries Limited Unlisted Share",
    pan: "AAACC7256R",
  },
  { company: "Curis Lifesciences limited", pan: "AAGCC4108A" },
  {
    company: "Dalmia Bharat Refractories Limited Unlisted Shares",
    pan: "AAKCS3708G",
  },
  {
    company: "DANTECH DIGITAL DENTAL SOLUTIONS PRIVATE LIMITED",
    pan: "AAJCD9521H",
  },
  { company: "Delhivery", pan: "AAPCS9575E" },
  { company: "Delta Galaxy Unlisted Shares", pan: "AAECD0857H" },
  {
    company: "Deys Medical Stores (Mfg) Limited Unlisted Shares",
    pan: "AAACD7989A",
  },
  { company: "DGP Securities Limited Unlisted Share", pan: "AABCS4946F" },
  { company: "Digvijay Finlease Unlisted Shares", pan: "AAACD6998D" },
  { company: "Down Town Hospital Limited Unlisted Shares", pan: "AAACD7247B" },
  { company: "DSM Fresh Foods Zappfresh", pan: "AAFCD3598N" },
  {
    company: "East India Pharmaceutical Works Limited Unlisted Share",
    pan: "AAACE5779P",
  },
  { company: "Eaton Fluid Power Limited Unlisted Shares", pan: "AAACV8426E" },
  { company: "Ecosure Unlisted Shares", pan: "AAFCE7193L" },
  { company: "Elcid Investment Limited Unlisted Shares", pan: "AAACE1611Q" },
  { company: "Electrosteel Steels Limited Unlisted Shares", pan: "AABCE6875H" },
  { company: "Elofic Industries Limited Unlisted Shares", pan: "AAACE0425C" },
  {
    company: "Empire Spices and Foods Limited Unlisted Shares",
    pan: "AAACE1056D",
  },
  { company: "English India Clay Limited (EICL)", pan: "AAACE5011C" },
  { company: "ESDS Unlisted Shares", pan: "AABCE4981A" },
  { company: "FabIndia Unlisted Share Price", pan: "AAACF0782H" },
  { company: "Fincare Business Finance Unlisted Shares", pan: "AACCF4303J" },
];

export const QUICK_LINKS = [
  { href: "/off-market-annexures", label: "Off Market Annexure" },
  { href: "/company-of-unlisted-share", label: "PAN of Unlisted Shares" },
  { href: "/sebi-guidelines", label: "SEBI Guidelines" },
  { href: "/frequently-asked-questions", label: "Frequently Asked Questions" },
  { href: "#", label: "Blog" },
];
