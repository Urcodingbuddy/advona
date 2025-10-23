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
  "minimum-viable-product": [
    {
      name: "MVP Basic",
      category: "mvp",
      slug: "mvp-basic",
      price: 99,
      feature: [
        "3–4 functional screens",
        "Static front-end prototype",
        "1 feedback and revision loop"
      ]
    },
    {
      name: "MVP Standard",
      category: "mvp",
      slug: "mvp-standard",
      price: 179,
      feature: [
        "Working MVP: authentication, database, CRUD operations",
        "Deployment and documentation",
        "Free hosting setup",
        "1-month support"
      ],
      featured: true
    },
    {
      name: "MVP Premium",
      category: "mvp",
      slug: "mvp-premium",
      price: 299,
      feature: [
        "Real-time features (chat, analytics)",
        "Stripe or PayPal integration",
        "Scaling-ready backend",
        "3-month support"
      ]
    }
  ],

  "web-design": [
    {
      name: "Web Design Basic",
      category: "web-design",
      slug: "web-design-basic",
      price: 79,
      feature: [
        "Up to 2 pages (Home + About/Contact)",
        "Responsive design",
        "Custom color palette",
        "Basic SEO setup"
      ]
    },
    {
      name: "Web Design Standard",
      category: "web-design",
      slug: "web-design-standard",
      price: 149,
      feature: [
        "5-page modern website",
        "Brand-aligned UI/UX",
        "Forms and contact integrations",
        "2 design revisions"
      ],
      featured: true
    },
    {
      name: "Web Design Premium",
      category: "web-design",
      slug: "web-design-premium",
      price: 299,
      feature: [
        "10+ pages",
        "CMS, blog or shop integration",
        "Animations and micro-interactions",
        "SEO and performance optimization"
      ]
    }
  ],

  "core-paid-marketing": [
    {
      name: "Core Paid Marketing Basic",
      category: "core-paid-marketing",
      slug: "core-paid-marketing-basic",
      price: 99,
      feature: [
        "1 campaign on Facebook or Google",
        "Audience research",
        "Ad copy and 1 creative variation",
        "7-day performance report"
      ]
    },
    {
      name: "Core Paid Marketing Standard",
      category: "core-paid-marketing",
      slug: "core-paid-marketing-standard",
      price: 179,
      feature: [
        "Multi-platform ads: Facebook, Instagram, Google",
        "A/B testing with 2–3 creatives",
        "Retargeting setup",
        "Conversion tracking and insights"
      ],
      featured: true
    },
    {
      name: "Core Paid Marketing Premium",
      category: "core-paid-marketing",
      slug: "core-paid-marketing-premium",
      price: 299,
      feature: [
        "Full funnel design",
        "Landing page optimization",
        "Weekly strategy sessions",
        "Pixel and Conversion API setup"
      ]
    }
  ],

  "email-outreach": [
    {
      name: "Email Outreach Basic",
      category: "email-outreach",
      slug: "email-outreach-basic",
      price: 59,
      feature: [
        "Up to 500 emails per month",
        "2 email templates",
        "Sender reputation setup"
      ]
    },
    {
      name: "Email Outreach Standard",
      category: "email-outreach",
      slug: "email-outreach-standard",
      price: 99,
      feature: [
        "1000+ emails per month",
        "2 follow-up automations",
        "3 optimized templates",
        "Analytics dashboard"
      ],
      featured: true
    },
    {
      name: "Email Outreach Premium",
      category: "email-outreach",
      slug: "email-outreach-premium",
      price: 199,
      feature: [
        "2000+ emails per month",
        "AI-assisted copywriting",
        "CRM integration",
        "Weekly optimization call"
      ]
    }
  ],

  "user-generated-content": [
    {
      name: "UGC Basic",
      category: "ugc",
      slug: "ugc-basic",
      price: 79,
      feature: [
        "3 short-form videos",
        "Editing and basic captions",
        "Vertical format delivery"
      ]
    },
    {
      name: "UGC Standard",
      category: "ugc",
      slug: "ugc-standard",
      price: 149,
      feature: [
        "6 videos per month",
        "Includes 1 micro-ad campaign (Facebook or Instagram)",
        "Scriptwriting + trending format research",
        "Brand color + style alignment",
        "Performance tracking dashboard"
      ],
      featured: true
    },
    {
      name: "UGC Premium",
      category: "ugc",
      slug: "ugc-premium",
      price: 299,
      feature: [
        "10+ UGC-style influencer videos",
        "Voiceovers, effects, transitions",
        "Includes full ad distribution across Facebook + Instagram (basic retargeting + optimization)",
        "Platform-optimized exports (YouTube Shorts, Reels, TikTok, etc.)",
        "1× strategy call for next campaign"
      ]
    }
  ],

  "high-end-strategic-services": [
    {
      name: "Strategic Services Basic",
      category: "high-end-strategic-services",
      slug: "strategic-services-basic",
      price: 129,
      feature: [
        "1 growth consultation call",
        "Market and competitor analysis",
        "Simple brand roadmap"
      ]
    },
    {
      name: "Strategic Services Standard",
      category: "high-end-strategic-services",
      slug: "strategic-services-standard",
      price: 199,
      feature: [
        "3 strategy calls per month",
        "Funnel creation and content calendar",
        "Monthly progress report"
      ],
      featured: true
    },
    {
      name: "Strategic Services Premium",
      category: "high-end-strategic-services",
      slug: "strategic-services-premium",
      price: 399,
      feature: [
        "Dedicated strategist",
        "90-day brand scale roadmap",
        "Team sync and analytics dashboard",
        "Bi-weekly updates"
      ]
    }
  ]
};

export function getPlansByCategory(category: string) {
  return plansData[category] || [];
}
