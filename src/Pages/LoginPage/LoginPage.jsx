import React, { useState } from "react";
import Iglogo from "../../Assets/Instagram-Logo.png";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div>
        <div>
          <div className="flex flex-col w-[23%] m-auto border p-10 mt-3">
            <img src={Iglogo} alt="" className="w-45 mx-auto mb-3" />
            <form action="" className="flex flex-col space-y-2">
              {/* Username/Email Input */}
              <div className={`input-container ${username ? "active" : ""}`}>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  className="input-field border text-xs p-2 bg-gray-50 rounded-sm"
                />
                <label className="input-label text-xs text-gray-500">
                  Phone number, username, or email
                </label>
              </div>

              {/* Password Input */}
              <div className={`input-container ${password ? "active" : ""}`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="input-field border text-xs p-2 bg-gray-50 rounded-sm"
                />
                <label className="input-label text-xs text-gray-500">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-blue-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <button
                className="border rounded-lg p-1 text-white mt-4 text-bold"
                style={{ backgroundColor: "#808DFB", marginTop: "1rem" }}
              >
                Log in
              </button>
            </form>
            <div>
              <div className="flex items-center gap-4 my-6">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="text-gray-500 text-sm ">OR</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
            </div>
            <div className="text-center">
              <p className="inline-block text-sm" style={{ color: "#4150F7" }}>
                Forgot password?
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LoginPage;
