import { Coffee, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8" />
              <span className="font-semibold text-xl">Big Tree Cafe</span>
            </div>
            <p className="text-gray-300">
              Serving quality coffee and delicious food from around the world since 2015.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Golf Course Road, Sector 56</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@bigtreecafe.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Opening Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Fri: 7:00 AM - 8:00 PM</p>
                  <p>Sat - Sun: 8:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Big Tree Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}