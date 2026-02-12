import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Inter, "Segoe UI", system-ui, -apple-system, sans-serif',
  fontFamilyMonospace: '"JetBrains Mono", monospace',
  headings: {
    fontFamily: 'Inter, "Segoe UI", system-ui, -apple-system, sans-serif',
    fontWeight: '800',
  },
  primaryColor: 'electricBlue',
  // primaryShade: 6, // Default is usually 6, we can explicitly set it if needed
  colors: {
    electricBlue: [
        "#eff0ff",
        "#dce0ff",
        "#b8c0ff",
        "#929eff",
        "#7180ff",
        "#5c6eff",
        "#5757ff", // 6 - Primary as per design
        "#4353e6",
        "#3a49cd",
        "#2f3eb5"
    ],
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
        fw: 600,
      },
      styles: {
        root: {
            transition: 'transform 0.1s ease, box-shadow 0.2s ease',
        },
      }
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        withBorder: true,
      },
      styles: {
        root: {
            backgroundColor: 'rgba(30, 30, 40, 0.4)', // Slightly transparent
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
        }
      }
    },
  },
});

export default theme;
