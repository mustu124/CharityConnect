import { useState, useEffect } from "react";
import { X, Heart, QrCode, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import qrCodeImage from "@assets/WhatsApp Image 2025-05-28 at 14.29.14_08c4db39_1748431267014.jpg";

export default function DonationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState("");

  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      const campaign = event.detail?.campaign || "";
      setSelectedCampaign(campaign);
      setIsOpen(true);
      setShowQR(false);
      setSelectedAmount(null);
      setCustomAmount("");
    };

    window.addEventListener('openDonationModal', handleOpenModal as EventListener);
    
    return () => {
      window.removeEventListener('openDonationModal', handleOpenModal as EventListener);
    };
  }, []);

  const campaigns = {
    food: { name: 'Fight Food Hunger', color: 'green' },
    women: { name: 'Women Empowerment', color: 'purple' },
    cancer: { name: 'Cancer Treatment Support', color: 'red' }
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleShowQR = () => {
    setShowQR(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowQR(false);
    setSelectedAmount(null);
    setCustomAmount("");
    setSelectedCampaign("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md w-full p-8">
        <DialogHeader>
          <DialogTitle className="text-center">
            <Heart className="text-hope-blue text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCampaign && campaigns[selectedCampaign as keyof typeof campaigns] 
                ? `Support ${campaigns[selectedCampaign as keyof typeof campaigns].name}`
                : "Make a Donation"
              }
            </h3>
            <p className="text-gray-600 font-normal">Every contribution makes a difference</p>
          </DialogTitle>
        </DialogHeader>

        {!showQR ? (
          <div className="space-y-6">
            {/* Suggested Amounts */}
            <div className="grid grid-cols-3 gap-4">
              <Button
                variant={selectedAmount === 500 ? "default" : "outline"}
                onClick={() => handleAmountSelect(500)}
                className="flex flex-col py-6 h-auto"
              >
                <div className="font-semibold">₹500</div>
                <div className="text-xs text-muted-foreground">Feed 5 families</div>
              </Button>
              <Button
                variant={selectedAmount === 1000 ? "default" : "outline"}
                onClick={() => handleAmountSelect(1000)}
                className="flex flex-col py-6 h-auto"
              >
                <div className="font-semibold">₹1,000</div>
                <div className="text-xs text-muted-foreground">Support training</div>
              </Button>
              <Button
                variant={selectedAmount === 2000 ? "default" : "outline"}
                onClick={() => handleAmountSelect(2000)}
                className="flex flex-col py-6 h-auto"
              >
                <div className="font-semibold">₹2,000</div>
                <div className="text-xs text-muted-foreground">Medical aid</div>
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Custom Amount (₹)</label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
              />
            </div>

            <Button 
              onClick={handleShowQR}
              className="w-full bg-hope-blue text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <QrCode className="mr-2" />
              Show QR Code for Payment
            </Button>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <img 
                src={qrCodeImage}
                alt="QR Code for donation payment" 
                className="w-48 h-48 mx-auto mb-4 rounded-lg"
              />
              <p className="text-sm text-gray-600 mb-2">
                <strong>Scan to pay with any UPI app</strong>
              </p>
              <p className="text-xs text-gray-500">
                After payment, send a screenshot to verify your donation
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Or contact us at: <strong>contact@hopefoundation.org</strong>
              </p>
              <Button 
                onClick={handleClose}
                className="bg-hope-green text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                <Check className="mr-2" />
                Done
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
