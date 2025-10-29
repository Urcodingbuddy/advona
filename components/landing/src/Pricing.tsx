import {
  ArrowRight,
   Rocket,
  Megaphone,
  Mail,
  Users,
  Target,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Minimum Viable Product",
    link: "/pricing/minimum-viable-product",
    description:
      "Launch your first version faster with our MVP development service — built to validate your idea and attract early users.",
    icon: Rocket,
  },
  {
    title: "Core Paid Marketing",
    link: "/pricing/core-paid-marketing",
    description:
      "Accelerate growth with performance-driven advertising across major platforms to maximize ROI and conversions.",
    icon: Megaphone,
  },
  {
    title: "Email Outreach",
    link: "/pricing/email-outreach",
    description:
      "Build and nurture relationships with personalized email campaigns that drive engagement and sales.",
    icon: Mail,
  },
  {
    title: "User Generated Content",
    link: "/pricing/user-generated-content",
    description:
      "Leverage authentic customer content to increase trust, engagement, and organic brand growth.",
    icon: Users,
  },
  {
    title: "High-End Strategic Services",
    link: "/pricing/high-end-strategic-services",
    description:
      "Get top-tier consulting and strategic insights to scale your business and outperform competitors.",
    icon: Target,
  },
];

export const Services = () => {
  return (
    <main className="bg-[#0c0c0c] text-white mt-32" id="services_sec">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto w-full">
        <div className="mb-20 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Services
          </h1>
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 text-sm sm:text-md md:text-lg lg:text-xl font-medium  mx-auto">
            We provide comprehensive digital solutions to help your business
            thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group border-2 border-white/10 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:border-white/30 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="mb-6 inline-block p-4 bg-white/5 rounded-2xl">
                  <service.icon className="w-6 h-6" />
                </div>

                <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                <p className="text-sm text-gray-400 mb-6">
                  {service.description}
                </p>
                <Link href={service.link}>
                  <button className="flex items-center text-sm font-medium cursor-pointer text-white/70 hover:text-white transition-colors duration-200">
                    View <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
