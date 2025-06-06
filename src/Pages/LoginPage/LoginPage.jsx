import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Iglogo from "../../Assets/Instagram-Logo.png";
import "./LoginPage.css";
import Ggplay from "../../Assets/Image/Ggplay.png";
import Microsoft from "../../Assets/Image/Microsoft.png";
import { useEffect, useRef } from "react";
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

  const detailsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        detailsRef.current.removeAttribute("open");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navigate = useNavigate();
  const handleNavigateRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <div className="space-y-20">
        <div className="w-[23%] m-auto">
          <div className="flex flex-col border p-10 mt-3 space-y-4">
            <img src={Iglogo} alt="" className="w-45 mx-auto mb-5" />
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
              <div
                className={`input-container ${
                  password ? "active" : ""
                } relative`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="input-field border text-xs p-2 bg-gray-50 rounded-sm"
                  id="password"
                />
                <label
                  htmlFor="password"
                  className="input-label text-xs text-gray-500"
                >
                  Password
                </label>
                {/* Chỉ hiện nút khi có input password */}
                {password && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs"
                    style={{ color: "#4150F7" }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                )}
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
          <div className="border p-5 mt-2 text-center">
            <div className="inline text-sm">Don't have an account? </div>
            <div
              className="inline font-semibold cursor-pointer"
              style={{ color: "#4150F7" }}
              onClick={handleNavigateRegister}
            >
              Sign up
            </div>
          </div>
          <div className="space-y-4 pt-4 w-full">
            <p className="block text-center text-sm">Get the app.</p>
            <div className="grid grid-cols-2 gap-2 overflow-hidden px-12 ">
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DA196E465-9605-48CE-86A9-EF38ED8884BE%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://www.instagram.com/6igmoid/&pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-10 w-full cursor-pointer"
                  src={Ggplay}
                  alt="Google Play"
                />
              </a>
              <a
                href="https://www.microsoft.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-10 w-full cursor-pointer"
                  src={Microsoft}
                  alt="Microsoft Store"
                />
              </a>
            </div>
          </div>
        </div>
        <footer className="text-center text-gray-500 text-sm mt-10 space-y-2">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {[
              "Meta",
              "About",
              "Blog",
              "Jobs",
              "Help",
              "API",
              "Privacy",
              "Terms",
              "Locations",
              "Instagram Lite",
              "Threads",
              "Contact Uploading & Non-Users",
              "Meta Verified",
            ].map((item, idx) => (
              <span key={idx} className="hover:underline cursor-pointer">
                {item}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4 items-center">
            <details ref={detailsRef} className="relative group">
              <summary className="cursor-pointer hover:underline list-none">
                English
              </summary>
              <ul className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded shadow-md text-black text-left w-32 z-10">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  English
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Tiếng Việt
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  日本語
                </li>
              </ul>
            </details>
            <span>© 2025 Instagram from Meta</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
