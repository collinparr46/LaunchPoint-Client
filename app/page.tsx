import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Services } from "@/components/sections/Services";
import { BookCTA } from "@/components/sections/BookCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <BookCTA />
    </>
  );
}
