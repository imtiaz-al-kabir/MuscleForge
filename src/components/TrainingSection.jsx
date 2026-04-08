import React from 'react';
import { Play } from 'lucide-react';
import CustomPattern from "./CustomPattern";
import img from '../assets/portrait-anime-character-doing-fitness-exercising.png';
const TrainingSection = () => {
  return (
    <section className=" pt-20 px-4 md:px-8 max-w-[1700px] mx-auto w-full relative z-10">
      
     
      <CustomPattern className="absolute top-[80px] right-[5%] opacity-40 pointer-events-none -rotate-90" 
      
      rotation={360} 
       matrix={[
              [1,0,1,1],
              [0, 1, 0,  0],
              [1, 1, 1],  
              [1],
              [1]
              
            ]}
      
     
      
      />

      {/* Header */}
      <div className="mb-11 pl-4">
        <CustomPattern className="opacity-40 mb-6 rotate-360" 
        
        matrix={[
              [1,0,1,1],
              [0, 1, 0,  0],
              [1, 1, 1],  
              [1],
              [1]
              
            ]}
        
        />
        <h2 className="text-[44px] font-heading font-black tracking-wide text-black mb-1">Train Like a Champion</h2>
        <p className="text-[#555] font-sans text-lg tracking-wide">Unleash Your Power with Expert Boxing Training</p>
      </div>

      <div className="bg-[#050505] rounded-[50px] p-8 lg:p-14 flex flex-col lg:flex-row gap-14 lg:gap-24 shadow-2xl relative overflow-hidden border border-[#1a1a1a]">
        {/* Left Image */}
        <div className="lg:w-[42%] shrink-0">
          <img 
            src={img} 
            alt="Champion Trainer" 
            className="w-full h-full object-cover rounded-[40px] min-h-[500px] shadow-sm drop-shadow-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-[58%] flex flex-col justify-center py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
          
            <div className="pt-4">
              <h3 className="text-white font-medium text-[22px] mb-10 tracking-widest capitalize">Training Focus Areas:</h3>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-white font-semibold text-[17px] mb-3 tracking-wide">Strength & Conditioning</h4>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    Develop knockout power with a mix of strength training and explosive movements.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold text-[17px] mb-3 tracking-wide">Speed & Agility</h4>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-[17px] mb-3 tracking-wide">Endurance Training</h4>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    Boost your stamina with high-intensity circuits that keep you fighting strong till the final round.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Why Train With Us */}
            <div className="pt-4">
              <h3 className="text-white font-medium text-[22px] mb-10 tracking-widest capitalize">Why Train With Us:</h3>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-white font-semibold text-[17px] mb-3 tracking-wide">Expert Coaches</h4>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    Our experienced boxing trainers have worked with amateur and professional athletes, ensuring you get the best training tailored to your goals.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold text-[17px] mb-3 tracking-wide">Flexible Programs</h4>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    Whether you're a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs.
                  </p>
                </div>

                {/* Buttons */}
                <div className="pt-10 flex items-center gap-6">
                  <button className="bg-[#71AC16] hover:bg-brand-dark cursor-pointer transition-colors text-white font-semibold text-lg py-5 px-10 rounded-[20px] shrink-0 shadow-[0_4px_25px_rgba(122,194,49,0.3)] tracking-wide">
                    Punch Now
                  </button>
                  <button className="w-16 h-16 rounded-full border border-dashed border-brand hover:bg-brand transition-all flex items-center justify-center group shrink-0">
                    <Play className="text-brand group-hover:text-white" size={24} fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
