
import { useState } from 'react';
import { ArrowLeft, Mail, MessageSquare, Send, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700">
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
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? Need support? Want to partner with us? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              <MessageSquare className="w-6 h-6 inline mr-3" />
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold py-4 rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 inline mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email Contacts */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                <Mail className="w-6 h-6 inline mr-3" />
                Email Us Directly
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-bold text-white mb-1">General Support</h4>
                  <a href="mailto:support@mustplaygames.com" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                    support@mustplaygames.com
                  </a>
                  <p className="text-white/70 text-sm mt-1">Bug reports, gameplay questions, technical issues</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-bold text-white mb-1">Business Inquiries</h4>
                  <a href="mailto:biz@mustplaygames.com" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                    biz@mustplaygames.com
                  </a>
                  <p className="text-white/70 text-sm mt-1">Partnerships, licensing, media requests</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors group">
                  <div className="text-2xl mb-2">📸</div>
                  <div className="text-white font-medium group-hover:text-yellow-300">Instagram</div>
                </a>
                
                <a href="#" className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors group">
                  <div className="text-2xl mb-2">𝕏</div>
                  <div className="text-white font-medium group-hover:text-yellow-300">Twitter</div>
                </a>
                
                <a href="#" className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors group">
                  <div className="text-2xl mb-2">📺</div>
                  <div className="text-white font-medium group-hover:text-yellow-300">YouTube</div>
                </a>
                
                <a href="#" className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors group">
                  <div className="text-2xl mb-2">🎮</div>
                  <div className="text-white font-medium group-hover:text-yellow-300">Discord</div>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 text-center">
              <h4 className="text-lg font-bold text-white mb-2">⚡ Quick Response</h4>
              <p className="text-white/80">We typically respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
