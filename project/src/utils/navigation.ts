import { scrollToSection } from './scroll';

// Helper function to check if we're on a specific page
export const isOnPage = (pagePath: string): boolean => {
  if (pagePath.startsWith('#')) {
    return window.location.pathname === '/';
  }
  return window.location.pathname === pagePath;
};

// Helper function to handle navigation
export const navigate = (path: string) => {
  // Always scroll to top first
  window.scrollTo(0, 0);

  // If we're already on the target page, don't do anything
  if (window.location.pathname === path) {
    return;
  }

  // If it's a hash link on the home page, scroll to section
  if (path.startsWith('#') && window.location.pathname === '/') {
    scrollToSection(path);
    return;
  }

  // If it's a hash link but we're not on home page, go to home first
  if (path.startsWith('#')) {
    window.location.href = `/${path}`;
    return;
  }

  // Add transition class to body
  document.body.classList.add('page-transition-out');

  // Create and show loading overlay
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay loading-overlay-enter';
  document.body.appendChild(overlay);

  // Handle navigation based on path
  const url = new URL(window.location.origin + path);
  
  // Check if the path is one of our valid routes
  const validRoutes = ['/blog', '/wisdom', '/retreats', '/services', '/dashboard'];
  const isValidRoute = validRoutes.some(route => url.pathname.startsWith(route));

  if (isValidRoute) {
    // For valid routes, update the URL without page reload
    window.history.pushState({}, '', url);
    // Force a re-render by dispatching a custom event
    window.dispatchEvent(new Event('popstate'));
  } else {
    // For other paths, do a full page navigation
    window.location.href = path;
  }

  // Remove overlay after transition
  setTimeout(() => {
    overlay.remove();
    document.body.classList.remove('page-transition-out');
  }, 600);
};

// Listen for browser back/forward navigation
window.addEventListener('popstate', () => {
  // Scroll to top on navigation
  window.scrollTo(0, 0);
  // Force App component to re-render
  window.dispatchEvent(new Event('locationchange'));
});