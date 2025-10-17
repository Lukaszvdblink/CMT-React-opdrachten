import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  return <h2>{currentTime.toLocaleTimeString()}</h2>;
};

export default Clock;

