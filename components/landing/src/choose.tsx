import { Rocket, Target, Zap } from "lucide-react";

export default function Choose() {
  return (
    <>
      <section id="services" className="relative py-32 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                Why Choose Advona
              </span>
            </h2>
            <p className="text-gray-300/60 text-lg md:text-xl max-w-2xl mx-auto">
              We combine strategy, technology, and creativity to <br/> deliver
              exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Fast Execution",
                description:
                  "Launch faster with our streamlined processes and expert team ready to accelerate your vision.",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Strategic Focus",
                description:
                  "Every decision is data-driven and aligned with your business goals for maximum impact.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Scalable Solutions",
                description:
                  "Build for today, scale for tomorrow with infrastructure designed to grow with your success.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-[#0a0a0a] to-black border border-gray-800/50 hover:border-gray-500/60 transition-all duration-500 hover:scale-105"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0)] hover:border-white transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg white/50 border-gray-300/80 group-hover:white/80">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-300/90 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
