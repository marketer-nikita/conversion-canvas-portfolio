import {
  Calendar,
  MapPin,
  Briefcase,
  TrendingUp,
  Users,
  DollarSign,
  Target,
} from "lucide-react";

export const experienceConfig = [
  {
    role: "Associate Media Buying",
    company: "Z1 Tech",
    period: "2024 - 2025",
    location: "Gurgaon, India",
    description:
      "Specialized in search arbitrage strategies to drive monetized traffic at scale.",
    achievements: [
      "Launched geo-targeted Google Ads via PMax & Display.",
      "Achieved consistent CPA & RPC benchmarks across segments.",
      "Built automated dashboards to track monetization quality.",
    ],
    metrics: [
      { icon: TrendingUp, value: "40%", label: "RPC Increase" },
      { icon: DollarSign, value: "$100K+", label: "Monthly Spend" },
      { icon: Target, value: "30%", label: "CPA Reduction" },
    ],
  },
  {
    role: "Digital Marketing Executive",
    company: "Impact Digital Services Pvt. Ltd.",
    period: "2023 - 2024",
    location: "New Delhi, India",
    description:
      "Executed full-funnel ad campaigns for B2B and B2C brands across sectors.",
    achievements: [
      "Delivered 360° campaigns for fintech, healthcare, IT, and education.",
      "Boosted landing page CVR through VWO & MS Clarity tests",
      "Implemented conversion tracking and attribution modeling",
      "Leveraged Factors.ai to improve lead insights & campaign targeting.",
    ],
    metrics: [
      { icon: Users, value: "200+", label: "Monthly Leads" },
      { icon: TrendingUp, value: "$150K+", label: "Cumulative Ad Spend" },
      { icon: Target, value: "3.8%", label: "ROAS on Avg" },
    ],
  },
];
