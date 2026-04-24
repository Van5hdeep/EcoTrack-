import { Leaf, Globe, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-eco-green-100 p-1.5 rounded-lg">
                <Leaf className="h-5 w-5 text-eco-green-600" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Eco<span className="text-eco-green-600">Track</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Plant trees, track your impact, and build a greener future together with the community.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-eco-green-500 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-eco-green-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-eco-green-500 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/drives" className="text-gray-500 hover:text-eco-green-600 text-sm">Find Drives</Link></li>
              <li><Link to="/dashboard" className="text-gray-500 hover:text-eco-green-600 text-sm">Dashboard</Link></li>
              <li><Link to="/stories" className="text-gray-500 hover:text-eco-green-600 text-sm">Community Stories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-eco-green-600 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-eco-green-600 text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} EcoTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
