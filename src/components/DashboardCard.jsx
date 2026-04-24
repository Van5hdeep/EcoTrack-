import { motion } from 'framer-motion';

const DashboardCard = ({ title, value, icon: Icon, unit = "", delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="glass p-6 rounded-3xl relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="absolute -right-6 -top-6 text-eco-green-100/50 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
        <Icon className="w-32 h-32" />
      </div>
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className="p-3 bg-eco-green-100 text-eco-green-600 rounded-xl">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-gray-500 font-medium mb-1">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-gray-900">{value}</span>
          {unit && <span className="text-gray-500 font-medium">{unit}</span>}
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard;
