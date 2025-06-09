
import { Link } from 'react-router-dom';
import { Download, Play, Star, Users, Trophy, Zap, Target, Gamepad2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen candy-gradient overflow-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float text-4xl">🍭</div>
        <div className="absolute top-40 right-20 animate-float text-3xl" style={{animationDelay: '1s'}}>💎</div>
        <div className="absolute bottom-40 left-20 animate-float text-4xl" style={{animationDelay: '2s'}}>🌟</div>
        <div className="absolute bottom-20 right-10 animate-float text-3xl" style={{animationDelay: '0.5s'}}>🍬</div>
        <div className="absolute top-1/2 left-1/4 animate-sparkle text-2xl" style={{animationDelay: '3s'}}>✨</div>
        <div className="absolute top-1/3 right-1/3 animate-sparkle text-2xl" style={{animationDelay: '1.5s'}}>✨</div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="text-center stagger-animation">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight sparkle-container animate-pulse-glow">
            <span className="text-candy">Match Treasures</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light animate-bounce-in">
            A candy-popping, brain-tingling match-3 adventure!
          </p>
          
          {/* Enhanced Hero Image */}
          <div className="max-w-md mx-auto mb-8">
            <div className="glass-card rounded-3xl p-8 mb-8 hover-lift">
              <div className="w-48 h-48 mx-auto treasure-gradient rounded-3xl flex items-center justify-center animate-pulse-glow hover:scale-110 transition-transform duration-300">
                <span className="text-6xl animate-float">🍭</span>
              </div>
            </div>
          </div>

          {/* Enhanced Download CTA */}
          <div className="mb-12">
            <p className="text-lg text-white/80 mb-4 animate-bounce-in">📲 Available now on Google Play</p>
            <a 
              href="#" 
              className="inline-flex items-center btn-candy text-white font-bold px-8 py-4 rounded-full text-xl hover:scale-105 transition-all duration-300 shadow-2xl animate-bounce-in"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Now
            </a>
          </div>
        </div>

        {/* Enhanced Quick Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="glass-card rounded-3xl p-8 hover-lift animate-bounce-in">
            <h2 className="text-3xl font-bold text-white mb-4 text-gradient">
              Discover a world of sugar, coins, and puzzles!
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Match Treasures is not just a game — it's your new addiction. With vibrant graphics, 
              tricky levels, and treasure-filled rewards, you'll never want to put it down.
            </p>
          </div>
        </div>

        {/* Enhanced Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 stagger-animation">
          <div className="glass-card rounded-2xl p-6 text-center hover-lift sparkle-container">
            <div className="text-6xl mb-4 animate-float">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">500+ Levels</h3>
            <p className="text-white/80">Handcrafted puzzles that get more challenging as you progress</p>
          </div>
          
          <div className="glass-card rounded-2xl p-6 text-center hover-lift sparkle-container">
            <div className="text-6xl mb-4 animate-float" style={{animationDelay: '1s'}}>💎</div>
            <h3 className="text-xl font-bold text-white mb-3">Epic Boosters</h3>
            <p className="text-white/80">Candy Blasters, Mystery Lollis, and explosive Chest Bombs</p>
          </div>
          
          <div className="glass-card rounded-2xl p-6 text-center hover-lift sparkle-container">
            <div className="text-6xl mb-4 animate-float" style={{animationDelay: '2s'}}>🌍</div>
            <h3 className="text-xl font-bold text-white mb-3">Magical Worlds</h3>
            <p className="text-white/80">Journey from Donut Desert to the mesmerizing Gummy Galaxy</p>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 stagger-animation">
          <div className="text-center glass-card rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold text-candy mb-2 animate-pulse-glow">500+</div>
            <p className="text-white/80">Levels</p>
          </div>
          <div className="text-center glass-card rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold text-candy mb-2 animate-pulse-glow">1M+</div>
            <p className="text-white/80">Downloads</p>
          </div>
          <div className="text-center glass-card rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold text-candy mb-2 animate-pulse-glow">4.8⭐</div>
          </div>
          <div className="text-center glass-card rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold text-candy mb-2 animate-pulse-glow">24/7</div>
            <p className="text-white/80">Support</p>
          </div>
        </div>

        {/* Enhanced Navigation Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 stagger-animation">
          <Link to="/features" className="glass-card rounded-2xl p-6 text-center hover-lift group sparkle-container">
            <Play className="w-12 h-12 text-yellow-300 mx-auto mb-3 group-hover:scale-125 transition-transform animate-float" />
            <h3 className="text-xl font-bold text-white mb-2">Game Features</h3>
            <p className="text-white/70">Discover what makes our game special</p>
          </Link>
          
          <Link to="/screenshots" className="glass-card rounded-2xl p-6 text-center hover-lift group sparkle-container">
            <Star className="w-12 h-12 text-yellow-300 mx-auto mb-3 group-hover:scale-125 transition-transform animate-float" style={{animationDelay: '1s'}} />
            <h3 className="text-xl font-bold text-white mb-2">Screenshots</h3>
            <p className="text-white/70">See the game in action</p>
          </Link>
          
          <Link to="/about" className="glass-card rounded-2xl p-6 text-center hover-lift group sparkle-container">
            <Users className="w-12 h-12 text-yellow-300 mx-auto mb-3 group-hover:scale-125 transition-transform animate-float" style={{animationDelay: '2s'}} />
            <h3 className="text-xl font-bold text-white mb-2">About Us</h3>
            <p className="text-white/70">Meet the team behind the magic</p>
          </Link>
        </div>

        {/* Enhanced Final CTA */}
        <div className="text-center treasure-gradient rounded-3xl p-8 glass-card hover-lift animate-bounce-in">
          <h2 className="text-4xl font-bold text-white mb-4 sparkle-container">
            "Start your journey – your treasure awaits!"
          </h2>
          <Link 
            to="/download"
            className="inline-flex items-center btn-candy text-white font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <Trophy className="w-6 h-6 mr-3" />
            Get it on Google Play
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
