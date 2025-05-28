export default function CampaignStats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="fade-in">
            <div className="text-4xl font-bold text-hope-blue">15,420</div>
            <div className="text-gray-600 mt-2">People Helped</div>
          </div>
          <div className="fade-in">
            <div className="text-4xl font-bold text-hope-green">89,340</div>
            <div className="text-gray-600 mt-2">Meals Provided</div>
          </div>
          <div className="fade-in">
            <div className="text-4xl font-bold text-hope-purple">2,150</div>
            <div className="text-gray-600 mt-2">Women Empowered</div>
          </div>
          <div className="fade-in">
            <div className="text-4xl font-bold text-hope-red">850</div>
            <div className="text-gray-600 mt-2">Treatments Supported</div>
          </div>
        </div>
      </div>
    </section>
  );
}
