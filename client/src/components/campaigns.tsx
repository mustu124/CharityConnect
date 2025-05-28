import { Utensils, Users, Ribbon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Campaigns() {
  const openDonationModal = (campaign?: string) => {
    const event = new CustomEvent('openDonationModal', { detail: { campaign } });
    window.dispatchEvent(event);
  };

  return (
    <section id="campaigns" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Active Campaigns</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a cause close to your heart and make a lasting impact. Every donation, no matter the size, 
            helps us reach our goals and change lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Food Hunger Campaign */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover fade-in">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Children receiving nutritious meals" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Utensils className="text-hope-green text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Fight Food Hunger</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Help us provide nutritious meals to families in need. Your donation can feed a family 
                for days and support local food distribution programs in underserved communities.
              </p>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Goal Progress</span>
                  <span className="text-sm font-medium text-hope-green">78% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-hope-green h-3 rounded-full progress-bar" style={{width: '78%'}}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>₹78,000 raised</span>
                  <span>₹100,000 goal</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-hope-green">15,640</div>
                  <div className="text-sm text-gray-600">Meals Served</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-hope-green">2,890</div>
                  <div className="text-sm text-gray-600">Families Fed</div>
                </div>
              </div>

              <Button 
                onClick={() => openDonationModal('food')}
                className="w-full bg-hope-green text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Support This Cause
              </Button>
            </div>
          </div>

          {/* Women Empowerment Campaign */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover fade-in">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Women in empowerment program" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Users className="text-hope-purple text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Women Empowerment</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Support programs that provide education, vocational training, and microfinance opportunities 
                to help women become financially independent and leaders in their communities.
              </p>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Goal Progress</span>
                  <span className="text-sm font-medium text-hope-purple">65% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-hope-purple h-3 rounded-full progress-bar" style={{width: '65%'}}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>₹65,000 raised</span>
                  <span>₹100,000 goal</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-hope-purple">1,240</div>
                  <div className="text-sm text-gray-600">Women Trained</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-hope-purple">180</div>
                  <div className="text-sm text-gray-600">Businesses Started</div>
                </div>
              </div>

              <Button 
                onClick={() => openDonationModal('women')}
                className="w-full bg-hope-purple text-white py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors"
              >
                Support This Cause
              </Button>
            </div>
          </div>

          {/* Cancer Treatment Campaign */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover fade-in">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Cancer treatment support" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Ribbon className="text-hope-red text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Cancer Treatment Support</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Help patients access life-saving cancer treatments. Your contribution covers medical expenses, 
                medications, and supportive care for those who cannot afford treatment.
              </p>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Goal Progress</span>
                  <span className="text-sm font-medium text-hope-red">42% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-hope-red h-3 rounded-full progress-bar" style={{width: '42%'}}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>₹84,000 raised</span>
                  <span>₹200,000 goal</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-hope-red">420</div>
                  <div className="text-sm text-gray-600">Patients Helped</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-hope-red">850</div>
                  <div className="text-sm text-gray-600">Treatments Funded</div>
                </div>
              </div>

              <Button 
                onClick={() => openDonationModal('cancer')}
                className="w-full bg-hope-red text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
              >
                Support This Cause
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
