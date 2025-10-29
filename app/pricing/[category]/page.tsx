"use client"
import { getPlansByCategory } from "@/lib/hooks/useplans";
import { useParams } from "next/navigation";
import { Check } from "lucide-react";
import GettingStarted from "@/components/ui/GettingStarted";

const categoryDisplayNames: Record<string, string> = {
  "web-design": "Web design",
  "minimum-viable-product": "Minimum Viable Product",
  "core-paid-marketing": "Core Paid Maketing",
  "email-outreach": "Email Outreach",
  "user-generated-content": "User Generated Content",
  "high-end-strategic-services":"High End Strategic Services"
};

export default function Pricing() {
  const params = useParams();
  const category = (params?.category as string) || "web-design";
  const plans = getPlansByCategory(category);

  return (
    <main className="min-h-screen relative text-white bg-no-repeat bg-center bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.15)_0%,_rgba(255,255,255,0.08)_10%,_rgba(0,0,0,0)_60%)] bg-[length:60%_100%]">
      <div className="container mx-auto pt-28 md:pt-24 lg:pt-32 pb-16 px-4">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none text-transparent bg-gradient-to-b from-gray-300 to-gray-600 bg-clip-text tracking-tighter">
            {categoryDisplayNames[category] || "Plan"}
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/65">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-2xl ${
                plan?.featured
                  ? "bg-gradient-to-b from-white/15 to-black border-white/50"
                  : "bg-white/5 border-white/10"
              } backdrop-blur-xl border p-6 md:p-8 overflow-hidden group hover:border-white/50 transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="relative">
                <h3 className="text-sm text-gray-400 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <div className="text-3xl md:text-4xl font-bold mb-6">
                    ${plan.price}
                  </div>
                </div>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.feature.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-300"
                    >
                      <Check className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-white" />
                      {feature}
                    </li>
                  ))}
                </ul>
                 <GettingStarted
                  category={category}
                  plan={plan.name?.toLowerCase() || "bug-fixing"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
