import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { monthlyProgressData } from '../data/dashboardData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-100">
        <p className="font-semibold text-gray-900 mb-2">{label}</p>
        <p className="text-sm text-eco-green-600 font-medium">
          Trees Planted: {payload[0].value}
        </p>
        <p className="text-sm text-emerald-500 font-medium mt-1">
          CO2 Offset: {payload[1].value} tons
        </p>
      </div>
    );
  }
  return null;
};

const ChartsSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass p-6 md:p-8 rounded-3xl"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Impact Growth</h2>
          <p className="text-sm text-gray-500 mt-1">Monthly trees planted vs CO2 offset</p>
        </div>
      </div>

      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={monthlyProgressData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorTrees" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorOffset" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <CartesianGrid vertical={false} stroke="#f3f4f6" />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="trees" 
              stroke="#22c55e" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorTrees)" 
            />
            <Area 
              yAxisId="right"
              type="monotone" 
              dataKey="offset" 
              stroke="#10b981" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorOffset)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ChartsSection;
