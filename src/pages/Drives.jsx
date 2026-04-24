import { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import DriveCard from '../components/DriveCard';
import { drivesData } from '../data/drives';

const Drives = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDrives = drivesData.filter(drive => 
    drive.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drive.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drive.organizer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
        >
          Discover <span className="text-eco-green-600">Plantation Drives</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Find active tree plantation events near you. Join the community, plant saplings, and make a real impact on the environment.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto mb-16 relative"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search by city, event name, or organizer..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 ring-1 ring-gray-200 shadow-sm text-gray-900 bg-white focus:ring-2 focus:ring-eco-green-500 focus:outline-none transition-all"
          />
        </div>
      </motion.div>

      {filteredDrives.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDrives.map((drive) => (
            <DriveCard key={drive.id} drive={drive} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No drives found</h3>
          <p className="text-gray-500">We couldn't find any drives matching your search.</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-4 text-eco-green-600 font-medium hover:text-eco-green-700 underline underline-offset-4"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};

export default Drives;
