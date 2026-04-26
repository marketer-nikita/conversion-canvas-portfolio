import { Description } from "@radix-ui/react-dialog";
import fintechImage from "@/assets/image/Fintech_Image.webp";
import saasImage from "@/assets/image/SaaS_Image.webp";
import adtechImage from "@/assets/image/Ad_tech_image.webp";

export const caseStudiesConfig = [
  {
    title: "Furniture Rentals Lead Gen (Dubai)",
    client: "Evergreen Furniture Rentals",
    industry: "E-commerce",
    description:
      "High-intent search campaign built from scratch to generate qualified leads for a furniture rental business in a competitive UAE market.",
    challenge: [
      "No historical data was present.",
      "Needed to identify profitable search demand quickly while avoiding wasted ad spend in a competitive auction environment.",
    ],
    solution: [
      "Structured campaigns by intent (event, product, location) to isolate high-performing segments.",
      "Continuously optimized by removing non-converting categories and reallocating budget to proven keywords.",
    ],
    results: [
      { metric: "ROI", value: "10x", change: "increase" },
      { metric: "Lead Generated", value: "52", change: "increase" },
      { metric: "Ad Spend", value: "AED 2.4K", change: "" },
      { metric: "High-Performing Segments", value: "Party + Location", change: "scaled" },
    ],
    image: fintechImage,
  },
  {
    title: "High Ticket Conversion Campaign: Diamond Jewellery (NYC Store)",
    client: "B Diam NYC",
    industry: "Retail",
    description: "Drive high-value footfall and in-store purchases in US Market.",
    challenge: ["No prior campaign data.", "Niche luxury audience with a high ticket size."],
    solution: [
      "Instagram Messaging Campaign focused.",
      "12-15 mile radius targeting (store-centric).",
      "Interest: luxury / art jewellery buyers.",
      "Weekly creative rotation to avoid fatigue.",
    ],
    results: [
      { metric: "Ad Spend", value: "$443", change: "" },
      { metric: "Revenue", value: "$10,000", change: "" },
      { metric: "Conversations", value: "90 (67% qualified)", change: "" },
      { metric: "Sales", value: "3", change: "" },
      { metric: "Cost/Message", value: "$5.42", change: "" },
      { metric: "Avg Order Value", value: "$3,000", change: "" },
    ],
    image: saasImage,
  },
  {
    title: "AdTech - Search Arbitrage",
    client: "Plunic",
    industry: "AdTech",
    campaign: "AdTech Campaign Optimization",
    description:
      "High-volume campaign management for profitable search arbitrage across global traffic. Goal was to get traffic to publisher landing pages.",
    challenge: [
      "Optimize CPA and maintain ROAS on $3K/day ad spend in Tier3 and Tier2 countries.",
      "Keep performance stable across volatile traffic sources.",
    ],
    solution: [
      "Ran 80+ campaigns with automation scripts.",
      "Implemented geo-bidding and daily optimization routines.",
    ],
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
    image: adtechImage,
  },
];
