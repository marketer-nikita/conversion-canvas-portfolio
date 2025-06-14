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
    role: "Performance Marketing Specialist",
    company: "DigitalGrowth Agency",
    period: "2023 - Present",
    location: "Remote",
    description:
      "Leading performance marketing campaigns for B2B and B2C clients across multiple industries.",
    achievements: [
      "Increased client ROI by 40% through advanced campaign optimization",
      "Managed $500K+ in monthly ad spend across Google and Meta platforms",
      "Developed automated bidding strategies reducing CPA by 25%",
      "Created comprehensive reporting dashboards for client transparency",
    ],
    metrics: [
      { icon: TrendingUp, value: "40%", label: "ROI Increase" },
      { icon: DollarSign, value: "$500K+", label: "Monthly Spend" },
      { icon: Target, value: "25%", label: "CPA Reduction" },
    ],
  },
  {
    role: "Digital Marketing Associate",
    company: "TechStart Solutions",
    period: "2022 - 2023",
    location: "New York, NY",
    description:
      "Focused on Google Ads management and lead generation for fintech and healthcare clients.",
    achievements: [
      "Generated 200+ qualified leads monthly for B2B clients",
      "Achieved 3.5x ROAS on Google Ads campaigns",
      "Implemented conversion tracking and attribution modeling",
      "Collaborated with sales teams to optimize lead quality",
    ],
    metrics: [
      { icon: Users, value: "200+", label: "Monthly Leads" },
      { icon: TrendingUp, value: "3.5x", label: "ROAS" },
      { icon: Target, value: "95%", label: "Quality Score" },
    ],
  },
];
