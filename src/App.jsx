import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login.Jsx";
import MovieList from "./Components/MovieList";
import CompanyInfo from "./Components/CompanyInfo";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
  };

  return (
    <>
      <Router>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
              {!isAuthenticated && (
                <>
                  <Link to="/signup" className="text-white hover:text-gray-300">
                    Signup
                  </Link>
                  <Link to="/login" className="text-white hover:text-gray-300">
                    Login
                  </Link>
                </>
              )}
              {isAuthenticated && (
                <>
                  <Link to="/movies" className="text-white hover:text-gray-300">
                    Movies
                  </Link>
                  <Link
                    to="/company-info"
                    className="text-white hover:text-gray-300"
                  >
                    Company Info
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-gray-300"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/movies"
            element={isAuthenticated ? <MovieList /> : <Navigate to="/login" />}
          />
          <Route
            path="/company-info"
            element={
              isAuthenticated ? <CompanyInfo /> : <Navigate to="/login" />
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
