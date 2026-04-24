import { Calendar, MapPin, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const DriveCard = ({ drive }) => {
  const progress = Math.min((drive.planted / drive.target) * 100, 100);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass rounded-3xl overflow-hidden flex flex-col group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={drive.image} 
          alt={drive.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold mb-1 truncate">{drive.name}</h3>
          <p className="text-sm text-gray-200 flex items-center gap-1">
            <Users className="w-4 h-4" /> {drive.organizer}
          </p>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-center text-gray-600 gap-2 text-sm">
            <Calendar className="w-4 h-4 text-eco-green-500" />
            <span>{new Date(drive.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center text-gray-600 gap-2 text-sm">
            <MapPin className="w-4 h-4 text-eco-green-500 flex-shrink-0" />
            <span className="truncate">{drive.location}</span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2 mt-2">{drive.description}</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600 font-medium">Goal Progress</span>
            <span className="text-eco-green-600 font-bold">{drive.planted} / {drive.target} trees</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-eco-green-500 h-2.5 rounded-full"
            />
          </div>
        </div>

        <button className="w-full py-3 px-4 bg-eco-green-50 hover:bg-eco-green-500 text-eco-green-700 hover:text-white rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
          <Target className="w-5 h-5" />
          Join Drive
        </button>
      </div>
    </motion.div>
  );
};

export default DriveCard;
