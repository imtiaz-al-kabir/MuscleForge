import React from 'react';
import { Star } from 'lucide-react';
import CustomPattern from "./CustomPattern";

import Client1 from '../assets/customar/man1.png';
import Client2 from '../assets/customar/man2.png';
import Client3 from '../assets/customar/man3.png';
import Client4 from '../assets/customar/man4.png';
import Client5 from '../assets/customar/man5.png';
import Client6 from '../assets/customar/man6.png';

const baseReview = {
  title: 'The Best Training Program!',
  review: 'The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!',
  name: 'Stive meloni',
  role: 'Ceo Of Miko',
};

const testimonials = [
  { ...baseReview, image: Client1 },
  { ...baseReview, image: Client2 },
  { ...baseReview, image: Client3 },
  { ...baseReview, image: Client4 },
  { ...baseReview, image: Client5 },
  { ...baseReview, image: Client6 },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full relative z-10">
      <div className="py-20 px-4 md:px-8 max-w-[1700px] mx-auto w-full relative">
       
        <CustomPattern className="absolute top-[60px] right-[5%] opacity-40 pointer-events-none rotate-180"
        
        rotation={-180}
            matrix={[
              [1,0,1,1],
              [0, 1, 0,  0],
              [1, 1, 1],  
              [1],
              [1]
              
            ]}
        
        />

        {/* Header */}
        <div className="mb-10 md:mb-16">
          <CustomPattern className="opacity-40 mb-6" 
          rotation={-220}
            matrix={[
              [1,0,1,1],
              [0, 1, 0,  0],
              [1, 1, 1],  
              [1],
              [1]
              
            ]}
          
          />
          <h2 className="text-[32px] md:text-[44px] font-heading font-black tracking-wide text-black mb-1 leading-tight">What Our Clients Are Saying</h2>
          <p className="text-[#555] font-sans text-base md:text-lg tracking-wide">Real Stories, Real Results — Hear From Our Athletes</p>
        </div>

        {/* Isolated Grid Background */}
        <div className="bg-[#ebebeb] p-6 md:p-8 lg:p-10 rounded-[32px] md:rounded-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-[#050505] rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col justify-between shadow-2xl border border-[#1a1a1a] hover:-translate-y-1 transition-transform duration-300">
              <div>
                <h4 className="text-white font-medium text-[19px] mb-6 tracking-wide">{item.title}</h4>
                <p className="text-[#999] text-[15px] leading-[1.8] mb-12 tracking-wide font-light">
                  {item.review}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover border-[3px] border-[#fb923c]" />
                  <div>
                    <h5 className="text-white font-medium text-base mb-[2px]">{item.name}</h5>
                    <p className="text-[#888] text-sm">{item.role}</p>
                  </div>
                </div>
                <div className="flex bg-[#111] border border-[#222] rounded-[16px] px-3 py-1.5 items-center gap-1 shadow-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-[#fb923c] fill-[#fb923c]" />
                  ))}
                  <span className="text-white text-xs font-bold ml-1 tracking-wider">(4.5)</span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
