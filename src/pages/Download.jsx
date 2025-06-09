
import { ArrowLeft, Download, Smartphone, CreditCard, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DownloadPage = () => {
  const faqs = [
    {
      question: "Is Match Treasures free to play?",
      answer: "Yes! Match Treasures is free to download and play. Optional in-app purchases are available for boosters and extra lives."
    },
    {
      question: "What devices are supported?",
      answer: "Match Treasures works on Android 5.0+ and iOS 12+. Most modern smartphones and tablets are fully supported."
    },
    {
      question: "Do I need internet to play?",
      answer: "Most levels can be played offline, but some features like daily challenges and leaderboards require an internet connection."
    },
    {
      question: "Can I sync my progress across devices?",
      answer: "Yes! Connect to your Google Play Games or Game Center account to sync progress across all your devices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-blue-600 to-purple-700">
      {/* Navigation */}
      <nav className="p-4">
        <Link to="/" className="inline-flex items-center text-white hover:text-yellow-300 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </nav>

      {/* Hero Banner */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ready to Join the<br />Treasure Hunt?
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Download Match Treasures now and start your epic puzzle adventure!
          </p>
          
          {/* Main Download Button */}
          <div className="mb-8">
            <a 
              href="#" 
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-12 py-6 rounded-full text-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Download className="w-6 h-6 mr-3" />
              Get it on Google Play
            </a>
          </div>
          
          <p className="text-white/70">Available now • Free to play</p>
        </div>

        {/* Device Compatibility */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            <Smartphone className="w-8 h-8 inline mr-3" />
            Device Compatibility
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-2">Android</h3>
              <p className="text-white/80">Android 5.0 (API level 21) or higher</p>
              <p className="text-white/60 text-sm mt-2">Optimized for phones and tablets</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-bold text-white mb-2">iOS (Coming Soon)</h3>
              <p className="text-white/80">iOS 12.0 or later</p>
              <p className="text-white/60 text-sm mt-2">iPhone, iPad, and iPod touch</p>
            </div>
          </div>
        </div>

        {/* In-App Purchase Info */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            <CreditCard className="w-8 h-8 inline mr-3" />
            In-App Purchases
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/90 text-center mb-6">
              Match Treasures is free to play! Optional purchases can enhance your experience:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🍭</div>
                <h4 className="font-bold text-white">Boosters</h4>
                <p className="text-sm text-white/70">$0.99 - $4.99</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">💝</div>
                <h4 className="font-bold text-white">Extra Lives</h4>
                <p className="text-sm text-white/70">$0.99 - $2.99</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🎁</div>
                <h4 className="font-bold text-white">Value Packs</h4>
                <p className="text-sm text-white/70">$2.99 - $9.99</p>
              </div>
            </div>
            <p className="text-xs text-white/60 text-center mt-4">
              Purchases are optional and can be disabled in your device settings
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            <HelpCircle className="w-8 h-8 inline mr-3" />
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-white/80">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-white/80 mb-4">Need more help?</p>
            <Link 
              to="/contact"
              className="inline-block bg-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/30 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
