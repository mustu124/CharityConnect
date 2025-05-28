import { Quote } from "lucide-react";

export default function ImpactStories() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Stories of Hope</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed through your generosity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Story 1 */}
          <div className="bg-gray-50 rounded-2xl p-8 fade-in">
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Happy family sharing meal" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <div className="flex items-center mb-4">
              <Quote className="text-hope-green text-2xl mr-3" />
              <span className="font-semibold text-gray-900">Maria's Story</span>
            </div>
            <p className="text-gray-600 mb-4 italic">
              "Thanks to the food program, my children never go to bed hungry anymore. 
              The support has allowed me to focus on finding steady work."
            </p>
            <div className="text-sm text-hope-green font-medium">Food Hunger Campaign Beneficiary</div>
          </div>

          {/* Story 2 */}
          <div className="bg-gray-50 rounded-2xl p-8 fade-in">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Woman entrepreneur" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <div className="flex items-center mb-4">
              <Quote className="text-hope-purple text-2xl mr-3" />
              <span className="font-semibold text-gray-900">Priya's Journey</span>
            </div>
            <p className="text-gray-600 mb-4 italic">
              "The vocational training program changed my life. I now run my own tailoring business 
              and support my family independently."
            </p>
            <div className="text-sm text-hope-purple font-medium">Women Empowerment Program Graduate</div>
          </div>

          {/* Story 3 */}
          <div className="bg-gray-50 rounded-2xl p-8 fade-in">
            <img 
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Cancer survivor with family" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <div className="flex items-center mb-4">
              <Quote className="text-hope-red text-2xl mr-3" />
              <span className="font-semibold text-gray-900">David's Recovery</span>
            </div>
            <p className="text-gray-600 mb-4 italic">
              "When I couldn't afford treatment, Hope Foundation stepped in. 
              Today, I'm cancer-free and back with my family."
            </p>
            <div className="text-sm text-hope-red font-medium">Cancer Treatment Support Recipient</div>
          </div>
        </div>
      </div>
    </section>
  );
}
