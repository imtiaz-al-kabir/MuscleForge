import polygonDot from '../assets/Polygon.png';

const CustomPattern = ({ 
  className = '',
  matrix = [
    [1],
    [1, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0, 1]
  ],
  color = '#404040',
  rotation = 0,
  opacity = 1
}) => {
  return (
    <div 
      className={`flex flex-col gap-1 md:gap-2 w-fit overflow-hidden ${className}`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        opacity: opacity
      }}
    >
      {matrix.map((row, r) => (
        <div key={r} className="flex gap-1 md:gap-2">
          {row.map((isDot, c) => (
            isDot ? (
              <div 
                key={c} 
                className="w-[18px] h-[10px] md:w-[28px] md:h-[20px] shrink-0 transition-colors duration-300" 
                style={{
                  backgroundColor: color,
                  maskImage: `url(${polygonDot})`,
                  WebkitMaskImage: `url(${polygonDot})`,
                  maskSize: '110% 110%',
                  WebkitMaskSize: '110% 110%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat'
                }} 
              />
            ) : (
              <div key={c} className="w-[18px] h-[10px] md:w-[37px] md:h-[22px] shrink-0" />
            )
          ))}
        </div>
      ))}
    </div>
  );
};

export default CustomPattern;
