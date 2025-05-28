import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const openDonationModal = () => {
    const event = new CustomEvent('openDonationModal');
    window.dispatchEvent(event);
  };

  return (
    <section id="home" className="pt-16 gradient-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Together We Can
              <span className="block text-yellow-300">Change Lives</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Join our mission to fight hunger, empower women, and support cancer treatment. 
              Every contribution makes a real difference in someone's life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={openDonationModal}
                className="bg-hope-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105"
              >
                <Heart className="mr-2" />
                Donate Now
              </Button>
              <a 
                href="#campaigns" 
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-hope-blue transition-all text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Volunteers helping at charity event" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
