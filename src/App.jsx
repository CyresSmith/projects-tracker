import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Spinner = lazy(() => import('components/shared/Spinner'));
const SharedLayout = lazy(() => import('pages/SharedLayout'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Dashboard = lazy(() => import('pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
