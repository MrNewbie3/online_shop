import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "password") {
      if (value.length < 6 && value.length > 0) {
        setPasswordError("Password must be at least 6 characters long");
      } else if (!/[A-Z]/.test(value) || !/\d/.test(value)) {
        setPasswordError("Password must contain at least one uppercase letter and one number");
      } else {
        setPasswordError("");
      }
    } else if (name === "confirmPassword") {
      if (value !== formData.password) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        setConfirmPasswordError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-2xl mb-4 text-center font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">
              First Name
            </label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1">
              Last Name
            </label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded" />
              <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center pr-3">
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.5 13A2.5 2.5 0 0018 10.5c0-1.659-2.5-4.5-6-4.5s-6 2.841-6 4.5c0 1.659 2.5 4.5 6 4.5a6 6 0 003.5-1.118M12 15s-4-2-4-4a2 2 0 114 0 1 1 0 012 0 2 2 0 114 0 1 1 0 012 0c0 2-4 4-4 4z"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </div>
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute inset-y-0 right-0 flex items-center pr-3">
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.5 13A2.5 2.5 0 0018 10.5c0-1.659-2.5-4.5-6-4.5s-6 2.841-6 4.5c0 1.659 2.5 4.5 6 4.5a6 6 0 003.5-1.118M12 15s-4-2-4-4a2 2 0 114 0 1 1 0 012 0 2 2 0 114 0 1 1 0 012 0c0 2-4 4-4 4z"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </div>
            {confirmPasswordError && <p className="text-red-500">{confirmPasswordError}</p>}
          </div>
          <div>
            <input type="submit" value="Sign In" className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 cursor-pointer" />
          </div>
        </form>
        <div className="mt-4 text-center">
          Already a member?{" "}
          <a href="/login" className="text-green-500 hover:underline">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
