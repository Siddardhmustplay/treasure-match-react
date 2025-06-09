
import { ArrowLeft, Heart, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-purple-800 to-indigo-900">
      {/* Navigation */}
      <nav className="p-4">
        <Link to="/" className="inline-flex items-center text-white hover:text-yellow-300 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Meet the creative minds behind Match Treasures
          </p>
        </div>

        {/* Studio Message */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-6">Must Play Games</h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              We're Must Play Games — an indie studio with AAA ambitions. 
              Based in Hyderabad, India, we blend imagination with technology to create 
              award-winning mobile and VR experiences. Since 2014, we've brought joy to 
              millions across the globe — and we're just getting started.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-yellow-400 text-purple-800 px-6 py-3 rounded-full font-bold text-lg">
              🏆 Since 2014 • Millions of Players Worldwide
            </div>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <div className="text-yellow-300 mb-4 flex justify-center">
              <Heart className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-white/80">
              "To create games that make people smile, think, and come back for more."
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <div className="text-yellow-300 mb-4 flex justify-center">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Culture</h3>
            <p className="text-white/80">
              Passionate people. Bold ideas. Meaningful play.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <div className="text-yellow-300 mb-4 flex justify-center">
              <Globe className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Reach</h3>
            <p className="text-white/80">
              From Hyderabad to the world - touching lives across continents.
            </p>
          </div>
        </div>

        {/* Location & Team */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">🇮🇳 Based in Hyderabad, India</h2>
          <p className="text-lg text-white/90 mb-6">
            Where ancient heritage meets cutting-edge technology, our team crafts experiences 
            that resonate with players worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full">Mobile Games</span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full">VR Experiences</span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full">Puzzle Games</span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full">Adventure</span>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Want to Work With Us?</h3>
          <Link 
            to="/contact"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold px-8 py-4 rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
