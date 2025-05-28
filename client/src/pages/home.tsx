import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import CampaignStats from "@/components/campaign-stats";
import Campaigns from "@/components/campaigns";
import ImpactStories from "@/components/impact-stories";
import ContactForm from "@/components/contact-form";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import DonationModal from "@/components/donation-modal";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CampaignStats />
      <Campaigns />
      <ImpactStories />
      <ContactForm />
      <Newsletter />
      <Footer />
      <DonationModal />
    </div>
  );
}
