'use client';
import React, { useEffect, useState } from 'react';

const BackgroundParticles = ({ count = 10 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // This code only runs on the client
    const generated = Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      size: Math.random() * 20 + 5,       // 5px–25px
      delay: Math.random() * 30,          // 0s–30s
      duration: 20 + Math.random() * 20,  // 20s–40s
    }));
    setParticles(generated);
  }, [count]);

  // While the particles aren’t generated yet, render nothing (or a placeholder)
  if (particles.length === 0) {
    return null;
  }

  return (
    <div className="particles-container">
      {particles.map(({ left, size, delay, duration }, i) => (
        <div
          className="circle-container"
          key={i}
          style={{
            left:      `${left}%`,
            animationDelay:    `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          <div
            className="circle"
            style={{
              width:  `${size}px`,
              height: `${size}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundParticles;
