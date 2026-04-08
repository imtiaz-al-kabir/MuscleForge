import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/api';
import CustomPattern from '../components/CustomPattern';
import { User, Mail, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Registration vs OTP mode
  const [step, setStep] = useState('register'); // 'register' or 'otp'
  
  // Registration Form
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false
  });

  // OTP Form
  const [otp, setOtp] = useState('');

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      setError('Passwords do not match');
      return;
    }
    if (!formData.terms) {
      setError('You must accept the terms and conditions');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await authService.register(formData);
      // capture OTP if available in response for easy testing
      if (response?.otp) {
        setOtp(response.otp.toString());
      }
      setStep('otp');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await authService.verifyOtp(formData.email, otp);
      // successful verification, move to login
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center py-20 px-4 font-sans overflow-hidden">
      
      {/* Dynamic Background Patterns (Consistent with Landing Page) */}
      <CustomPattern 
        className="absolute top-[5%] left-[5%] pointer-events-none" 
        opacity={0.3} 
        rotation={15} 
        matrix={[[1,1,1], [1,1,1], [1,1,1]]}
      />
      <CustomPattern 
        className="absolute bottom-[10%] right-[3%] pointer-events-none h-20" 
        opacity={0.3} 
        rotation={-15} 
        matrix={[[1,1,1,1,1], [1,0,0,0,1], [1,1,1,1,1]]}
      />

      <div className="w-full max-w-2xl bg-[#050505] rounded-[40px] md:rounded-[60px] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative border border-white/10 z-10 animate-fade-in backdrop-blur-sm">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <button 
            onClick={() => step === 'otp' ? setStep('register') : navigate('/')} 
            className="text-white/40 hover:text-brand transition-colors text-sm mb-6 flex items-center gap-2 group mx-auto md:mx-0"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> {step === 'otp' ? 'Back to Registration' : 'Back to Home'}
          </button>
          
          <h2 className="text-white text-[38px] md:text-[50px] font-heading font-black tracking-tight uppercase leading-none mb-3">
            {step === 'register' ? 'JOIN THE FORGE' : 'VERIFY IDENTITY'}
          </h2>
          <p className="text-[#a1a1aa] text-base md:text-lg tracking-wide max-w-md">
            {step === 'register' 
              ? 'Start your transformation journey today with FitForge.' 
              : 'Enter the verification code sent to your email to activate your account.'}
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-2xl mb-8 text-sm flex items-center gap-3">
            <span className="shrink-0 size-2 bg-red-500 rounded-full animate-pulse" />
            {error}
          </div>
        )}

        {step === 'register' ? (
          <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-white/60 text-xs font-bold tracking-widest uppercase ml-1">First Name</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                  <input 
                    type="text" name="first_name" value={formData.first_name} onChange={handleRegisterChange}
                    placeholder="John" required
                    className="w-full bg-white/[0.03] border border-white/10 text-white pl-12 pr-6 py-4 rounded-[20px] focus:border-brand focus:ring-1 focus:ring-brand/30 focus:outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-xs font-bold tracking-widest uppercase ml-1">Last Name</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                  <input 
                    type="text" name="last_name" value={formData.last_name} onChange={handleRegisterChange}
                    placeholder="Doe" required
                    className="w-full bg-white/[0.03] border border-white/10 text-white pl-12 pr-6 py-4 rounded-[20px] focus:border-brand focus:ring-1 focus:ring-brand/30 focus:outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white/60 text-xs font-bold tracking-widest uppercase ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input 
                  type="email" name="email" value={formData.email} onChange={handleRegisterChange}
                  placeholder="warrior@example.com" required
                  className="w-full bg-white/[0.03] border border-white/10 text-white pl-12 pr-6 py-4 rounded-[20px] focus:border-brand focus:ring-1 focus:ring-brand/30 focus:outline-none transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-white/60 text-xs font-bold tracking-widest uppercase ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                  <input 
                    type="password" name="password" value={formData.password} onChange={handleRegisterChange}
                    placeholder="••••••••" required
                    className="w-full bg-white/[0.03] border border-white/10 text-white pl-12 pr-6 py-4 rounded-[20px] focus:border-brand focus:ring-1 focus:ring-brand/30 focus:outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-xs font-bold tracking-widest uppercase ml-1">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                  <input 
                    type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleRegisterChange}
                    placeholder="••••••••" required
                    className="w-full bg-white/[0.03] border border-white/10 text-white pl-12 pr-6 py-4 rounded-[20px] focus:border-brand focus:ring-1 focus:ring-brand/30 focus:outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input 
                type="checkbox" name="terms" checked={formData.terms} onChange={handleRegisterChange} required
                id="terms"
                className="size-5 rounded-lg border-white/10 bg-white/5 checked:bg-brand transition-all cursor-pointer accent-brand"
              />
              <label htmlFor="terms" className="text-[#a1a1aa] text-sm cursor-pointer select-none">
                I agree to the <a href="#" className="font-bold text-brand hover:underline">Terms & Privacy Policy</a>
              </label>
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full bg-brand hover:bg-brand-dark text-white font-black uppercase text-lg tracking-[0.2em] py-5 rounded-[20px] md:rounded-[30px] transition-all shadow-[0_10px_30px_rgba(122,194,49,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-4"
            >
              {loading ? (
                <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>BECOME A MEMBER <ArrowRight size={20} /></>
              )}
            </button>
            <p className="text-center text-[#a1a1aa] mt-4 text-sm font-medium">
              Already one of us? <Link to="/login" className="text-brand font-bold hover:text-white transition-colors">Sign In Here</Link>
            </p>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="flex flex-col gap-8 animate-fade-in">
            <div className="text-center space-y-4">
              <div className="size-20 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-2 text-brand">
                <CheckCircle size={40} />
              </div>
              <label className="text-white/60 text-sm font-bold tracking-widest uppercase block">Verification Code</label>
              <input 
                type="text" 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="000000"
                className="w-full max-w-[280px] mx-auto block bg-white/[0.03] border border-white/10 text-white text-center text-5xl tracking-[0.4em] font-heading px-4 py-8 rounded-[30px] focus:border-brand focus:outline-none transition-all"
                required
                maxLength={6}
              />
              <p className="text-[#a1a1aa] text-sm italic">Code captured from API response for testing ease.</p>
            </div>

            <button 
              type="submit" disabled={loading || otp.length < 6}
              className="w-full bg-brand hover:bg-brand-dark text-white font-black uppercase text-lg tracking-[0.2em] py-5 rounded-[20px] md:rounded-[30px] transition-all shadow-[0_10px_30px_rgba(122,194,49,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'VERIFY ACCOUNT'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
