// Sets the theme class before first paint so the page doesn't flash the
// wrong theme while React mounts. Kept in sync with
// src/context/ThemeContext.tsx's getInitialTheme logic. Lives as an
// external file (rather than an inline <script> in index.html) so the CSP
// doesn't need 'unsafe-inline' for script-src.
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDark);
  } catch {
    // localStorage unavailable; fall back to light theme
  }
})();
