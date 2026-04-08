import React from 'react';
import CustomPattern from "./CustomPattern";

const FooterSection = () => {
  return (
    <>
      {/* Newsletter Section */}
      <section className="px-4 md:px-8 py-20 max-w-[1700px] mx-auto w-full relative z-10">
        <div className="bg-[#050505] rounded-[50px] py-20 px-8 text-center shadow-2xl relative border border-[#1a1a1a]">
          <CustomPattern className="absolute -top-35 -right-2 opacity-40 pointer-events-none mb-5 " 
          rotation={-180}
            matrix={[
              [1,0,1,1],
              [0, 1, 0,  0],
              [1, 1, 1],  
              [1],
              [1]
              
            ]}
          
          />
          <CustomPattern className="absolute -bottom-34 -left-2 opacity-40 pointer-events-none  " 
          
          rotation={-200}
            matrix={[
              [1,0,1,1],
              [0, 1, 0,  0],
              [1, 1, 1],  
              [1],
              [1]
              
            ]}
          
          />
          <p className="text-white text-xl font-medium tracking-wide mb-6 ">Join our community</p>
          <h2 className="text-white text-5xl md:text-[68px] font-heading font-black tracking-widest mb-10">
            Subscribe to our <span className="relative inline-block">
              newsletter
              <svg className="absolute w-[110%] h-[18px] -bottom-3 left-[-5%] text-[#e63946]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,-5 100,15 Q150,35 200,10" stroke="currentColor" strokeWidth="4" fill="transparent"/>
              </svg>
            </span>
          </h2>
          <p className="text-[#a1a1aa] text-[15px] font-sans max-w-4xl mx-auto mb-14 leading-[1.8] px-4 tracking-wide">
            Join Our Community Of Fitness Enthusiasts And Athletes! By Subscribing To Our Newsletter, You'll Receive Expert Training Tips, Nutrition Guides, Exclusive Discounts, And The Latest News On Upcoming Events And Products.
          </p>
          
          <div className="flex bg-[#050505] border border-[#333] rounded-[40px] max-w-[650px] mx-auto p-2 pl-8 items-center focus-within:border-brand transition-colors">
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500 text-[15px] font-sans tracking-wide"
            />
            <button className="bg-white text-black font-extrabold uppercase font-sans tracking-[0.1em] text-sm py-4 px-10 rounded-[30px] hover:bg-brand hover:text-white transition-all shadow-lg ml-2 shrink-0">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer Details */}
      <footer className="pt-8 pb-10 px-4 md:px-8 max-w-[1700px] mx-auto w-full relative z-10">
        
        {/* Decorative Dots Pattern Above Footer (Removed as requested) */}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 my-16 border-t border-gray-200 pt-12">
          {/* About (wider col) */}
          
          <div className="md:col-span-4 pr-10">
            <h5 className="text-black font-bold text-[17px] tracking-wide mb-8 ">About</h5>
            <p className="text-[#666] text-[15px] leading-[1.8] mb-8 font-serif tracking-wide">
              At MuscleForge, we believe in the power of dedication and hard work. Our mission is to provide you with the tools, resources, and community you need to build the body of your dreams
            </p>
            <div className="h-[2px] bg-gray-200 w-full mb-6"></div>
            <div className="flex gap-6 items-center">
              <span className="text-[15px] font-bold text-gray-800">Social Media:</span>
              <div className="flex gap-4">
                <a href="#" className="font-bold text-[15px] text-black hover:text-brand transition-colors">Fb</a>
                <a href="#" className="font-bold text-[15px] text-black hover:text-brand transition-colors">In</a>
                <a href="#" className="font-bold text-[15px] text-black hover:text-brand transition-colors">Tw</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h5 className="text-black font-bold text-[17px] tracking-wide mb-8">Quick Links</h5>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-[#666] text-[15px] hover:text-brand transition-colors tracking-wide">Home</a>
              <a href="#" className="text-[#666] text-[15px] hover:text-brand transition-colors tracking-wide">Our gym location</a>
              <a href="#" className="text-[#666] text-[15px] hover:text-brand transition-colors tracking-wide">Contact Us</a>
              <a href="#" className="text-[#666] text-[15px] hover:text-brand transition-colors tracking-wide">Privacy policy</a>
            </div>
          </div>

          {/* Our Service */}
          <div className="md:col-span-3 lg:col-span-2">
            <h5 className="text-black font-bold text-[17px] tracking-wide mb-8">Our Service</h5>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-[#666] text-[15px] hover:text-brand transition-colors tracking-wide">Indoor gym</a>
              <a href="#" className="text-[#666] text-[15px] hover:text-brand transition-colors tracking-wide">Outdoor gym</a>
              <a href="#" className="text-[#666] text-[15px] hover:text-brand transition-colors tracking-wide">On ground gym</a>
              <a href="#" className="text-[#666] text-[15px] hover:text-brand transition-colors tracking-wide">Yoga class</a>
            </div>
          </div>

          {/* Contact Info (wider col) */}
          <div className="md:col-span-2 lg:col-span-4 pl-4">
            <h5 className="text-black font-bold text-[17px] tracking-wide mb-8">Contact Info</h5>
            <div className="flex flex-col gap-4">
              <p className="text-[#666] text-[15px] tracking-wide"><strong className="text-black font-semibold">Mail:</strong> &nbsp;info@example.com</p>
              <p className="text-[#666] text-[15px] tracking-wide"><strong className="text-black font-semibold">Call:</strong> &nbsp;+91 9876543210</p>
              <p className="text-[#666] text-[15px] leading-[1.8] tracking-wide"><strong className="text-black font-semibold">Location:</strong> &nbsp;New York, 235 Lane, 10001</p>
              <p className="text-[#666] text-[15px] tracking-wide"><strong className="text-black font-semibold">Time:</strong> &nbsp;Workout Hours: 5AM - 8PM</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 mt-12">
          <span className="text-gray-500 text-sm tracking-widest font-sans border-t-2 p-2 md:p-5 border-gray-200">websitename.com©{new Date().getFullYear()} all right reserve</span>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
