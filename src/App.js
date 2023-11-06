import './App.css';
import { BrowserRouter as Router, Route, Outlet, Routes, Navigate } from 'react-router-dom';
import tokenHelpers from './utils/helpers/tokenHelper';
import Login from './components/pages/auth/Login';
import SignUp from './components/pages/auth/SignUp';
import Home from './components/pages/dashboard/home/Home';

function App() {
  const AuthenticatedRoutes = () => {
    if (!tokenHelpers.isLoggedIn()) return <Outlet />
    else return <Navigate to="/login"/>
  }
  return (
    <Router>
      <Routes>
        <Route element={<AuthenticatedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
