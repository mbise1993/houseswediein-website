'use client';

import React from 'react';

// https://www.asciiart.eu/image-to-ascii
const MESSAGE = `
               █                 
 ███████████████████████████████████  
 ███            ███               ██  
 ███             ██               ██  
 ███             ██               ██  
 ███             ███              ██  
 ███             ███              ██  
 ███             ███              ██  
 ███             ███              ██  
 ██████████████████████████████████████
█████████████████ ████████████████████ 
 ███              ██              ██  
 ███              ██              ██  
 ███              ███             ██  
 ███              ███             ██  
 ███              ███             ██  
 ███              ███             ██  
 ███              ███             ██  
 ███████████████████████████████████
                   ██
`;

export const LogMessage = () => {
  React.useEffect(() => {
    console.log(MESSAGE);
  }, []);

  return null;
};
