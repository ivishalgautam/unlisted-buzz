export const financials = [
  {
    tab: "Income Statement",
    tables: [
      {
        title: "P&L Statement",
        table: {
          headers: ["P&L Statement", "2021", "2022", "2023", "2024"],
          rows: [
            ["Interest Earned", "7413", "8737", "11219", "14316"],
            ["Other Income", "221", "206", "45", "254"],
            ["Interest Expended", "3211", "3873", "4706", "5674"],
            ["Operating Expenses", "3955", "4699", "6067", "8701"],
            ["Provisions & Contingencies", "47", "-1.64", "67", "90"],
            ["PAT", "279", "271", "304", "8"],
            ["EPS", "0.63", "0.61", "0.64", "0.02"],
            ["Gross NPA", "0", "0", "5.2", "1.57"],
            ["Net NPA", "0", "1.9", "3.52", "1.39"],
          ],
        },
      },
      {
        title: "Financial Ratios",
        table: {
          headers: ["Financial Ratios", "2021", "2022", "2023", "2024"],
          rows: [
            ["Advances", "30164", "35168", "40304", "47827"],
            ["Book Value", "17.74", "18.27", "19.27", "19.48"],
            ["P / B", "1.47", "1.42", "1.45", "1.33"],
            ["ROE (%)", "3.55", "3.35", "3.33", "0.08"],
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
            ["Fixed Assets", "1226", "2458", "3255", "4702"],
            ["Cash & Balances", "1205", "1928", "1511", "2012"],
            ["Investments", "283", "412", "471", "669"],
            ["Advances", "30164", "35168", "40304", "47827"],
            ["Other Assets", "4590", "5898", "7225", "8585"],
            ["Total Assets", "37468", "45864", "52766", "63795"],
          ],
        },
      },
      {
        title: "Liabilities",
        table: {
          headers: ["Liabilities", "2021", "2022", "2023", "2024"],
          rows: [
            ["Share Capital", "4433", "4433", "4739", "4979.36"],
            ["FV", "10", "10", "10", "10"],
            ["Reserves", "3432", "3665", "4394", "4720"],
            ["Borrowings", "21838", "29627", "34540", "42361.16"],
            ["Deposits", "0", "0", "0", "0"],
            ["Other Liabilities", "7765", "8139", "9093", "11734.48"],
            ["Total Liabilities", "37468", "45864", "52766", "63795"],
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
            ["PBT (%)", "422", "372", "424", "105"],
            ["OPBWC", "1206", "1587", "2289", "2041"],
            ["Term Deposit", "0", "0", "0", "0"],
            ["Change in Investment", "-136", "-124", "-59", "-198"],
            ["Change in Advances", "-5252", "-4957", "-5203", "-7612"],
            ["Change in Deposit", "0", "0", "0", "0"],
            ["Other Changes", "250", "37", "314", "839"],
            ["Working Capital Change", "-5138", "-5044", "-4948", "-6971"],
            [
              "Cash Generated From Operations",
              "-3932",
              "-3457",
              "-2659",
              "-4930",
            ],
            ["Tax", "53", "145", "140", "0"],
            ["Cash Flow From Operations", "-3985", "-3602", "-2799", "-4930"],
            ["Purchase of PPE", "-455", "-1726", "-1487", "-2243"],
            ["Sale of PPE", "4", "3", "0", "0"],
            ["Purchase of Investment", "0", "0", "0", "0"],
            ["Sale of Investments", "14", "27", "-4", "5"],
            ["Others", "-3", "-431", "-65", "240"],
            ["Cash Flow from Investment", "-440", "-2127", "-1556", "-1998"],
            ["Proceeds from Borrowing", "4756", "2476", "5612", "7821"],
            ["Repayment of Borrowing", "-36", "0", "-699", "0"],
            ["Dividend", "0", "-1", "0", "-43"],
            ["Proceeds from Equity", "0", "0", "765", "600"],
            ["Others From Financing", "-712", "3524", "-1719", "-919"],
            ["Cash Flow from Financing", "4008", "5999", "3959", "7459"],
            ["Net Cash Generated", "-417", "270", "-396", "531"],
            ["Cash at the Start", "1521", "1103", "1375", "979"],
            ["Cash at the End", "1104", "1373", "979", "1510"],
          ],
        },
      },
    ],
  },
];
