export const financials = [
  {
    tab: "Income Statement",
    tables: [
      {
        title: "P&L Statement",
        table: {
          headers: ["P&L Statement", "2022", "2023", "2024"],
          rows: [
            ["Revenue", "444", "566", "1281"],
            ["Cost of Material Consumed", "0", "0", "0"],
            ["Gross Margins", "100", "100", "100"],
            ["Change in Inventory", "0", "0", "0"],
            ["Employee Benefit Expenses", "852", "971", "1011"],
            ["Other Expenses", "368", "423", "778"],
            ["EBITDA", "-776", "-828", "-508"],
            ["OPM", "-174.77", "-146.29", "-39.66"],
            ["Other Income", "928", "976", "987"],
            ["Finance Cost", "0", "0", "0"],
            ["D&A", "20", "21", "23"],
            ["EBIT", "-796", "-849", "-531"],
            ["EBIT Margins", "-179.28", "-150", "-41.45"],
            ["PBT", "132", "127", "456"],
            ["PBT Margins", "29.73", "22.44", "35.6"],
            ["Tax", "107", "88", "373"],
            ["PAT", "25", "39", "83"],
            ["NPM", "5.63", "6.89", "6.48"],
            ["EPS", "4.04", "6.3", "13.41"],
          ],
        },
      },
      {
        title: "Financial Ratios",
        table: {
          headers: ["Financial Ratios", "2022", "2023", "2024"],
          rows: [
            ["Operating Profit Margin", "-174.77", "-146.29", "-39.66"],
            ["Net Profit Margin", "5.63", "6.89", "6.48"],
            ["Earning Per Share (Diluted)", "4.04", "6.3", "13.41"],
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
          headers: ["Assets", "2022", "2023", "2024"],
          rows: [
            ["Fixed Assets", "2796", "2807", "2791"],
            ["CWIP", "0", "0", "0"],
            ["Investments", "3844", "7204", "7921"],
            ["Trade Receivables", "150", "173", "108"],
            ["Inventory", "0", "0", "0"],
            ["Other Assets", "32429", "29007", "29459"],
            ["Total Assets", "39219", "39191", "40279"],
          ],
        },
      },
      {
        title: "Liabilities",
        table: {
          headers: ["Liabilities", "2022", "2023", "2024"],
          rows: [
            ["Share Capital", "6.19", "6.19", "6.19"],
            ["FV", "1", "1", "1"],
            ["Reserves", "19353", "19715", "20238"],
            ["Borrowings", "0", "0", "0"],
            ["Trade Payables", "93", "104", "145"],
            ["Other Liabilities", "19766.81", "19365.81", "19889.81"],
            ["Total Liabilities", "39219", "39191", "40279"],
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
          headers: ["Cash-Flow Statement", "2022", "2023", "2024"],
          rows: [
            ["PBT", "506", "449", "897"],
            ["OPBWC", "-680", "-741", "-324"],
            ["Change in Receivables", "-22", "-30", "1552"],
            ["Change in Inventories", "0", "0", "0"],
            ["Change in Payables", "-49", "11.5", "140"],
            ["Other Changes", "10642", "7137.5", "9296"],
            ["Working Capital Change", "10571", "7119", "10988"],
            ["Cash Generated From Operations", "9891", "6378", "10664"],
            ["Tax", "-3", "22", "-246"],
            ["Cash Flow From Operations", "9888", "6400", "10418"],
            ["Purchase of PPE", "-3.5", "-27.5", "-3.8"],
            ["Sale of PPE", "0.8", "1.6", "1.42"],
            ["Cash Flow From Investment", "-10066", "-6625", "-10839"],
            ["Borrowing", "0", "0", "0"],
            ["Divided", "-10", "-11", "-10.51"],
            ["Equity", "0", "0", "0"],
            ["Others From Financing", "0", "0", "-0.49"],
            ["Cash Flow from Financing", "-10", "-11", "-11"],
            ["Net Cash Generated", "-188", "-236", "-432"],
            ["Cash at the Start", "1151", "905", "669"],
            ["Cash at the End", "963", "669", "237"],
          ],
        },
      },
    ],
  },
];
