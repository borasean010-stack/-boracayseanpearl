import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-heading font-bold mb-4">Pearl Of Sean</h3>
            <p className="text-gray-300 max-w-sm">
              Premium Boracay island hopping tours, sunset cruises, and unforgettable ocean experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#tours" className="text-gray-300 hover:text-white transition-colors">Our Tours</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-primary" /> +63 917 123 4567
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-primary" /> hello@pearlofsean.com
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} className="text-primary" /> Station 2, Boracay Island
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Pearl Of Sean. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
