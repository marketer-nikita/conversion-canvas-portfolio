import { Description } from "@radix-ui/react-dialog";

export const caseStudiesConfig = [
  {
    title: "Fintech Lead Generation Campaign",
    client: "CreditFlow Solutions",
    industry: "Fintech",
    description:
      "Developed a comprehensive Google Ads strategy for a B2B fintech company specializing in credit management solutions.",
    challenge:
      "High competition and expensive keywords in the financial services sector",
    solution:
      "Ran Brand Awareness and Lead Generation campaigns on Google Ads and Facebook Ads",
    results: [
      { metric: "Cost Per Lead", value: "45%", change: "decrease" },
      { metric: "Lead Quality", value: "60%", change: "increase" },
      { metric: "Conversion Rate", value: "3.2%", change: "increase" },
      { metric: "Monthly Leads", value: "87%", change: "increase" },
    ],
    image: "photo-1563013544-824ae1b704d3",
  },
  {
    title: "B2B SaaS – ERP & EPM Software",
    client: "Deflytics",
    industry: "B2B SaaS",
    description:
      "Multi-channel lead generation strategy for an ERP SaaS product targeting IT and manufacturing enterprises.",
    challenge:
      "Low product awareness and weak engagement in a crowded SaaS space.",
    solution:
      "Built ABM-based LinkedIn + Google Ads with funnel retargeting via Factors.ai.",
    results: [
      { metric: "Google Ads CTR", value: "13%", change: "increase" },
      { metric: "LinkedIn Ads CTR", value: "10%", change: "increase" },
      { metric: "Warm account list built", value: "Yes", change: "achieved" },
      { metric: "Email outreach Open rate", value: "25%", change: "increase" },
    ],
    image: "photo-1576091160399-112ba8d25d1f",
  },
  {
    title: "AdTech – Search Arbitrage",
    client: "Plunic",
    industry: "AdTech",
    campaign: "AdTech Campaign Optimization",
    description:
      "High-volume campaign management for profitable search arbitrage across global traffic. Goal was to get traffic to publisher landing pages.",
    challenge:
      "Optimize CPA and maintain ROAS on $3K/day ad spend in Tier3 and Tier2 countires",
    solution:
      "Ran 80+ campaigns with scripts, geo-bidding, and daily optimization.",
    results: [
      { metric: "ROAS", value: "1.82x", change: "increase" },
      { metric: "Avg CPC", value: "$0.06", change: "decrease" },
      { metric: "Regions scaled", value: "10+", change: "increase" },
      {
        metric: "CTR from creative A/B tests",
        value: "25%",
        change: "increase",
      },
    ],
    image: "photo-1507003211169-0a1dd7228f2d",
  },
];
