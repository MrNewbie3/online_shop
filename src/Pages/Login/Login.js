import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:3000",
    // This must be true.
    handleCodeInApp: true,
  };
  const logo = "https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo-thumbnail.png";
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully");
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Google successfully");
    } catch (error) {
      console.log("Error logging in with Google:", error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-F8FAE5">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <div className="bg-white flex flex-col gap-5 p-8 rounded-lg shadow-lg w-96">
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
              <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="mb-4 flex justify-end">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button type="button" onClick={handleLogin} className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900 mb-4 w-full">
            Login
          </button>
        </form>
        <div className="flex items-center justify-center mb-4">
          <hr className="border-t-2 border-gray-400 flex-grow" />
          <span className="mx-4">Login With Another Account</span>
          <hr className="border-t-2 border-gray-400 flex-grow" />
        </div>
        <button onClick={handleGoogleLogin} className=" text-black py-2 px-4 rounded hover:bg-gray-500 w-full">
          <img src={logo} alt="Google Logo" className="inline-block w-4 h-4 mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
