import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-eco-green-400/20 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-eco-green-100 shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-eco-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-eco-green-700">Join the largest tree plantation movement</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6"
          >
            Plant Trees. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-green-600 to-emerald-400">
              Track Impact.
            </span> <br className="hidden md:block" />
            Build a Greener Future.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Discover nearby plantation drives, track your carbon footprint offset, and connect with a community dedicated to restoring our planet.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/drives" 
              className="w-full sm:w-auto px-8 py-4 bg-eco-green-500 hover:bg-eco-green-600 text-white rounded-full font-semibold text-lg transition-all shadow-xl shadow-eco-green-500/30 hover:shadow-eco-green-500/40 hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Explore Drives
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/dashboard" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-full font-semibold text-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              View Dashboard
            </Link>
          </motion.div>
        </div>

        {/* Stats Section inside Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            { icon: Leaf, label: "Trees Planted", value: "12,450+" },
            { icon: Users, label: "Active Volunteers", value: "3,200+" },
            { icon: Globe, label: "Cities Covered", value: "45+" },
          ].map((stat, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-eco-green-100 rounded-2xl mb-6 text-eco-green-600">
                <stat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
