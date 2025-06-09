
import { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Screenshots = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Placeholder images - these will be replaced with actual game images
  const screenshots = [
    {
      id: 1,
      title: "Main Game Board",
      thumbnail: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Power-Up Selection",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Level Map",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Victory Screen",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Daily Challenges",
      thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Treasure Collection",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop"
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
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
            Screenshots
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take a peek at the colorful world of Match Treasures
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot) => (
            <div 
              key={screenshot.id}
              className="group cursor-pointer"
              onClick={() => openLightbox(screenshot)}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={screenshot.thumbnail}
                    alt={screenshot.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to enlarge
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white text-center">{screenshot.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Note */}
        <div className="mt-12 text-center">
          <p className="text-white/80 italic">
            💡 On mobile? Swipe through our screenshots for the best viewing experience!
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-lg rounded-full p-2 text-white hover:bg-white/30 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedImage.fullsize}
              alt={selectedImage.title}
              className="max-w-full max-h-full rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-4 rounded-b-2xl">
              <h3 className="text-xl font-semibold text-center">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Screenshots;
