import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import theme from './theme';
import App from './App';

const { ToastContainer } = createStandaloneToast();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider
      theme={theme}
      toastOptions={{ defaultOptions: { position: 'top' } }}
    >
      <App />
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>
);
