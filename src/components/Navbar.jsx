import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-1 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-10 xl:px-8 h-24 md:h-32 w-full max-w-7xl mx-auto pointer-events-auto">

      {/* Logo Area */}
      <div className="flex shrink-0 -ml-4 md:-ml-8">
        <div className="size-[60px] md:size-[100px] bg-[#71AC16] rounded-full flex items-center justify-center relative shadow-lg">
          <img src="/logo.png" alt="Logo" className="size-[30px] md:size-[50px] h-auto object-contain" />
        </div>
      </div>

      {/* Middle Navigation Pill (Desktop) */}
      <div className="hidden xl:flex gap-5 max-w-3xl h-[60px] bg-[#050505] text-white rounded-[50px] items-center justify-between pl-6 md:pl-12 pr-2 md:pr-4 border-2 border-white shadow-2xl mx-8">
        
        <div className="flex items-center gap-6 md:gap-12 shrink-0">
          <Link to="/" className="text-base font-bold tracking-wide text-white hover:text-[#7ac231] transition-colors whitespace-nowrap">Home</Link>
          <a href="#" className="text-base font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">Our gym location</a>
        </div>

        <div className="text-white font-light text-2xl shrink-0 mx-2">|</div>

        {/* Search container */}
        <div className="max-w-[219px] w-full h-[45px] flex items-center justify-between bg-[#404040] rounded-[34px] px-4 md:px-6">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-base w-full min-w-0 placeholder-gray-400 text-white"
          />
          <Search size={22} className="text-white shrink-0 ml-2" />
        </div>
      </div>

      {/* Right Side: Register + Hamburger */}
      <div className="flex items-center gap-4 shrink-0">
        <Link to="/register" className="bg-[#71AC16] hover:bg-[#66a324] text-white uppercase tracking-[0.1em] font-black py-2.5 px-5 md:py-4 md:px-10 text-xs md:text-lg rounded-[40px] transition-all shadow-lg whitespace-nowrap">
          REGISTER
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden size-12 bg-[#050505] text-white rounded-full flex items-center justify-center border border-white/20 shadow-lg"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#050505]/95 z-[200] flex flex-col items-center justify-center gap-8 xl:hidden p-10">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-white"
          >
            <X size={32} />
          </button>
          
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white hover:text-[#7ac231]">Home</Link>
          <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium text-gray-300 hover:text-white">Our gym location</a>
          
          <div className="w-full max-w-sm h-[60px] flex items-center justify-between bg-[#404040] rounded-[34px] px-6 mt-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-lg w-full placeholder-gray-400 text-white"
            />
            <Search size={24} className="text-white" />
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
