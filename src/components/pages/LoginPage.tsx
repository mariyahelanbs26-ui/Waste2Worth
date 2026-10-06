import React, { useState } from 'react';
import { PageId, User } from '../../types';
import { Recycle, Lock, Mail, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: (user: User) => void;
  onNavigate: (page: PageId) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onLoginSuccess,
  onNavigate,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setForgotPasswordMessage('');

    if (!email.trim()) {
      setError('Please enter your email or username.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }
    if (password.length < 4) {
      setError('Password must be at least 4 characters long.');
      return;
    }

    // Success login
    const derivedName = email.includes('@')
      ? email.split('@')[0].replace(/[._-]/g, ' ')
      : email;
    const formattedName =
      derivedName.charAt(0).toUpperCase() + derivedName.slice(1);

    onLoginSuccess({
      name: formattedName || 'BCA Eco Warrior',
      email: email.includes('@') ? email : `${email}@waste2worth.edu`,
    });
  };

  const handleFillDemo = () => {
    setEmail('student@bca.edu');
    setPassword('green2026');
    setError('');
  };

  const handleForgotPassword = () => {
    if (!email.trim()) {
      setError('Please type your email address first to reset password.');
      return;
    }
    setForgotPasswordMessage(
      `Password reset instructions sent to ${email}. (Demo reset simulator)`
    );
    setError('');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50/50 to-slate-50">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-2xl border border-emerald-100 shadow-lg">
        {/* Top Header */}
        <div className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
            <Recycle className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Waste2Worth Login
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Sign in to access your recycling dashboard and eco-actions
          </p>
        </div>

        {/* Feedback Alerts */}
        {error && (
          <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {forgotPasswordMessage && (
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>{forgotPasswordMessage}</span>
          </div>
        )}

        {/* Login Form */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Email or Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. student@bca.edu"
                className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800 transition"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Password
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-xs text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer font-medium"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-none text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800 transition"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition cursor-pointer"
          >
            Sign In to Account
          </button>

          {/* Demo helper */}
          <div className="text-center pt-1">
            <button
              type="button"
              onClick={handleFillDemo}
              className="text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-md border border-emerald-200 transition"
            >
              Fill Sample BCA Demo Credentials
            </button>
          </div>
        </form>

        {/* Links to Register & Back to Home */}
        <div className="pt-4 border-t border-slate-100 text-center space-y-3 text-xs sm:text-sm">
          <p className="text-slate-600">
            Don't have an account?{' '}
            <button
              onClick={() => onNavigate('register')}
              className="text-emerald-700 font-semibold hover:underline cursor-pointer"
            >
              Register here
            </button>
          </p>

          <div>
            <button
              onClick={() => onNavigate('welcome')}
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-800 font-medium transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
