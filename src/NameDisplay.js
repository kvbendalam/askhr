import React, { useState, useEffect } from 'react';

const NameDisplay = () => {
  const name = "  I'm Your AI HR assistant!";
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < name.length-1) {
        console.log(`Adding character: ${name[currentIndex]}`); 
        setDisplayName(prev => prev + name[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200); 

    return () => clearInterval(interval); 
  }, [name]);

  return (
    <h1 style={{color:"#1db342", fontSize:"42px"}}>{displayName}</h1>
  );
};

export default NameDisplay;
