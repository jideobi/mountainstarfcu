import Logo from "../assets/logo.v6.large.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaGlobe,
  FaPhoneAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";


export default function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showProcessing, setShowProcessing] = useState(false);
  const [showAccountClosed, setShowAccountClosed] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter your username and password.");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    // Show processing modal
    setShowProcessing(true);

    setTimeout(() => {
      // Hide processing modal
      setShowProcessing(false);

      // Show account closed page/modal
      setShowAccountClosed(true);

      setTimeout(() => {
        // Hide account closed page
        setShowAccountClosed(false);

        // Clear form
        setUsername("");
        setPassword("");
        setShowPassword(false);
      }, 4000);
    }, 2500);
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-48 md:w-56 h-auto cursor-pointer hover:opacity-90 transition"
            />
          </Link>
        </div>

        <div className="flex justify-center mb-6 text-3xl text-[#3B76C2] pt-4 font-bold">
          <h1>Online Digital Banking</h1>
        </div>


        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Login Card */}
        <div
          className="
    
            p-6
            md:p-8
          "
        >
          <h2 className="text-3xl font-bold text-center text-[rgb(63,45,131)] mb-8">

          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Username
              </label>

              <input
                type="text"
                placeholder="User ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="
    w-full
    px-4
    py-3
    border
    border-gray-300
    rounded-lg
    focus:outline-none
    focus:ring-2
    focus:ring-[#3B76C2]
  "
              />
            </div>

            {/* Password */}
            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
        w-full
        px-4
        py-3
        pr-12
        border
        border-gray-300
        rounded-lg
        focus:outline-none
        focus:ring-2
        focus:ring-[#3B76C2]
      "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        text-gray-500
        hover:text-[#3B76C2]
      "
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className="text-right">
              <p>Forgot User ID /Password? </p>
              <p>Account Lockout Reset </p>
            </div>



            {/* Buttons */}
            <div className="pt-2 space-y-3">
<button
  type="submit"
  className="
    w-full
    bg-[#3B76C2]
    text-white
    py-5
    rounded-lg
    font-bold
    hover:opacity-90
    transition
  "
>
  Login
</button>

              <button
                type="button"
                className="
                  w-full
                 
                  border-[rgb(63,45,131)]
                  text-white
                  bg-[#3B76C2] 
                  py-2
                  rounded-lg
                  font-bold
                  hover:bg-[rgb(63,45,131)]
                  hover:text-white
                  transition
                "
              >
                Register<br />
                <span className="text-[12px] font-light">Already a member</span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center gap-12 text-gray-700 mt-6">
          <Link
            to="/"
            className="items-center gap-2 cursor-pointer hover:text-[#3B76C2] transition"
          >
            <div className="flex justify-center text-[#3B76C2]">
              <FaPhoneAlt size={20} />
            </div>

            <span className="text-[16px] text-gray-400 font-medium">Contact Us</span>
          </Link>

          <div>|</div>

          <Link
            to="/"
            className="items-center gap-2 cursor-pointer hover:text-[#3B76C2] transition"
          >
            <div className="flex justify-center text-[#3B76C2]">
              <FaGlobe size={20} />
            </div>

            <span className="text-[16px] text-gray-400 font-medium">Disclosures</span>
          </Link>
        </div>

      </div>
      {showProcessing && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl py-64 px-22 mx-4 shadow-xl flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-[#3B76C2] border-t-transparent rounded-full animate-spin mb-4"></div>

      <p className="text-gray-700 font-medium">
        Processing, please wait...
      </p>
    </div>
  </div>
)}

{showAccountClosed && (
  <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
    <div className="text-center px-6">
      <div className="text-red-600 text-3xl font-bold mb-4">
        Account Status Closed
      </div>

      <p className="text-gray-700 text-lg">
        You cannot access this service at the moment.
      </p>
    </div>
  </div>
)}
    </div>
  );
}