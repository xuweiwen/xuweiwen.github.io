function initThemeToggle() {

  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    icon.style.transition = 'opacity 0.3s ease';
    icon.style.opacity = 0;

    setTimeout(() => {
      icon.classList.toggle('fa-sun', theme === 'light');
      icon.classList.toggle('fa-moon', theme === 'dark');
      icon.style.opacity = 1;
    }, 100);
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
    // Optional: match system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
}

export { initThemeToggle };