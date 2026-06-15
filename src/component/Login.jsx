import Logo from "../assets/logo.v6.large.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleLogin = (e) => {
  e.preventDefault();

  if (!username || !password) {
    setError("Please enter your username and password.");
    
    setTimeout(() => {
      setError("");
    }, 3000);

    return;
  }

  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    setError("Account Status Closed.");

    setTimeout(() => {
      setError("");
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
  placeholder="Enter Username"
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
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>

<input
  type="password"
  placeholder="Enter Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
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
            <div className="text-right">
                <p>Forgot User ID /Password? </p>
                <p>Account Lockout Reset </p>
            </div>



            {/* Buttons */}
            <div className="pt-2 space-y-3">
<button
  type="submit"
  disabled={loading}
  className="
    w-full
    bg-[#3B76C2]
    text-white
    py-5
    rounded-lg
    font-bold
    hover:opacity-90
    transition
    disabled:opacity-70
    flex
    items-center
    justify-center
    gap-3
  "
>
  {loading ? (
    <>
      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      Verifying...
    </>
  ) : (
    "Login"
  )}
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

      </div>
    </div>
  );
}