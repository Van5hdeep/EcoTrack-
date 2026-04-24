import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const LeafIcon = ({ style, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-1.28-3.34-2.51-1.25 1.23-2.25 2.05-3.34 2.51-1.03.45-2.1.6-3.08-.35-1.05-1.01-.98-2.31-.38-3.59.56-1.2 1.6-2.58 3.09-4.32C8.36 10.6 9.5 9 11 7c1.5 2 2.64 3.6 4.08 5.37 1.49 1.74 2.53 3.12 3.09 4.32.6 1.28.67 2.58-.38 3.59Z" opacity="0.3"/>
    <path d="M12 2v20M12 12c-2.5-1.5-4-3-4-3M12 16c-1.5-1-2.5-2-2.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const generateLeaf = (i) => {
  const xOffset = Math.random() * 100;
  const sway1 = Math.random() * 10 - 5;
  const sway2 = Math.random() * 10 - 5;
  const rotateDir = Math.random() > 0.5 ? 360 : -360;
  return {
    id: i,
    xOffset,
    sway1,
    sway2,
    rotateDir,
    size: Math.random() * 1.2 + 0.6,
    duration: Math.random() * 15 + 18,
    delay: Math.random() * -25,
    rotation: Math.random() * 360,
    opacity: Math.random() * 0.12 + 0.04,
  };
};

const FallingLeaves = () => {
  const leaves = useMemo(() => Array.from({ length: 18 }, (_, i) => generateLeaf(i)), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{ top: '-5%' }}
          initial={{ 
            x: `${leaf.xOffset}vw`, 
            y: '-10vh',
            rotate: leaf.rotation
          }}
          animate={{
            y: '110vh',
            rotate: leaf.rotation + leaf.rotateDir,
            x: [
              `${leaf.xOffset}vw`, 
              `${leaf.xOffset + leaf.sway1}vw`, 
              `${leaf.xOffset - leaf.sway2}vw`, 
              `${leaf.xOffset}vw`
            ]
          }}
          transition={{
            y: {
              duration: leaf.duration,
              repeat: Infinity,
              ease: "linear",
              delay: leaf.delay
            },
            rotate: {
              duration: leaf.duration * 0.8,
              repeat: Infinity,
              ease: "linear",
              delay: leaf.delay
            },
            x: {
              duration: leaf.duration * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: leaf.delay
            }
          }}
        >
          <LeafIcon 
            className="text-green-500"
            style={{ 
              width: `${leaf.size}rem`, 
              height: `${leaf.size}rem`,
              opacity: leaf.opacity 
            }} 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FallingLeaves;
