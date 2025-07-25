import React, { useState } from 'react';
import { Heart, Eye, EyeOff, Mail, Lock, User, Phone, Calendar,ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true); 
  // isLogin is true then the login page gets rendered else signup page gets rendered
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    dateOfBirth: '',
    gender: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Signup specific validations
    if (!isLogin) {
      if (!formData.firstName) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      }
      if (!formData.dateOfBirth) {
        newErrors.dateOfBirth = 'Date of birth is required';
      }
      if (!formData.gender) {
        newErrors.gender = 'Gender is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Simulate API call
      console.log('Form submitted:', { ...formData, action: isLogin ? 'login' : 'signup' });
      alert(`${isLogin ? 'Login' : 'Signup'} successful! Check console for form data.`);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      dateOfBirth: '',
      gender: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-800 flex items-center justify-center p-4 mt-9">
      <div className="bg-black/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-red-500/20 w-full max-w-md">
          <Link to="/" className="inline-block px-6 py-2 bg-transparent text-red-500 font-semibold rounded-full hover:bg-red-200 transition">
            <ChevronLeft/>
          </Link>
        {/* Header */}
        <div className="text-center p-8 pb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-red-500 to-yellow-400 p-3 rounded-full">
              <Heart className="w-8 h-8 text-white fill-current" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">Soulmate</span>
          </h1>
          <p className="text-gray-300 text-sm">
            {isLogin ? 'Welcome back to your love journey' : 'Start your journey to find true love'}
          </p>
        </div>

        {/* Form rendering options */}
        <div className="px-8 pb-8">
          <div className="space-y-4">
            {/* Login/Signup Toggle */}
            <div className="flex bg-gray-800 rounded-lg p-1 mb-6">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  isLogin 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  !isLogin 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Signup Fields */}
            {!isLogin && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      />
                    </div>
                    {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      />
                    </div>
                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                    />
                  </div>
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="dateOfBirth"
                      placeholder="Date of Birth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                    />
                  </div>
                  {errors.dateOfBirth && <p className="text-red-400 text-xs mt-1">{errors.dateOfBirth}</p>}
                </div>

                <div>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="text-red-400 text-xs mt-1">{errors.gender}</p>}
                </div>
              </>
            )}

            {/* Email */}
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                />
              </div>
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password (Signup only) */}
            {!isLogin && (
              <div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            )}

            {/* Remember Me & Forgot Password */}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2 rounded border-gray-600 bg-gray-800 text-red-500 focus:ring-red-500" />
                  Remember me
                </label>
                <button type="button" className="text-red-400 hover:text-red-300 transition-colors">
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:ring-4 focus:ring-red-500/30 cursor-pointer text-center"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>

            {/* Toggle Link */}
            <div className="text-center text-sm">
              <span className="text-gray-400">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                type="button"
                onClick={toggleMode}
                className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
              >
                {isLogin ? 'Sign up here' : 'Sign in here'}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-6">
          <div className="text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
            By {isLogin ? 'signing in' : 'creating an account'}, you agree to our Terms of Service and Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;