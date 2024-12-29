import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    throw new Error('Sidebar must be used within an AuthProvider');
  }

  const { logout } = authContext;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="w-64 h-full bg-[#D9D9D9] text-white flex flex-col p-4">
      <button
        onClick={() => navigate('/')}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4"
      >
        Home
      </button>

      <h3 className="text-xl font-bold mb-4 text-black">Posts</h3>

      <button
        onClick={handleLogout}
        className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
