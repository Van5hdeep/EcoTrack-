import { motion } from 'framer-motion';
import { userBadges } from '../data/dashboardData';

const BadgeSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="glass p-6 md:p-8 rounded-3xl h-full"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Eco Badges</h2>
        <p className="text-sm text-gray-500 mt-1">Your sustainability achievements</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {userBadges.map((badge, index) => (
          <motion.div 
            key={badge.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + (index * 0.1) }}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{badge.name.split(' ')[badge.name.split(' ').length - 1]}</div>
            <h4 className="font-bold text-gray-900 text-sm text-center mb-1">
              {badge.name.split(' ').slice(0, -1).join(' ')}
            </h4>
            <p className="text-xs text-gray-500 text-center mb-2">{badge.description}</p>
            <span className="text-[10px] font-medium text-eco-green-600 bg-eco-green-50 px-2 py-1 rounded-full">
              {new Date(badge.earnedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BadgeSection;
