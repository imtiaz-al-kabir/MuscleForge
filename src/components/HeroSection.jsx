import { ArrowRight, Dumbbell, MapPin, Zap } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import heroImage from "../assets/hero.png";
import powerText from "../assets/POWER YOUR PONTETIALE.png";
import heroBgVector from "../assets/Subtract.svg";
import CustomPattern from "./CustomPattern";

const HeroSection = () => {
  return (
    <section
      className="relative w-full max-w-7xl mx-auto overflow-hidden"
      style={{ minHeight: "clamp(500px, 90vh, 950px)" }}
    >
      <img
        src={heroBgVector}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover lg:object-fill z-0 select-none pointer-events-none"
      />


      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-[#7ac231]/20 rounded-full blur-[100px] pointer-events-none lg:hidden animate-soft-pulse z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[250px] h-[250px] bg-[#7ac231]/10 rounded-full blur-[80px] pointer-events-none lg:hidden animate-soft-pulse z-0" />


      <div
        className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
        style={{
          maskImage: "none",
          WebkitMaskImage: "none",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @media (min-width: 768px) {
            .hero-athlete-mask {
              mask-image: url(${heroBgVector});
              -webkit-mask-image: url(${heroBgVector});
            }
          }
        `,
          }}
        />
        <div className="hero-athlete-mask absolute inset-0 ">
          <img
            src={heroImage}
            alt="Bodybuilders"
            className="absolute bottom-50 md:-bottom-18 right-[-15%] md:right-1 h-[65%] md:h-[105%] w-auto object-contain object-bottom opacity-80 md:opacity-80 transition-all duration-700 hover:scale-105"
          />
        </div>
      </div>


      <div className="absolute  inset-0 z-[2] pointer-events-none flex items-center justify-center lg:justify-end px-6  lg:pr-[13%]">
        <img
          src={powerText}
          alt="Power Your Potential"
          className="w-[67%] md:w-[42%] lg:w-[70%] h-auto object-contain opacity-95 mix-blend-screen translate-y-[20%] md:translate-y-30 
          md:translate-x-39
          scale-110 md:scale-90 animate-glow-pulse"
        />
      </div>


      <div className="lg:hidden absolute top-[15%] right-[10%] z-[5] opacity-20 text-white animate-float pointer-events-none">
        <Zap size={40} strokeWidth={1} />
      </div>
      <div className="lg:hidden absolute bottom-[30%] left-[5%] z-[5] opacity-15 text-white animate-float-delayed pointer-events-none">
        <Dumbbell size={50} strokeWidth={1} />
      </div>

      <div
        className="relative z-10 flex flex-col justify-between h-full"
        style={{ minHeight: "clamp(500px, 90vh, 950px)" }}
      >

        <div className="pt-24 md:pt-40 px-6 md:px-14 lg:p w-full lg:w-fit flex flex-col items-center lg:items-start justify-center lg:justify-start gap-3">
          <div className="flex items-center flex-wrap gap-3 md:gap-4 text-white/70 bg-white/5 md:bg-transparent px-5 py-3 md:p-0 rounded-2xl backdrop-blur-xl md:backdrop-blur-none border border-white/20 md:border-none shadow-2xl">
            <span className="text-white font-bold tracking-widest text-base md:text-2xl whitespace-nowrap">
              Follow On:
            </span>
            <FaFacebookF
              size={20}
              className="cursor-pointer hover:text-[#7ac231] transition-colors"
            />
            <FaInstagram
              size={20}
              className="cursor-pointer hover:text-[#7ac231] transition-colors"
            />
            <BsTwitterX
              size={20}
              className="cursor-pointer hover:text-[#7ac231] transition-colors"
            />
            <FaLinkedinIn
              size={20}
              className="cursor-pointer hover:text-[#7ac231] transition-colors"
            />
          </div>

          <CustomPattern
            className="opacity-100 mt-1"
            rotation={18}
            matrix={[
              [0, 0, 0, 0, 1, 0],
              [1, 0, 0, 1, 0, 1, 1],
              [0, 1, 1, 0, 1],
              [0, 1, 0, 1, 1, 0, 1],
            ]}
            color="white"
          />
        </div>


        <div className="pb-20 px-6 md:px-14 lg:px-14 flex flex-row flex-wrap gap-3 md:ml-40 md:gap-5 items-center justify-center  relative">
          <button className="h-[60px] md:h-[70px] lg:h-[80px] px-6 md:px-10 bg-[#050505] lg:bg-black/40 border border-white text-white rounded-[16px] md:rounded-[20px] flex items-center gap-3 text-[13px] md:text-[20px] font-bold tracking-widest uppercase hover:text-[#7ac231] hover:border-[#7ac231] transition-all backdrop-blur-xl shadow-2xl whitespace-nowrap group overflow-hidden relative">
            <span className="relative z-10 flex items-center gap-3">
              SHOP NOW{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
          </button>
          <button className="w-[60px] md:w-[80px] lg:w-[90px] h-[60px] md:h-[70px] lg:h-[80px] bg-[#050505] lg:bg-black/40 border border-white border text-white rounded-[16px] md:rounded-[20px] flex items-center justify-center hover:text-[#7ac231] hover:border-[#7ac231] transition-all backdrop-blur-xl shadow-2xl shrink-0 animate-soft-pulse">
            <MapPin size={30} strokeWidth={1} />
          </button>
        </div>
      </div>


      <CustomPattern
        className="hidden lg:block absolute top-32 right-1 z-20 opacity-40 
      pointer-events-none"
        rotation={0}
        matrix={[
          [1, 1, 1, 0],
          [1, 1, 0],
          [1, 1, 0],
          [1, 1, 1, 0],
          [0, 1],
        ]}
        color="white"
      />
    </section>
  );
};

export default HeroSection;
