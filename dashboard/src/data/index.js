export const patientDetailTabs = [
  {
    title: "Dental Chart",
    desc: "Check dental chart here",
    icon: "/images/icons/dental-chart.png",
    url: "dental-chart",
  },
  {
    title: "Treatment Plan",
    desc: "Check treatment plan here",
    icon: "/images/icons/treatment-plan.png",
    url: "treatment-plan",
  },
  {
    title: "Prescriptions",
    desc: "Check prescriptions here",
    icon: "/images/icons/dental-prescription.png",
    url: "prescription",
  },
  {
    title: "Dental Notes",
    desc: "Check dental notes here",
    icon: "/images/icons/dental-notes.png",
    url: "dental-note",
  },
  {
    title: "Investigation",
    desc: "Check investigation here",
    icon: "/images/icons/dental-investigation.png",
    url: "investigation",
  },
  {
    title: "Payments",
    desc: "Check payments here",
    icon: "/images/icons/dental-payment.png",
    url: "payment",
  },
];

export const financials = [
  {
    tab: "Income Statement",
    tables: [
      {
        title: "P&L Statement",
        table: {
          headers: ["P&L Statement", "2021", "2022", "2023", "2024"],
          rows: [
            ["Revenue", "3006", "4751", "7728", "9528"],
            ["Cost of Material Consumed", "1132", "2911", "4385", "5066"],
            ["Gross Margins", "62.34", "38.73", "43.26", "46.83"],
            ["Change in Inventory", "354", "-486", "17", "-292"],
            ["Employee Benefit Expenses", "570", "705", "877", "1036"],
            ["Other Expenses", "757", "1042", "1682", "2513"],
            ["EBITDA", "193", "579", "767", "1205"],
            ["OPM", "6.42", "12.19", "9.92", "12.65"],
            ["Other Income", "29", "20", "37", "43"],
            ["Finance Cost", "205", "234", "263", "222"],
            ["D&A", "308", "323", "359", "391"],
            ["EBIT", "-115", "256", "408", "814"],
            ["EBIT Margins", "-3.83", "5.39", "5.28", "8.54"],
            ["PBT", "-291", "42", "181", "635"],
            ["PBT Margins", "-9.68", "0.88", "2.34", "6.66"],
            ["Tax", "-45", "0", "-13", "192"],
            ["PAT", "-246", "42", "194", "443"],
            ["NPM", "-8.18", "0.88", "2.51", "4.65"],
            ["EPS", "-3.11", "0.53", "2.45", "5.32"],
          ],
        },
      },
      {
        title: "Financial Ratios",
        table: {
          headers: ["Financial Ratios", "2021", "2022", "2023", "2024"],
          rows: [
            ["Operating Profit Margin", "6.42", "12.19", "9.92", "12.65"],
            ["Net Profit Margin", "-8.18", "0.88", "2.51", "4.65"],
            ["Earning Per Share (Diluted)", "-3.11", "0.53", "2.45", "5.32"],
          ],
        },
      },
    ],
  },
  {
    tab: "Balance Sheet",
    tables: [
      {
        title: "Balance Sheet",
        table: {
          headers: ["Balance Sheet", "2021", "2022", "2023", "2024"],
          rows: [
            ["Fixed Assets", "3149", "3071", "3644", "3804"],
            ["CWIP", "10", "84", "0", "137"],
            ["Investments", "0", "0", "0", "0"],
            ["Trade Receivables", "754", "926", "1577", "2290"],
            ["Inventory", "524", "1122", "1456", "1285"],
            ["Other Assets", "993", "1288", "462", "552"],
            ["Total Assets", "5430", "6491", "7139", "8068"],
            ["Share Capital", "791.6", "791.6", "791.6", "833"],
            ["FV", "10", "10", "10", "10"],
            ["Reserves", "1206", "1247", "1442", "2341"],
            ["Borrowings", "2306", "3181", "3404", "2722"],
            ["Trade Payables", "378", "838", "1021", "1422"],
            ["Other Liabilities", "748.4", "433.4", "480.4", "750"],
            ["Total Liabilities", "5430", "6491", "7139", "8068"],
          ],
        },
      },
    ],
  },
  {
    tab: "Cash Flow Statement",
    tables: [
      {
        title: "Cash-Flow Statement",
        table: {
          headers: ["Cash-Flow Statement", "2021", "2022", "2023", "2024"],
          rows: [
            ["PBT", "-291", "42", "181", "635"],
            ["OPBWC", "201", "588", "781", "1222"],
            ["Change in Receivables", "672", "-1", "-127", "-692"],
            ["Change in Inventories", "365", "-598", "-334", "171"],
            ["Change in Payables", "-992", "506", "189", "584"],
            ["Other Changes", "0", "0", "0", "0"],
            ["Working Capital Change", "45", "-93", "-272", "63"],
            ["Cash Generated From Operations", "246", "495", "509", "1285"],
            ["Tax", "27", "-22", "-8", "-93"],
            ["Cash Flow From Operations", "273", "473", "501", "1192"],
            ["Purchase of PPE", "-466", "-325", "-987", "-701"],
            ["Sale of PPE", "1", "14", "150", "19"],
            ["Cash Flow From Investment", "-358", "-770", "-450", "-696"],
            ["Borrowing", "145", "530", "223", "-681"],
            ["Divided", "0", "0", "0", "0"],
            ["Equity", "0", "0", "0", "498"],
            ["Others From Financing", "-220", "-244", "-273", "-231"],
            ["Cash Flow from Financing", "-75", "286", "-50", "-414"],
            ["Net Cash Generated", "-160", "-11", "1", "82"],
            ["Cash at the Start", "180", "21", "10", "11"],
            ["Cash at the End", "20", "10", "11", "93"],
          ],
        },
      },
    ],
  },
];
