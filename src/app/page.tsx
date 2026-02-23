import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TrustBar from "@/components/TrustBar";
import Intelligence from "@/components/Intelligence";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import InquiryForm from "@/components/InquiryForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <TrustBar />
      <Intelligence />
      <HowItWorks />
      <Solutions />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <InquiryForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
