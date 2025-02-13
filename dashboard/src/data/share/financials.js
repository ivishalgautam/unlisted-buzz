export const financials = [
  {
    tab: "Income Statement",
    tables: [
      {
        title: "P&L Statement",
        table: {
          headers: ["P&L Statement", "2021", "2022", "2023", "2024"],
          rows: [
            ["Revenue", "388", "454", "599", "680"],
            ["Cost of Material Consumed", "179", "249", "363", "366"],
            ["Gross Margins", "53.87", "45.15", "39.4", "46.18"],
            ["Change in Inventory", "7", "-10", "-15", "-2"],
            ["Employee Benefit Expenses", "41", "42", "47", "54"],
            ["Other Expenses", "108", "134", "166", "186"],
            ["EBITDA", "53", "39", "38", "76"],
            ["OPM", "13.66", "8.59", "6.34", "11.18"],
            ["Other Income", "9", "4", "11", "11"],
            ["Finance Cost", "8", "2", "5", "6"],
            ["D&A", "41", "41", "38", "36"],
            ["EBIT", "12", "-2", "0", "40"],
            ["EBIT Margins", "3.09", "-0.44", "0", "5.88"],
            ["PBT", "12", "1", "7", "45"],
            ["PBT Margins", "3.09", "0.22", "1.17", "6.62"],
            ["Tax", "2", "-10", "8", "23"],
            ["PAT", "10", "11", "-1", "22"],
            ["NPM", "2.58", "2.42", "-0.17", "3.24"],
            ["EPS", "9.26", "10.13", "-0.71", "15.6"],
          ],
        },
      },
      {
        title: "Financial Ratios",
        table: {
          headers: ["Financial Ratios", "2021", "2022", "2023", "2024"],
          rows: [
            ["Operating Profit Margin", "13.66", "8.59", "6.34", "11.18"],
            ["Net Profit Margin", "2.58", "2.42", "-0.17", "3.24"],
            ["Earning Per Share (Diluted)", "9.26", "10.13", "-0.71", "15.6"],
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
            ["Fixed Assets", "476", "454", "421", "551"],
            ["CWIP", "14", "0.6", "21", "15"],
            ["Investments", "90", "89", "88", "88"],
            ["Trade Receivables", "12", "16", "16", "16"],
            ["Inventory", "42", "65", "77", "87"],
            ["Other Assets", "76", "81.4", "263", "122"],
            ["Total Assets", "710", "706", "886", "879"],
          ],
        },
      },
      {
        title: "Liabilities",
        table: {
          headers: ["Liabilities", "2021", "2022", "2023", "2024"],
          rows: [
            ["Share Capital", "10.8", "10.86", "14.1", "14.1"],
            ["FV", "10", "10", "10", "10"],
            ["Reserves", "443", "455", "626", "648"],
            ["Borrowings", "95", "114", "90", "57"],
            ["Trade Payables", "57", "82", "98", "83"],
            ["Other Liabilities", "104.2", "44.14", "57.9", "76.9"],
            ["Total Liabilities", "710", "706", "886", "879"],
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
            ["PBT", "12", "1", "7", "45"],
            ["OPBWC", "55", "44", "48", "78"],
            ["Change in Receivables", "6", "-4", "0.24", "-3"],
            ["Change in Inventories", "17", "-22", "-12", "-10"],
            ["Change in Payables", "-11", "26", "15", "-14"],
            ["Other Changes", "-4", "4", "10.76", "5"],
            ["Working Capital Change", "8", "4", "14", "-22"],
            ["Cash Generated From Operations", "63", "48", "62", "56"],
            ["Tax", "-2", "0", "0", "-7"],
            ["Cash Flow From Operations", "61", "48", "62", "49"],
            ["Purchase of PPE", "-10", "-6", "-64", "-131"],
            ["Sale of PPE", "0", "1", "0", "0"],
            ["Cash Flow From Investment", "-30", "1", "-49", "-89"],
            ["Borrowing", "-25", "-52", "-33", "-34"],
            ["Divided", "0", "0", "0", "0"],
            ["Equity", "0", "0", "175", "0"],
            ["Others From Financing", "-11", "-4", "-5", "-7"],
            ["Cash Flow from Financing", "-36", "-56", "137", "-41"],
            ["Net Cash Generated", "-5", "-7", "150", "-81"],
            ["Cash at the Start", "17", "11", "5", "155"],
            ["Cash at the End", "12", "4", "155", "74"],
          ],
        },
      },
    ],
  },
];
