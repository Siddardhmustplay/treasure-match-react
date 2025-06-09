
import { Link } from 'react-router-dom';
import { Download, Play, Star, Users, Trophy } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Match Treasures
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
            A candy-popping, brain-tingling match-3 adventure!
          </p>
          
          {/* Hero Image Placeholder */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 mb-8">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center">
                <span className="text-4xl">🍭</span>
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <div className="mb-12">
            <p className="text-lg text-white/80 mb-4">📲 Available now on Google Play</p>
            <a 
              href="#" 
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-8 py-4 rounded-full text-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Now
            </a>
          </div>
        </div>

        {/* Quick Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Discover a world of sugar, coins, and puzzles!
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Match Treasures is not just a game — it's your new addiction. With vibrant graphics, 
              tricky levels, and treasure-filled rewards, you'll never want to put it down.
            </p>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">500+ Levels</h3>
            <p className="text-white/80">Handcrafted puzzles that get more challenging as you progress</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-xl font-bold text-white mb-3">Epic Boosters</h3>
            <p className="text-white/80">Candy Blasters, Mystery Lollis, and explosive Chest Bombs</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-white mb-3">Magical Worlds</h3>
            <p className="text-white/80">Journey from Donut Desert to the mesmerizing Gummy Galaxy</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
            <p className="text-white/80">Levels</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">1M+</div>
            <p className="text-white/80">Downloads</p>
          </div>
          <div className="text-3xl font-bold text-yellow-300 mb-2 text-center">4.8⭐</div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
            <p className="text-white/80">Support</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Link to="/features" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <Play className="w-8 h-8 text-yellow-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-2">Game Features</h3>
            <p className="text-white/70">Discover what makes our game special</p>
          </Link>
          
          <Link to="/screenshots" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-2">Screenshots</h3>
            <p className="text-white/70">See the game in action</p>
          </Link>
          
          <Link to="/about" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <Users className="w-8 h-8 text-yellow-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-2">About Us</h3>
            <p className="text-white/70">Meet the team behind the magic</p>
          </Link>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            "Start your journey – your treasure awaits!"
          </h2>
          <Link 
            to="/download"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-8 py-4 rounded-full text-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105"
          >
            <Trophy className="w-5 h-5 mr-3" />
            Get it on Google Play
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
