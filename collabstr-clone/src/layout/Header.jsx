import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../backend/AuthContext";

const Header = () => {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="site-header-clean">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO - Clickable to go home */}
        <Link to="/" className="flex items-center gap-3 select-none hover:opacity-80 transition-opacity">
          <span className="logo-text">collabstr</span>

          {/* SPEECH-BUBBLE SVG ICON */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FF9EBE" />
                <stop offset="100%" stopColor="#FF6A95" />
              </linearGradient>
            </defs>

            <path
              d="M7 3C4.24 3 2 5.24 2 8C2 10.03 3.23 11.77 5 12.58V17L9.06 13.94C9.69 14.2 10.33 14.33 11 14.33C13.76 14.33 16 12.09 16 9.33C16 6.58 13.76 4.33 11 4.33H7Z"
              fill="url(#grad)"
              opacity="0.85"
            />
            <path
              d="M17 7C14.79 7 13 8.79 13 11C13 12.66 14 14.09 15.4 14.66L18 17V14.8C19.72 14.41 21 12.86 21 11C21 8.79 19.21 7 17 7Z"
              fill="url(#grad)"
            />
          </svg>
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-8">
          <button className="nav-link">Search</button>
          <button className="nav-link">How It Works</button>
          <button className="nav-link">Pricing</button>

          {user ? (
            <>
              {/* Logged In State */}
              <Link
                to={isAdmin ? "/admin" : "/dashboard"}
                className="nav-link"
              >
                Dashboard
              </Link>
              <button onClick={handleLogout} className="nav-link text-red-500">
                Logout
              </button>
              <div className="flex items-center gap-2">
                <img
                  src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}&background=random&size=32`}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            </>
          ) : (
            <>
              {/* Logged Out State */}
              <Link to="/login" className="nav-link">Login</Link>
              <button className="nav-link">Join as Brand</button>
              <button className="join-creator">
                Join as Creator
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;