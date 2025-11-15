// src/components/Login.jsx
import React, { useState, useEffect } from "react";

export default function Login({ onLogin, isDarkMode, toggleTheme }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user"
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for dynamic background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Check if user is already logged in when component mounts
  useEffect(() => {
    console.log("Login component mounted");
    const loggedInUser = localStorage.getItem("user");
    const isLogged = localStorage.getItem("isLoggedIn") === "true";
    
    console.log("Checking localStorage:", { loggedInUser, isLogged });
    
    if (loggedInUser && isLogged) {
      console.log("User already logged in, redirecting...");
      // If already logged in, redirect to main app
      onLogin(JSON.parse(loggedInUser));
    }
  }, [onLogin]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", formData);
    setLoading(true);
    setMessage("");
    
    // Validation
    if (!formData.email || !formData.password) {
      setMessage("ইমেল এবং পাসওয়ার্ড প্রয়োজন।");
      setLoading(false);
      return;
    }
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setMessage("পাসওয়ার্ড মেলে না।");
      setLoading(false);
      return;
    }
    
    if (!isLogin && !formData.name) {
      setMessage("নাম প্রয়োজন।");
      setLoading(false);
      return;
    }
    
    // Simulate authentication
    setTimeout(() => {
      console.log("Simulating authentication...");
      
      // Store user info in localStorage
      const userInfo = {
        name: formData.name || "ব্যবহারকারী",
        email: formData.email,
        role: formData.role
      };
      
      console.log("Storing in localStorage:", userInfo);
      
      localStorage.setItem('user', JSON.stringify(userInfo));
      localStorage.setItem('isLoggedIn', 'true');
      
      // Verify data was stored
      const storedUser = localStorage.getItem('user');
      const storedIsLogged = localStorage.getItem('isLoggedIn');
      console.log("Verification - Stored data:", { storedUser, storedIsLogged });
      
      // Call the onLogin callback to update parent state
      console.log("Calling onLogin with:", userInfo);
      onLogin(userInfo);
      
      setLoading(false);
    }, 1500);
  };

  const toggleForm = () => {
    console.log("Toggling form to:", !isLogin ? "register" : "login");
    setIsLogin(!isLogin);
    setMessage("");
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "user"
    });
  };

  return (
    <div className={`login-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Dynamic Background */}
      <div 
        className="dynamic-bg" 
        style={{
          background: isDarkMode 
            ? `radial-gradient(600px 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,212,255,0.15), transparent 50%),
               radial-gradient(400px 200px at ${window.innerWidth - mousePosition.x}px ${window.innerHeight - mousePosition.y}px, rgba(123,97,255,0.1), transparent 50%),
               linear-gradient(120deg, rgba(0,16,32,0.8), rgba(10,6,20,0.9))`
            : `radial-gradient(600px 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,212,255,0.2), transparent 50%),
               radial-gradient(400px 200px at ${window.innerWidth - mousePosition.x}px ${window.innerHeight - mousePosition.y}px, rgba(123,97,255,0.15), transparent 50%),
               linear-gradient(120deg, rgba(255,255,255,0.9), rgba(240,240,255,0.95))`
        }}
      />
      
      {/* Animated Gradient Background */}
      <div className="animated-gradient-bg" />
      
      <div className="login-card">
        <div className="login-header">
          <div className="logo">💚</div>
          <h1>ভালো আছো তো?</h1>
          <p className="tag">কমিউনিটি হেলথ নেভিগেটর — মনবন্ধু</p>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {isDarkMode ? "🌙" : "☀️"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">নাম</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="আপনার নাম"
                required={!isLogin}
                className="form-input"
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">ইমেল</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="আপনার ইমেল"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">পাসওয়ার্ড</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="আপনার পাসওয়ার্ড"
                required
                className="form-input"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">পাসওয়ার্ড নিশ্চিত করুন</label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="পাসওয়ার্ড আবার লিখুন"
                required={!isLogin}
                className="form-input"
              />
            </div>
          )}
          
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="role">ভূমিকা</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="form-input"
              >
                <option value="user">ব্যবহারকারী</option>
                <option value="volunteer">স্বেচ্ছাসেবক</option>
                <option value="admin">অ্যাডমিন</option>
              </select>
            </div>
          )}
          
          <button 
            type="submit" 
            className="btn primary login-btn" 
            disabled={loading}
          >
            {loading ? "প্রক্রিয়াকরণ..." : (isLogin ? "লগইন" : "নিবন্ধন করুন")}
          </button>
        </form>
        
        {message && <div className="toast error">{message}</div>}
        
        <div className="login-footer">
          <p>
            {isLogin ? "অ্যাকাউন্ট নেই?" : "ইতিমধ্যে অ্যাকাউন্ট আছে?"}
            <button 
              className="btn-link" 
              onClick={toggleForm}
            >
              {isLogin ? "নিবন্ধন করুন" : "লগইন করুন"}
            </button>
          </p>
        </div>
      </div>
      
      <div className="login-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </div>
  );
}