// lib/hooks/usePlans.ts

export interface Plan {
  name: string;
  category: string;
  slug: string;
  price: number;
  feature: string[];
  featured?: boolean;
}

const plansData: Record<string, Plan[]> = {
  "bug-fixing": [
    {
      name: "Bug Fixing Basic",
      category: "bug-fixing",
      slug: "bug-fixing-basic",
      price: 49,
      feature: [
        "Up to 7 bug fixes per month",
        "Basic troubleshooting (response within 24 hours)",
        "Monthly report on issues resolved",
        "Basic performance check",
        "1 minor feature update"
      ]
    },
    {
      name: "Bug Fixing Standard",
      category: "bug-fixing",
      slug: "bug-fixing-standard",
      price: 69,
      feature: [
        "Up to 15 bug fixes per month",
        "Priority troubleshooting (response within 12 hours)",
        "Monthly report with insights on recurring issues",
        "Minor code optimizations (up to 2 hours)",
        "Website Health Check (quarterly)",
        "1 Major Feature Update (up to 3 hours)"
      ],
      featured: true
    },
    {
      name: "Bug Fixing Premium",
      category: "bug-fixing",
      slug: "bug-fixing-premium",
      price: 89,
      feature: [
        "Unlimited bug fixes per month",
        "24/7 troubleshooting support",
        "Minor code optimizations (up to 3 hours)",
        "Monthly strategy session",
        "Website Health Check (monthly)",
        "2 Major Feature Updates (up to 6 hours)",
        "Performance Optimization Report"
      ]
    }
  ],
};

export function getPlansByCategory(category: string) {
  return plansData[category] || [];
}
