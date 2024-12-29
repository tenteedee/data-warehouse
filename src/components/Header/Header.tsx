import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    throw new Error('Header must be used within an AuthProvider');
  }

  const { isAuthenticated, logout } = authContext;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex justify-between items-center p-4 ">
      <img src="img/logo.svg" alt="Logo" className="w-12 h-12" />

      <div className="flex gap-4">
        {isAuthenticated ? (
          <>
            <button
              onClick={() => navigate('/post')}
              className="bg-[#9C69E2] text-white py-2.5 px-8 rounded-full"
            >
              Posts
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2.5 px-8 rounded-full"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate('/signin')}
            className="bg-[#9C69E2] text-white py-2.5 px-8 rounded-full"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
