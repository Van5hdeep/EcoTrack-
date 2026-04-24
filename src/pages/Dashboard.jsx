import { Leaf, CloudRain, Clock, Target, Star } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import ChartsSection from '../components/ChartsSection';
import BadgeSection from '../components/BadgeSection';
import { dashboardStats } from '../data/dashboardData';

const Dashboard = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Your <span className="text-eco-green-600">Impact Dashboard</span>
        </h1>
        <p className="text-gray-600 mt-2">Track your contribution to a greener planet.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard 
          title="Total Trees Planted" 
          value={dashboardStats.totalTreesPlanted.toLocaleString()} 
          icon={Leaf} 
          delay={0}
        />
        <DashboardCard 
          title="CO2 Offset" 
          value={dashboardStats.co2Offset} 
          unit="tons"
          icon={CloudRain} 
          delay={0.1}
        />
        <DashboardCard 
          title="Volunteer Hours" 
          value={dashboardStats.volunteerHours.toLocaleString()} 
          unit="hrs"
          icon={Clock} 
          delay={0.2}
        />
        <DashboardCard 
          title="Sustainability Score" 
          value={dashboardStats.sustainabilityScore} 
          icon={Star} 
          delay={0.3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ChartsSection />
        </div>
        <div className="lg:col-span-1">
          <BadgeSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
