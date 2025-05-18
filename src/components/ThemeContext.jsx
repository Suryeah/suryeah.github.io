import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Try to load from localStorage, fallback to 'light'
    const stored = window.localStorage.getItem('theme');
    return stored ? stored : 'light';
  });

  useEffect(() => {
    // Set theme on <html> and <body> for full coverage
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
    // Set background and color directly for instant effect
    document.body.style.background = theme === 'dark' ? '#181a1b' : '#f6f8fa';
    document.body.style.color = theme === 'dark' ? '#f6f8fa' : '#1a202c';
    // Also update all section backgrounds/colors
    document.querySelectorAll('section').forEach(sec => {
      sec.style.background = theme === 'dark' ? '#23272f' : '#fff';
      sec.style.color = theme === 'dark' ? '#f6f8fa' : '#1a202c';
    });
    // Update navbar background and color
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.background = theme === 'dark' ? '#23272f' : '#fff';
      navbar.style.color = theme === 'dark' ? '#f6f8fa' : '#1a202c';
      navbar.querySelectorAll('a, button, span').forEach(el => {
        el.style.color = theme === 'dark' ? '#f6f8fa' : '#1a202c';
      });
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
