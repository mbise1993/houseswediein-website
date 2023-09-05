'use client';

import React from 'react';

const MESSAGE = `
 /$$      /$$ /$$$$$$$$ /$$$$$$$$ /$$$$$$  /$$        /$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$$$
| $$$    /$$$| $$_____/|__  $$__//$$__  $$| $$       /$$__  $$ /$$__  $$| $$__  $$| $$_____/
| $$$$  /$$$$| $$         | $$  | $$  \\ $$| $$      | $$  \\__/| $$  \\ $$| $$  \\ $$| $$      
| $$ $$/$$ $$| $$$$$      | $$  | $$$$$$$$| $$      | $$      | $$  | $$| $$$$$$$/| $$$$$   
| $$  $$$| $$| $$__/      | $$  | $$__  $$| $$      | $$      | $$  | $$| $$__  $$| $$__/   
| $$\\  $ | $$| $$         | $$  | $$  | $$| $$      | $$    $$| $$  | $$| $$  \\ $$| $$      
| $$ \\/  | $$| $$$$$$$$   | $$  | $$  | $$| $$$$$$$$|  $$$$$$/|  $$$$$$/| $$  | $$| $$$$$$$$
|__/     |__/|________/   |__/  |__/  |__/|________/ \\______/  \\______/ |__/  |__/|________/
`;

export const LogMessage = () => {
  React.useEffect(() => {
    console.log(MESSAGE);
  }, []);

  return null;
};
