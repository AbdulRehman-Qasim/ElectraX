import { EnvelopeIcon, EyeIcon, EyeSlashIcon, KeyIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png'; // ✅ your logo

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      return undefined;
    }

    const navigationTimer = window.setTimeout(() => {
      navigate('/dashboard', { replace: true });
    }, 1400);

    return () => window.clearTimeout(navigationTimer);
  }, [isLoading, navigate]);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4'>
      {isLoading && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 backdrop-blur-sm'
          role='status'
          aria-live='polite'
          aria-label='Signing you in'
        >
          <div className='relative w-full max-w-sm overflow-hidden rounded-2xl border border-yellow-400/30 bg-slate-900 px-8 py-10 text-center shadow-2xl shadow-blue-950/50'>
            <div className='absolute -top-20 -left-16 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl' />
            <div className='absolute -right-16 -bottom-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl' />
            <div className='relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/30 bg-slate-800 shadow-lg shadow-yellow-400/10'>
              <span className='absolute h-16 w-16 animate-spin rounded-full border-2 border-transparent border-t-yellow-400 border-r-yellow-300' />
              <img src={logo} alt='' className='h-10 w-auto object-contain' />
            </div>
            <h2 className='relative text-xl font-bold text-white'>Signing you in</h2>
            <p className='relative mt-2 text-sm text-slate-300'>
              Preparing your ElectraX dashboard...
            </p>
            <div className='relative mx-auto mt-6 h-1.5 w-40 overflow-hidden rounded-full bg-slate-700'>
              <div className='h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-yellow-400 to-blue-500' />
            </div>
          </div>
        </div>
      )}

      {/* ✅ Logo */}
      <div className='mb-4 flex items-center'>
        <img src={logo} alt='ElectraX Logo' className='h-14 w-auto' />
      </div>

      {/* Heading */}
      <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>Login to your account</h2>
      <p className='mb-6 text-gray-600'>Please enter your credentials to access your account</p>

      {/* Login Card */}
      <div className='w-full max-w-md rounded-xl bg-white p-6 shadow-lg'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Email */}
          <div>
            <div className='flex items-center rounded-md border px-3'>
              <EnvelopeIcon className='h-5 w-5 text-gray-400' />
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                className='w-full border-none px-2 py-3 text-sm outline-none focus:ring-0'
              />
            </div>
            {errors.email && <p className='mt-1 text-xs text-red-500'>{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <div className='flex items-center rounded-md border px-3'>
              <KeyIcon className='h-5 w-5 text-gray-400' />
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                className='w-full border-none px-2 py-3 text-sm outline-none focus:ring-0'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='focus:outline-none'
              >
                {showPassword ? (
                  <EyeSlashIcon className='h-5 w-5 text-gray-400' />
                ) : (
                  <EyeIcon className='h-5 w-5 text-gray-400' />
                )}
              </button>
            </div>
            {errors.password && <p className='mt-1 text-xs text-red-500'>{errors.password}</p>}
          </div>

          {/* Login Button */}
          <button
            type='submit'
            disabled={isLoading}
            className='w-full rounded-md bg-yellow-500 py-3 font-semibold text-blue-700 transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-70'
          >
            {isLoading ? 'Signing In...' : 'Log In'}
          </button>
        </form>

        {/* Links */}
        <div className='mt-4 flex flex-col items-center space-y-2 text-sm'>
          <a
            href='/forgot-password'
            className='font-semibold text-blue-700 no-underline hover:text-blue-800'
          >
            Forgot Password?
          </a>
          <p className='text-gray-700'>
            Don’t have an account?{' '}
            <a
              href='/signup'
              className='font-semibold text-blue-700 no-underline hover:text-blue-800'
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
