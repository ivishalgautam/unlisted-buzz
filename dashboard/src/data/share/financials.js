export const financials = [
  {
    tab: "Income Statement",
    tables: [
      {
        title: "P&L Statement",
        table: {
          headers: ["P&L Statement", "2021", "2022", "2023", "2024"],
          rows: [
            ["Revenue", "123", "137", "200", "226"],
            ["Cost of Material Consumed", "62", "73", "102", "114"],
            ["Gross Margins", "49.59", "46.72", "49", "49.56"],
            ["Change in Inventory", "1", "-9", "1", "-4"],
            ["Employee Benefit Expenses", "29", "31", "34", "39"],
            ["Other Expenses", "20", "25", "33", "37"],
            ["EBITDA", "11", "17", "30", "40"],
            ["OPM", "8.94", "12.41", "15", "17.7"],
            ["Other Income", "3", "1.6", "2.5", "5"],
            ["Finance Cost", "1", "1", "1", "1"],
            ["D&A", "6", "6", "6", "6"],
            ["EBIT", "5", "11", "24", "34"],
            ["EBIT Margins", "4.07", "8.03", "12", "15.04"],
            ["PBT", "7", "12", "26", "37"],
            ["PBT Margins", "5.69", "8.76", "13", "16.37"],
            ["Tax", "2", "4", "7", "9"],
            ["PAT", "5", "8", "19", "28"],
            ["NPM", "4.07", "5.84", "9.5", "12.39"],
            ["EPS", "11.24", "17.98", "42.7", "62.92"],
          ],
        },
      },
      {
        title: "Financial Ratios",
        table: {
          headers: ["Financial Ratios", "2021", "2022", "2023", "2024"],
          rows: [
            ["Operating Profit Margin", "8.94", "12.41", "15", "17.7"],
            ["Net Profit Margin", "4.07", "5.84", "9.5", "12.39"],
            ["Earning Per Share (Diluted)", "11.24", "17.98", "42.7", "62.92"],
          ],
        },
      },
    ],
  },
  {
    tab: "Balance Sheet",
    tables: [
      {
        title: "Assets",
        table: {
          headers: ["Assets", "2021", "2022", "2023", "2024"],
          rows: [
            ["Fixed Assets", "49", "45", "42", "50"],
            ["CWIP", "0", "0.02", "1.6", "0"],
            ["Investments", "20", "40", "43", "40"],
            ["Trade Receivables", "88", "64", "82", "107"],
            ["Inventory", "50", "62", "72", "79"],
            ["Other Assets", "55", "48.98", "52.4", "57"],
            ["Total Assets", "262", "260", "293", "333"],
          ],
        },
      },
      {
        title: "Liabilities",
        table: {
          headers: ["Liabilities", "2021", "2022", "2023", "2024"],
          rows: [
            ["Share Capital", "4.45", "4.45", "4.45", "4.45"],
            ["FV", "10", "10", "10", "10"],
            ["Reserves", "190", "197", "215", "242"],
            ["Borrowings", "0.5", "0.07", "0", "0"],
            ["Trade Payables", "28", "19", "29", "47"],
            ["Other Liabilities", "39.05", "39.48", "44.55", "39.55"],
            ["Total Liabilities", "262", "260", "293", "333"],
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
            ["PBT", "7", "12", "26", "37"],
            ["OPBWC", "18", "17", "30", "40"],
            ["Change in Receivables", "-15", "24", "-17", "-26"],
            ["Change in Inventories", "-9", "-11", "-10", "-7"],
            ["Change in Payables", "3", "-8", "10", "18"],
            ["Other Changes", "13.5", "6", "10", "-8.8"],
            ["Working Capital Change", "-7.5", "11", "-7", "-23.8"],
            ["Cash Generated From Operations", "10.5", "28", "23", "16.2"],
            ["Tax", "-2", "-4", "-7", "-9.4"],
            ["Cash Flow From Operations", "8.5", "24", "16", "6.8"],
            ["Purchase of PPE", "-2", "-2", "-4.5", "-12.2"],
            ["Sale of PPE", "0", "0.38", "0", "0.1"],
            ["Cash Flow From Investment", "-6.6", "-21", "-5", "-4.3"],
            ["Borrowing", "0", "0", "0", "0"],
            ["Divided", "-0.44", "-0.44", "-1", "-1.7"],
            ["Equity", "0", "0", "0", "0"],
            ["Others From Financing", "-1.06", "-1.06", "-1", "-1.2"],
            ["Cash Flow from Financing", "-1.5", "-1.5", "-2", "-2.9"],
            ["Net Cash Generated", "0.4", "1.5", "9", "-0.4"],
            ["Cash at the Start", "5.28", "5.6", "7", "15.5"],
            ["Cash at the End", "5.68", "7.1", "16", "15.1"],
          ],
        },
      },
    ],
  },
];
