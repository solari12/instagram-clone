import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Iglogo from "../../Assets/Instagram-Logo.png";
import Ggplay from "../../Assets/Image/Ggplay.png";
import Microsoft from "../../Assets/Image/Microsoft.png";
import './RegisterPage.css'
import { useEffect, useRef } from "react";
const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailOrPhoneChange = (e) => setEmailOrPhone(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

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
  const handleNavigateLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="space-y-20">
        <div className="w-[23%] m-auto">
          <div className="flex flex-col border p-10 mt-3 space-y-4">
            <img src={Iglogo} alt="" className="w-45 mx-auto" />
            <div className="font-semibold text-center text-gray-500">
              Sign up to see photos and videos from your friends.
            </div>
            <div>
              <div className="flex items-center gap-4">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="text-gray-500 text-sm ">OR</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
            </div>
            <form action="" className="flex flex-col space-y-2">
              {/* Full Name Input */}
              <div className={`input-container ${fullName ? "active" : ""}`}>
                <input
                  type="text"
                  value={fullName}
                  onChange={handleFullNameChange}
                  className="input-field border text-xs p-2 bg-gray-50 rounded-sm"
                  id="fullName"
                />
                <label
                  htmlFor="fullName"
                  className="input-label text-xs text-gray-500"
                >
                  Full Name
                </label>
              </div>

              {/* Email or Phone Input */}
              <div
                className={`input-container ${emailOrPhone ? "active" : ""}`}
              >
                <input
                  type="text"
                  value={emailOrPhone}
                  onChange={handleEmailOrPhoneChange}
                  className="input-field border text-xs p-2 bg-gray-50 rounded-sm"
                  id="emailOrPhone"
                />
                <label
                  htmlFor="emailOrPhone"
                  className="input-label text-xs text-gray-500"
                >
                  Phone number or email
                </label>
              </div>

              {/* Username Input */}
              <div className={`input-container ${username ? "active" : ""}`}>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  className="input-field border text-xs p-2 bg-gray-50 rounded-sm"
                  id="username"
                />
                <label
                  htmlFor="username"
                  className="input-label text-xs text-gray-500"
                >
                  Username
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
              <div className="text-xs text-center text-gray-500">
              People who use our service may have uploaded your contact information to Instagram. <span className="special-text">Learn More</span>
              </div>
              <div className="text-xs text-center text-gray-500">
              By signing up, you agree to our <span className="special-text">Terms</span> , <span className="special-text">Privacy Policy</span> and <span className="special-text">Cookies Policy</span> .
              </div>
              <button
                className="border rounded-lg p-1 text-white mt-4 text-bold"
                style={{ backgroundColor: "#808DFB", marginTop: "1rem" }}
              >
                Sign up
              </button>
            </form>
            <div className="text-center">
              <p className="inline-block text-sm" style={{ color: "#4150F7" }}>
                Forgot password?
              </p>
            </div>
          </div>
          <div className="border p-5 mt-2 text-center">
            <div className="inline text-sm">Have an account? </div>
            <div
              className="inline font-semibold cursor-pointer"
              style={{ color: "#4150F7" }}
              onClick={handleNavigateLogin}
            >
              Log in
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

export default RegisterPage;
