import { ArrowDown } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const PunchLine = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll button bounce
    if (scrollButtonRef.current) {
      gsap.to(scrollButtonRef.current.querySelector("svg"), {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Background animation
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { backgroundPosition: "0% 0%" },
        {
          backgroundPosition: "100% 100%",
          duration: 15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    }

    // Optional: headline scroll parallax
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        // This can be removed if parallax isn't needed
        const headline = containerRef.current?.querySelector("h1");
        if (headline) {
          gsap.to(headline, {
            y: self.progress * 100,
            ease: "none",
            duration: 0.1,
          });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative pt-16 gap-5 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-48 flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 mx-auto min-h-[80vh] md:min-h-[90vh] bg-[#0c0c0c] bg-[#0c0c0c] "
    >
      <div className="relative w-full">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-left md:text-center max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto pt-12 sm:pt-8 md:pt-6 pb-4 sm:pb-6 md:pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
        >
          Igniting Growth, Engineering Impact. <br />{" "}
          <span className="bg-[#71d5f0db] bg-clip-text text-transparent animate-pulse">
            Redefining What’s Possible
          </span>
        </motion.h1>
      </div>

      <div className="flex flex-col items-center relative z-10 w-full">
        <motion.p
          className="text-zinc-400 text-sm sm:text-base md:text-lg font-medium text-left md:text-center leading-relaxed max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mb-6 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
        >
          Say goodbye to chaotic launches and scattered strategies. Advona
          builds, markets, and scales your product into a brand that thrives.
          Focused. Fast. Scalable. Effortless. Strategic. And built to win.
        </motion.p>

        <motion.div
          ref={scrollButtonRef}
          className="h-24 flex flex-col items-center justify-center group cursor-pointer mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <motion.p
            className="text-sm sm:text-base font-semibold text-zinc-400 group-hover:text-zinc-200"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          >
            Learn More
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          >
            <ArrowDown className="text-white h-5 w-5 mt-1 sm:mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
