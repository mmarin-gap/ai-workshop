import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design with media queries
 *
 * @param {string} query - Media query string
 * @returns {boolean} - Whether the media query matches or not
 *
 * Example usage:
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
 * const isDesktop = useMediaQuery('(min-width: 1025px)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Create a MediaQueryList object
    const media = window.matchMedia(query);

    // Function to update the state
    const updateMatches = () => {
      setMatches(media.matches);
    };

    // Call once to set the initial value
    updateMatches();

    // Add the listener to handle changes
    media.addEventListener('change', updateMatches);

    // Clean up the listener when the component unmounts
    return () => {
      media.removeEventListener('change', updateMatches);
    };
  }, [query]); // Re-run effect if query changes

  return matches;
}

/**
 * Predefined breakpoints for common device sizes
 */
export const breakpoints = {
  mobile: '(max-width: 640px)',
  tablet: '(min-width: 641px) and (max-width: 1024px)',
  desktop: '(min-width: 1025px)',
  largeDesktop: '(min-width: 1280px)',
};

/**
 * Hooks for predefined breakpoints
 */
export function useMobile() {
  return useMediaQuery(breakpoints.mobile);
}

export function useTablet() {
  return useMediaQuery(breakpoints.tablet);
}

export function useDesktop() {
  return useMediaQuery(breakpoints.desktop);
}

export function useLargeDesktop() {
  return useMediaQuery(breakpoints.largeDesktop);
}

/**
 * Hook to detect dark mode preference
 */
export function useDarkMode() {
  return useMediaQuery('(prefers-color-scheme: dark)');
}
