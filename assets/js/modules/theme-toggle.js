/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initThemeToggle() {

  const themeToggle = document.getElementById('theme-toggle');
  const moonIcon = document.getElementById('icon-moon');
  const sunIcon = document.getElementById('icon-sun');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    sunIcon.classList.toggle('visible', theme === 'dark');
    moonIcon.classList.toggle('visible', theme === 'light');

    if (theme === 'light') {
      moonIcon.style.opacity = 1;
      sunIcon.style.opacity = 0;
    } else {
      moonIcon.style.opacity = 0;
      sunIcon.style.opacity = 1;
    }
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
  
  // Set theme on load
  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved);
  } else {
    // Match system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
}

export { initThemeToggle };