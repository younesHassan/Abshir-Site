const themeButton = document.querySelector('#theme');
const root = document.documentElement;
let savedTheme;
try { savedTheme = localStorage.getItem('yunis-theme'); } catch {}
const systemLight = window.matchMedia('(prefers-color-scheme: light)').matches;
let theme = ['light', 'dark'].includes(savedTheme)
  ? savedTheme : (systemLight ? 'light' : 'dark');

function applyTheme() {
  root.dataset.theme = theme;
  themeButton.textContent = theme === 'dark' ? 'Light theme' : 'Dark theme';
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
}
applyTheme();
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  try { localStorage.setItem('yunis-theme', theme); } catch {}
});
document.querySelector('#year').textContent = new Date().getFullYear();
