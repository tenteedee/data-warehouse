import React, { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signing in with username:', username);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-6 absolute top-0 left-0">
        <img src="img/logo.svg" className="w-[49px] h-[35px]" alt="Logo" />
      </header>

      <div className="h-screen flex items-center justify-center">
        <div className="w-full space-y-8 p-8 flex flex-col items-center justify-center ">
          <h1 className="text-center text-5xl">Sign In</h1>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm space-y-4 pt-5"
          >
            <div className="space-y-2">
              <label htmlFor="username" className="font-large">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-[413px] h-[57px] px-3 border border-black rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-[413px] h-[53px] bg-[#9C69E2] hover:bg-purple-600 text-white font-medium rounded-[53px]"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
