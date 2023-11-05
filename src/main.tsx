import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './theme';
import Login from './pages/Login';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Home from './pages/Home';
import { AuthProvider } from './context/AuthContext';
import { GuardProvider } from './context/GuardContext';

const queryClient = new QueryClient();
const { ToastContainer } = createStandaloneToast();

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    index: true,
  },
  {
    path: '/',
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider
        theme={theme}
        toastOptions={{ defaultOptions: { position: 'top' } }}
      >
        <AuthProvider>
          <GuardProvider>
            <RouterProvider router={router} />
            <ToastContainer />
          </GuardProvider>
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
