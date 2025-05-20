/**
 * Custom Tailwind CSS plugin for ElectroStore design system
 */

import plugin from 'tailwindcss/plugin';

/**
 * ElectroStore design system plugin
 * Adds custom utilities and components for the application
 */
const electroStorePlugin = plugin(
  function({ addComponents, addUtilities, addBase, theme }) {
    // Add custom base styles
    addBase({
      'html': {
        scrollBehavior: 'smooth',
      },
      'body': {
        minHeight: '100vh',
        overflowX: 'hidden',
      },
      'img': {
        maxWidth: '100%',
        height: 'auto',
      },
      'button': {
        cursor: 'pointer',
      },
      '::selection': {
        backgroundColor: theme('colors.primary.500'),
        color: theme('colors.white'),
      }
    });

    // Add custom component classes
    addComponents({
      // Card components
      '.card': {
        backgroundColor: theme('colors.white'),
        borderRadius: theme('borderRadius.lg'),
        padding: theme('spacing.6'),
        boxShadow: theme('boxShadow.soft'),
        transition: 'box-shadow 0.2s ease-in-out',
        '&:hover': {
          boxShadow: theme('boxShadow.medium'),
        }
      },
      '.card-hoverable': {
        '@apply card': {},
        transform: 'translateY(0)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
        }
      },
      
      // Button variants
      '.btn': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
        fontWeight: theme('fontWeight.medium'),
        borderRadius: theme('borderRadius.md'),
        transition: 'all 0.2s ease',
      },
      '.btn-primary': {
        '@apply btn': {},
        backgroundColor: theme('colors.primary.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.primary.600'),
        },
        '&:focus': {
          outline: 'none',
          boxShadow: `0 0 0 3px ${theme('colors.primary.200')}`,
        },
      },
      '.btn-secondary': {
        '@apply btn': {},
        backgroundColor: theme('colors.secondary.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.secondary.600'),
        },
        '&:focus': {
          outline: 'none',
          boxShadow: `0 0 0 3px ${theme('colors.secondary.200')}`,
        },
      },
      '.btn-outline': {
        '@apply btn': {},
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme('colors.primary.500'),
        color: theme('colors.primary.500'),
        '&:hover': {
          backgroundColor: theme('colors.primary.50'),
        },
        '&:focus': {
          outline: 'none',
          boxShadow: `0 0 0 3px ${theme('colors.primary.200')}`,
        },
      },
      '.btn-ghost': {
        '@apply btn': {},
        backgroundColor: 'transparent',
        color: theme('colors.primary.500'),
        '&:hover': {
          backgroundColor: theme('colors.primary.50'),
        },
        '&:focus': {
          outline: 'none',
        },
      },
    });

    // Add custom utilities
    addUtilities({
      // Glass effect
      '.glass': {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        '@supports not (backdrop-filter: blur(10px))': {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        },
      },
      '.glass-dark': {
        backgroundColor: 'rgba(23, 23, 23, 0.8)',
        backdropFilter: 'blur(10px)',
        '@supports not (backdrop-filter: blur(10px))': {
          backgroundColor: 'rgba(23, 23, 23, 0.95)',
        },
      },
      
      // Custom text utilities
      '.text-balance': {
        textWrap: 'balance',
      },
      '.text-pretty': {
        textWrap: 'pretty',
      },
      
      // Object position utilities
      '.object-position-center-top': {
        objectPosition: 'center top',
      },
      '.object-position-center-bottom': {
        objectPosition: 'center bottom',
      },
      
      // Extra utilities
      '.no-scrollbar': {
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    });
  },
  // Define variants
  {
    theme: {
      extend: {
        // Any other theme extensions can go here
      },
    },
  }
);

export default electroStorePlugin;
      '.card-hoverable': {
        '@apply card': {},
        transform: 'translateY(0)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
        }
      },
      
      // Button variants
      '.btn': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
        fontWeight: theme('fontWeight.medium'),
        borderRadius: theme('borderRadius.md'),
        transition: 'all 0.2s ease',
      },
      '.btn-primary': {
        '@apply btn': {},
        backgroundColor: theme('colors.primary.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.primary.600'),
        },
        '&:focus': {
          outline: 'none',
          boxShadow: `0 0 0 3px ${theme('colors.primary.200')}`,
        },
      },
      '.btn-secondary': {
        '@apply btn': {},
        backgroundColor: theme('colors.secondary.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.secondary.600'),
        },
        '&:focus': {
          outline: 'none',
          boxShadow: `0 0 0 3px ${theme('colors.secondary.200')}`,
        },
      },
      '.btn-outline': {
        '@apply btn': {},
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme('colors.primary.500'),
        color: theme('colors.primary.500'),
        '&:hover': {
          backgroundColor: theme('colors.primary.50'),
        },
        '&:focus': {
          outline: 'none',
          boxShadow: `0 0 0 3px ${theme('colors.primary.200')}`,
        },
      },
      '.btn-ghost': {
        '@apply btn': {},
        backgroundColor: 'transparent',
        color: theme('colors.primary.500'),
        '&:hover': {
          backgroundColor: theme('colors.primary.50'),
        },
        '&:focus': {
          outline: 'none',
        },
      },
    });

    // Add custom utilities
    addUtilities({
      // Glass effect
      '.glass': {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        '@supports not (backdrop-filter: blur(10px))': {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        },
      },
      '.glass-dark': {
        backgroundColor: 'rgba(23, 23, 23, 0.8)',
        backdropFilter: 'blur(10px)',
        '@supports not (backdrop-filter: blur(10px))': {
          backgroundColor: 'rgba(23, 23, 23, 0.95)',
        },
      },
      
      // Custom text utilities
      '.text-balance': {
        textWrap: 'balance',
      },
      '.text-pretty': {
        textWrap: 'pretty',
      },
      
      // Object position utilities
      '.object-position-center-top': {
        objectPosition: 'center top',
      },
      '.object-position-center-bottom': {
        objectPosition: 'center bottom',
      },
      
      // Extra utilities
      '.no-scrollbar': {
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    });
  },
  // Define variants
  {
    theme: {
      extend: {
        // Any other theme extensions can go here
      },
    },
  }
);
