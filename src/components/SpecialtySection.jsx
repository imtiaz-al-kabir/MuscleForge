import vectorBg from "../assets/Vector.png";
import yoga1 from "../assets/yoga1.png";
import yoga2 from "../assets/yoga2.png";
import yoga3 from "../assets/yoga3.png";
import CustomPattern from "./CustomPattern";

const SpecialtySection = () => {
  return (
    <div className="relative xl:absolute xl:top-[280px] xl:-left-1 z-30 w-full xl:w-[290px] pt-10 xl:pt-4 px-4 xl:px-0 flex justify-center xl:justify-start">
      <div className="relative w-full max-w-[376px] min-h-[540px] md:h-[500px] p-6 md:p-8 pb-10 flex flex-col justify-center xl:left-4">
        {/* Background Image  */}
        <div className="absolute inset-0 z-0 drop-shadow-2xl overflow-hidden rounded-[30px] md:rounded-none">
          <img
            src={vectorBg}
            alt="Sidebar Background"
            className="absolute inset-0 w-full h-full object-fill"
          />
        </div>

        <div className="relative z-10">
          <CustomPattern
            className="absolute top-1 -left-4"
            opacity={0.4}
            matrix={[
              [0, 1],
              [1, 1, 1, 1],
              [1, 1, 1, 0, 1, 0],
              [0, 0, 1, 1, 0, 1],
            ]}
            color="black"
          />

          <h3 className="text-white font-heading font-black text-[24px] md:text-[24px] uppercase tracking-[0.2em] mt-32 md:mt-35 mb-6 md:mb-8 w-full leading-tight pl-2 drop-shadow-lg">
            OUR <span className="text-white/80">SPECIALTY</span>
          </h3>

          <div className="flex flex-col gap-4 ">
            <div className="bg-white/5 hover:bg-white/20 h-[60px] md:h-[85px] transition-all duration-300 border border-white/20 rounded-[20px] flex items-center gap-2 cursor-pointer group backdrop-blur-md shadow-lg hover:shadow-white/5">
              <div className="size-[45px] md:size-[50px] flex items-center justify-center rounded-[14px] bg-white/10 group-hover:bg-white/30 transition-all ml-4 duration-500 shrink-0 border border-white/20 animate-float">
                <img
                  src={yoga2}
                  alt="Ground running"
                  className="size-6 md:size-8 object-contain"
                />
              </div>
              <span className="text-white font-medium text-lg md:text-[16px] tracking-wide">
                Ground running
              </span>
            </div>

            <div
              className="bg-white/5 hover:bg-white/20 h-[60px] md:h-[85px] transition-all duration-300 border border-white/20 rounded-[20px] flex items-center gap-2 cursor-pointer group 
            backdrop-blur-md shadow-lg hover:shadow-white/5"
            >
              <div className="size-[45px] md:size-[50px] flex items-center ml-4 justify-center rounded-[14px] bg-white/10 group-hover:bg-white/30 transition-all duration-500 shrink-0 border border-white/20 animate-float-delayed">
                <img
                  src={yoga1}
                  alt="Yoga Assistance"
                  className="size-6 md:size-8 object-contain"
                />
              </div>
              <span className="text-white font-medium text-lg md:text-[16px] tracking-wide">
                Yoga Assistance
              </span>
            </div>

            <div
              className="bg-white/5 hover:bg-white/20 h-[60px] md:h-[80px] transition-all duration-300 border border-white/20 rounded-[20px] p-1 flex items-center gap-2 cursor-pointer group backdrop-blur-md shadow-lg
            rounded-b-[50px] : 0.5rem (8px)
            hover:shadow-white/5"
            >
              <div className="size-[45px] md:size-[50px] flex items-center justify-center rounded-[14px] bg-white/10 group-hover:bg-white/30 transition-all ml-4 duration-500 shrink-0 border border-white/20 animate-float">
                <img
                  src={yoga3}
                  alt="Yoga icon 3"
                  className="size-6 md:size-8 object-contain"
                />
              </div>
              <span className="text-white font-medium text-lg md:text-[16px] tracking-wide">
                Personal Trainer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtySection;
