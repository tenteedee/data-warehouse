import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-[#D9D9D9] text-white flex flex-col p-4">
      <h3 className="text-xl font-bold mb-4 text-black">Posts</h3>
      <button className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
