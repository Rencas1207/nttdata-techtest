import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { GuardProvider } from './context/GuardContext';

import AuthLayout from './layout/AuthLayout';
import ProtectedRoute from './layout/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GuardProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="/guards" element={<ProtectedRoute />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GuardProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
