
import { useState } from 'react';
import { ArrowLeft, Zap, Target, Map, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Intuitive Controls",
      description: "Drag-and-match controls so smooth, even your grandma can master them!"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Power-Up Arsenal",
      description: "Candy Blasters, Mystery Lollis, and Chest Bombs - your secret weapons!"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "500+ Levels",
      description: "Handcrafted puzzles that get trickier as you climb the treasure ladder"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Magical Realms",
      description: "Journey from Donut Desert to Gummy Galaxy - each more delicious than the last"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
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
            Game Features
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover what makes Match Treasures the most addictive puzzle adventure on mobile
          </p>
        </div>

        {/* Core Mechanics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">🎯 Core Mechanics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-yellow-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Power-Ups Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-6">⚙️ Strategic Power-Ups</h2>
          <div className="text-center">
            <p className="text-lg text-white/90 mb-6">
              Use strategic boosters to crack the toughest puzzles. Whether it's a swirl bomb or a row buster — victory is just a pop away.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full font-semibold">🍭 Candy Blasters</span>
              <span className="bg-pink-400 text-purple-800 px-4 py-2 rounded-full font-semibold">🎯 Mystery Lollis</span>
              <span className="bg-orange-400 text-purple-800 px-4 py-2 rounded-full font-semibold">💣 Chest Bombs</span>
            </div>
          </div>
        </div>

        {/* Map Progression */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">🌎 Epic Journey</h2>
          <p className="text-lg text-white/90 mb-8">
            Travel through magical candy realms — from Donut Desert to Gummy Galaxy.
          </p>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 inline-block">
            <div className="text-4xl mb-4">🍩 ➡️ 🍬 ➡️ 🌌</div>
            <p className="text-white font-semibold">Donut Desert → Candy Kingdom → Gummy Galaxy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
