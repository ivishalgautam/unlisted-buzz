export const financials = [
  {
    tab: "Income Statement",
    tables: [
      {
        title: "P&L Statement",
        table: {
          headers: ["P&L Statement", "2020", "2021", "2022", "2023"],
          rows: [
            ["Revenue", "58", "69", "91", "45"],
            ["Cost of Material Consumed", "33", "41", "41", "22"],
            ["Gross Margins", "43.1", "40.58", "54.95", "51.11"],
            ["Change in Inventory", "-1", "-5", "3", "2"],
            ["Employee Benefit Expenses", "3", "4", "6", "5"],
            ["Other Expenses", "18", "21", "31", "13"],
            ["EBITDA", "5", "8", "10", "3"],
            ["OPM", "8.62", "11.59", "10.99", "6.67"],
            ["Other Income", "0.5", "0.5", "0.1", "0.8"],
            ["Finance Cost", "0", "0", "0", "0.4"],
            ["D&A", "0", "0", "0", "0.3"],
            ["EBIT", "5", "8", "10", "2.7"],
            ["EBIT Margins", "8.62", "11.59", "10.99", "6"],
            ["PBT", "4", "7", "10", "3"],
            ["PBT Margins", "6.9", "10.14", "10.99", "6.67"],
            ["Tax", "1", "2", "2", "0.7"],
            ["PAT", "3", "5", "8", "2.3"],
            ["NPM", "5.17", "7.25", "8.79", "5.11"],
            ["EPS", "100", "166.67", "266.67", "71.88"],
          ],
        },
      },
      {
        title: "Financial Ratios",
        table: {
          headers: ["Financial Ratios", "2020", "2021", "2022", "2023"],
          rows: [
            ["Operating Profit Margin", "8.62", "11.59", "10.99", "6.67"],
            ["Net Profit Margin", "5.17", "7.25", "8.79", "5.11"],
            ["Earning Per Share (Diluted)", "100", "166.67", "266.67", "71.88"],
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
          headers: ["Assets", "2020", "2021", "2022", "2023"],
          rows: [
            ["Fixed Assets", "2", "1.6", "2", "2.6"],
            ["CWIP", "0", "0", "0", "0"],
            ["Investments", "0", "0", "1", "2.4"],
            ["Trade Receivables", "5", "6", "7", "7"],
            ["Inventory", "8", "14", "12", "9"],
            ["Other Assets", "11", "11.4", "19", "19"],
            ["Total Assets", "26", "33", "41", "40"],
          ],
        },
      },
      {
        title: "Liabilities",
        table: {
          headers: ["Liabilities", "2020", "2021", "2022", "2023"],
          rows: [
            ["Share Capital", "0.3", "0.3", "0.3", "0.32"],
            ["FV", "10", "10", "10", "10"],
            ["Reserves", "17", "22", "29", "32"],
            ["Borrowings", "3", "4", "4", "4.5"],
            ["Trade Payables", "5", "6", "6", "2.5"],
            ["Other Liabilities", "0.7", "0.7", "1.7", "0.68"],
            ["Total Liabilities", "26", "33", "41", "40"],
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
          headers: ["Cash-Flow Statement", "2020", "2021", "2022", "2023"],
          rows: [
            ["PBT", "4", "7", "10", "3"],
            ["OPBWC", "5", "8", "10", "3.25"],
            ["Change in Receivables", "-0.2", "-0.7", "-0.6", "-0.34"],
            ["Change in Inventories", "-0.8", "-5.4", "2", "2.6"],
            ["Change in Payables", "1.6", "1", "0.7", "-3.91"],
            ["Other Changes", "-0.2", "0.1", "-1", "2"],
            ["Working Capital Change", "0.4", "-5", "1.1", "0.35"],
            ["Cash Generated From Operations", "5.4", "3", "11.1", "3.6"],
            ["Tax", "0", "0", "0", "0"],
            ["Cash Flow From Operations", "5.4", "3", "11.1", "3.6"],
            ["Purchase of PPE", "-0.07", "-0.3", "-0.9", "-0.68"],
            ["Sale of PPE", "0", "0", "0", "0"],
            ["Cash Flow From Investment", "-0.07", "0", "-1.7", "-0.87"],
            ["Borrowing", "-2", "0.9", "-0.2", "0.41"],
            ["Divided", "0", "0", "0", "0"],
            ["Equity", "0", "0", "0", "0"],
            ["Others From Financing", "-1.6", "-2.5", "-3.4", "-1.55"],
            ["Cash Flow from Financing", "-3.6", "-1.6", "-3.6", "-1.14"],
            ["Net Cash Generated", "1.73", "1.4", "5.8", "1.59"],
            ["Cash at the Start", "7", "8.8", "10", "16"],
            ["Cash at the End", "8.73", "10.2", "15.8", "17.59"],
          ],
        },
      },
    ],
  },
];
