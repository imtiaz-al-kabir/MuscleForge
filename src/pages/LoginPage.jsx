import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/api';
import CustomPattern from '../components/CustomPattern';
import { Mail, Lock, LogIn, ArrowLeft } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', remember_me: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await authService.login(formData.email, formData.password, formData.remember_me);
      // Once logged in successfully, navigate to Landing page
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center py-20 px-4 font-sans overflow-hidden">
      
      {/* Background Graphic Accents */}
      <CustomPattern 
        className="absolute top-[15%] right-[5%] pointer-events-none" 
        opacity={0.3} 
        rotation={-15} 
        matrix={[[1,1], [1,1]]}
      />
      <CustomPattern 
        className="absolute bottom-[10%] left-[5%] pointer-events-none" 
        opacity={0.3} 
        rotation={15} 
        matrix={[[0,1,1], [1,1,0], [1,1,1]]}
      />

      <div className="w-full max-w-lg bg-[#050505] rounded-[40px] md:rounded-[60px] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative border border-white/10 z-10 animate-fade-in backdrop-blur-sm">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <Link to="/" className="text-white/40 hover:text-brand transition-colors text-sm mb-8 flex items-center gap-2 group mx-auto md:mx-0">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          
          <h2 className="text-white text-[38px] md:text-[50px] font-heading font-black tracking-tight uppercase leading-none mb-3">
            WELCOME BACK
          </h2>
          <p className="text-[#a1a1aa] text-base md:text-lg tracking-wide">
            Sign in to the forge and continue your peak performance journey.
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-2xl mb-8 text-sm flex items-center gap-3">
            <span className="shrink-0 size-2 bg-red-500 rounded-full animate-pulse" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <div className="space-y-2">
            <label className="text-white/60 text-xs font-bold tracking-widest uppercase ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="warrior@example.com"
                className="w-full bg-white/[0.03] border border-white/10 text-white pl-12 pr-6 py-5 rounded-[20px] focus:border-brand focus:ring-1 focus:ring-brand/30 focus:outline-none transition-all placeholder:text-white/20 text-lg"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <label className="text-white/60 text-xs font-bold tracking-widest uppercase">Password</label>
              <a href="#" className="text-brand/60 hover:text-brand text-xs font-bold transition-colors">FORGOT?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-white/[0.03] border border-white/10 text-white pl-12 pr-6 py-5 rounded-[20px] focus:border-brand focus:ring-1 focus:ring-brand/30 focus:outline-none transition-all placeholder:text-white/20 text-lg"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-3 py-2">
            <input 
              type="checkbox" 
              name="remember_me"
              checked={formData.remember_me}
              onChange={handleChange}
              id="remember_me"
              className="size-5 rounded-lg border-white/10 bg-white/5 checked:bg-brand transition-all cursor-pointer accent-brand"
            />
            <label htmlFor="remember_me" className="text-[#a1a1aa] text-sm cursor-pointer select-none">
              Keep me logged in
            </label>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-brand hover:bg-brand-dark text-white font-black uppercase text-lg tracking-[0.2em] py-5 rounded-[20px] md:rounded-[30px] transition-all shadow-[0_10px_30px_rgba(122,194,49,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-4"
          >
            {loading ? (
              <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>LOG IN TO THE FORGE <LogIn size={20} /></>
            )}
          </button>
        </form>

        <div className="mt-10 pt-10 border-t border-white/5 text-center">
          <p className="text-[#a1a1aa] text-sm font-medium">
            New to the Forge? <Link to="/register" className="text-brand font-bold hover:text-white transition-colors">Start Your Journey Today</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
