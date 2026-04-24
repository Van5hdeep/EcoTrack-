import { Heart, Leaf, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const StoryCard = ({ story }) => {
  const [likes, setLikes] = useState(story.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="glass p-6 rounded-3xl flex flex-col h-full transition-transform duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        {story.avatar ? (
          <img src={story.avatar} alt={story.author} className="w-12 h-12 rounded-full object-cover border-2 border-eco-green-100" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-eco-green-100 flex items-center justify-center text-eco-green-600 font-bold text-lg">
            {story.author.charAt(0)}
          </div>
        )}
        <div>
          <h3 className="font-bold text-gray-900">{story.author}</h3>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {story.eventName}
          </p>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
        "{story.content}"
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-1 text-eco-green-600 bg-eco-green-50 px-3 py-1.5 rounded-full text-xs font-medium">
          <Leaf className="w-3.5 h-3.5" />
          {story.treesPlanted} Trees Planted
        </div>
        
        <button 
          onClick={handleLike}
          className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
            isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          {likes}
        </button>
      </div>
    </motion.div>
  );
};

export default StoryCard;
