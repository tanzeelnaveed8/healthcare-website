import React from 'react';
import Image from 'next/image';


const Team: React.FC = () => {
  return (
    <div className="relative w-full h-[500px]"> 
      <Image
        src="/woleteam.jpg" 
        alt="Team"
        layout="fill"
        objectFit="cover"
    
      />
    </div>
  );
};

export default Team;
