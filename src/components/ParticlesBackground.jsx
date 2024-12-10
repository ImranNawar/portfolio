import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './config/particlesConfig';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
      <Particles 
        id="tsparticles" 
        options={particlesConfig} 
        init={particlesInit}
        className="absolute h-full w-full"
      />
    </div>
  );
};

export default ParticlesBackground;