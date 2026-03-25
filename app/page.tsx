import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Pricing } from "@/components/sections/Pricing";
import { Portfolio } from "@/components/sections/Portfolio";
import { BookCTA } from "@/components/sections/BookCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen" style={{ background: "#13213F", color: "#ffffff" }}>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Process />
        <About />
        <Pricing />
        <Portfolio />
        <BookCTA />
      </main>
      <Footer />
    </div>
  );
}
