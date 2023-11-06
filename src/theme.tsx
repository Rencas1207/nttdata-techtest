import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    primary: theme.colors.red,
  },
  styles: {
    global: () => ({
      'html, body, #root': {
        height: '100%',
        minHeight: '100vh',
      },
      '::-webkit-scrollbar': {
        w: '10px',
        bgColor: 'white',
        borderRadius: '20px',
      },
      '::-webkit-scrollbar-thumb': {
        bgColor: '#9B2C2C',
        borderRadius: '20px',
      },
      '*': {
        scrollbarColor: '#9B2C2C',
      },
    }),
  },
  fontSizes: {
    sm: '0.95rem',
    xs: '0.9rem',
  },
  breakpoints: {
    lg: '1080px',
  },
});
