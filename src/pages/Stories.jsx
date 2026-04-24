import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenSquare, X } from 'lucide-react';
import StoryCard from '../components/StoryCard';
import { storiesData } from '../data/stories';

const Stories = () => {
  const [stories, setStories] = useState(storiesData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    author: '',
    eventName: '',
    content: '',
    treesPlanted: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStory = {
      id: stories.length + 1,
      ...formData,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      avatar: null // Default avatar logic handles null
    };
    
    setStories([newStory, ...stories]);
    setIsModalOpen(false);
    setFormData({ author: '', eventName: '', content: '', treesPlanted: 1 });
  };

  return (
    <div className="pt-32 pb-20 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Community <span className="text-eco-green-600">Stories</span>
          </h1>
          <p className="text-gray-600 mt-2">Read inspiring experiences from our volunteers.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-eco-green-500 hover:bg-eco-green-600 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg shadow-eco-green-500/30 flex items-center justify-center gap-2"
        >
          <PenSquare className="w-5 h-5" />
          Share Your Story
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </AnimatePresence>
      </div>

      {/* Add Story Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Share Your Experience</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-eco-green-500 focus:border-eco-green-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.eventName}
                    onChange={(e) => setFormData({...formData, eventName: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-eco-green-500 focus:border-eco-green-500 outline-none transition-all"
                    placeholder="Weekend Drive"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Trees Planted</label>
                  <input 
                    required
                    type="number" 
                    min="1"
                    value={formData.treesPlanted}
                    onChange={(e) => setFormData({...formData, treesPlanted: parseInt(e.target.value)})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-eco-green-500 focus:border-eco-green-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Story</label>
                  <textarea 
                    required
                    rows="4"
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-eco-green-500 focus:border-eco-green-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your experience..."
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-eco-green-500 hover:bg-eco-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-eco-green-500/30"
                  >
                    Post Story
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Stories;
