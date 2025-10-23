import { AppBar } from "@/components/landing/src/AppBar";
import { HeroMessage } from "@/components/landing/src/HeroMessage";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { EssentialSection } from "@/components/landing/src/EssentialSection";
import { FAQ } from "@/components/landing/src/FAQ";
import { Footer } from "@/components/landing/src/Footer";
import { Services } from "@/components/landing/src/Pricing";
import { Testimonials } from "@/components/landing/src/Testimonials";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Choose from "./src/choose";

export default function Landing() {
  return (
    <>
      <AppBar />
      <ContainerScroll>
        <img src="./dashboard-ex.jpg" alt="" />
      </ContainerScroll>
      <HeroMessage />
      <EssentialSection />
      <Choose />
      <Services />
      <Testimonials />
      <FAQ />
      <div className="h-[40rem] flex items-center justify-center">
        <TextHoverEffect text="ADVONA" />
      </div>
      <Footer />
    </>
  );
}
