import { extendTheme, theme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default extendTheme({
  colors: {
    primary: theme.colors.red,
  },
  styles: {
    global: (props: any) => ({
      'html, body, #root': {
        color: mode(undefined, 'whiteAlpha.900')(props),
        height: '100%',
      },
    }),
  },
  fontSizes: {
    sm: '0.95rem',
    xs: '0.9rem',
  },
  sizes: {
    container: {
      xl: '1440px',
    },
  },
});
