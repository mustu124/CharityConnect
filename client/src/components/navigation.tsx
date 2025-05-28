import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openDonationModal = () => {
    const event = new CustomEvent('openDonationModal');
    window.dispatchEvent(event);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="text-hope-blue text-2xl" />
            <span className="text-xl font-bold text-gray-900">Hope Foundation</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-hope-blue transition-colors">Home</a>
            <a href="#campaigns" className="text-gray-700 hover:text-hope-blue transition-colors">Campaigns</a>
            <a href="#impact" className="text-gray-700 hover:text-hope-blue transition-colors">Impact</a>
            <a href="#contact" className="text-gray-700 hover:text-hope-blue transition-colors">Contact</a>
            <Button 
              onClick={openDonationModal}
              className="bg-hope-orange text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium"
            >
              Donate Now
            </Button>
          </div>
          
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="text-gray-700 text-xl" /> : <Menu className="text-gray-700 text-xl" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block text-gray-700" onClick={toggleMobileMenu}>Home</a>
            <a href="#campaigns" className="block text-gray-700" onClick={toggleMobileMenu}>Campaigns</a>
            <a href="#impact" className="block text-gray-700" onClick={toggleMobileMenu}>Impact</a>
            <a href="#contact" className="block text-gray-700" onClick={toggleMobileMenu}>Contact</a>
            <Button 
              onClick={() => {
                openDonationModal();
                toggleMobileMenu();
              }}
              className="w-full bg-hope-orange text-white py-2 rounded-full"
            >
              Donate Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
