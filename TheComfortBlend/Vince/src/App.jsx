import { useState, useEffect } from 'react';
import Header from './layouts/Header.jsx';
import Main from './layouts/Main.jsx';
import Footer from './layouts/Footer.jsx';
import Staffs from './components/Staffs.jsx';
import Products from './components/Products.jsx';


function Comfort() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <Header
        scrolled={scrolled}
        activeSection={activeSection}
        onNavigate={handleNavigation}
      />

      <Main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                THE COMFORT BLEND
              </h1>
              <p className="text-2xl text-gray-600 mb-12 font-light">
                Your one-stop cafe shop
              </p>
              <button
                onClick={() => handleNavigation('products')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Our Menu
              </button>
            </div>
          </div>
        </section>

        {/* About Us with Staffs Component */}
        <Staffs />

        {/* Products Component */}
        <Products />

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">📍</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">4324 Old Sta. Mesa, Manila</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🕒</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                      <p className="text-gray-600">Mon-Fri: 7am - 8pm</p>
                      <p className="text-gray-600">Sat-Sun: 8am - 9pm</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">📞</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+63 947 007 2345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">✉️</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">vincepalaming2108@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all resize-none"
                    ></textarea>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Main>

      <Footer />
    </div>
  );
}

export default Comfort;