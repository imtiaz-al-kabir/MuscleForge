import { Plus, Star } from "lucide-react";
import CustomPattern from "./CustomPattern";
import product1 from "../assets/products/1.png";
import product2 from "../assets/products/2.png";
import product3 from "../assets/products/3.png";
import product4 from "../assets/products/4.png";
import product5 from "../assets/products/5.png";
import product6 from "../assets/products/6.png";
const products = [
  {
    id: 1,
    name: "Mint flavor chocolate",
    price: "399.00",
    image: product1,
  
    textColor: "text-white",
  },
  {
    id: 2,
    name: "Mint flavor chocolate",
    price: "399.00",
    image: product2,
   
    textColor: "text-black",
  },
  {
    id: 3,
    name: "Mint flavor chocolate",
    price: "399.00",
    image: product3,
  
    textColor: "text-black",
  },
  {
    id: 4,
    name: "Mint flavor chocolate",
    price: "399.00",
    image: product4,
    
    textColor: "text-black",
  },
  {
    id: 5,
    name: "Mint flavor chocolate",
    price: "399.00",
    image: product5,
   
    textColor: "text-black",
  },
  {
    id: 6,
    name: "Mint flavor chocolate",
    price: "399.00",
    image: product6,
   
    textColor: "text-black",
  },
];

const ProductsSection = () => {
  return (
    <section className="pt-20 px-4 md:px-8 max-w-[1700px] mx-auto w-full relative z-10">
      {/* Decorative Dots Pattern */}
      <CustomPattern className="absolute top-[30px] right-[10%] pointer-events-none" opacity={0.4} rotation={-90} 
       matrix={[
              [1,0,1,1],
              [0, 1, 0,  0],
              [1, 1, 1],  
              [1],
              [1]
              
            ]}
      
      />

      {/* Header */}
      <div className="mb-10 md:mb-10">
        <CustomPattern className="opacity-50 pl-30 mb-3 " 
        
         rotation={-90}
            matrix={[
              [1,0,1,1],
              [0, 1, 0,  0],
              [1, 1, 1],  
              [1],
              [1]
              
            ]}
            
        />
        <h2 className="text-[32px] md:text-[44px] font-heading font-black tracking-wide text-black mb-1 leading-tight">
          Our Products
        </h2>
        <p className="text-[#555] font-sans text-base md:text-lg tracking-wide">
          Fuel Your Workouts with Protein-Packed Nutrition
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#050505] rounded-[40px] p-4 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-[#1a1a1a]"
          >
            {/* Image Container with specific colored background */}
            <div
              className={`h-[320px] bg-black rounded-[32px] mb-8 relative flex items-center justify-center overflow-hidden`}
            >
              {/* Product Placeholder Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full z-100 object-cover rounded-[32px] shadow-sm drop-shadow-xl"
              />
            </div>

            {/* Product Details */}
            <div className="flex justify-between items-center px-4 pb-4">
              <div>
                <h4 className="text-white font-medium text-base mb-2">
                  {product.name}
                </h4>
                <div className="flex items-center gap-4">
                  <span className="text-white font-bold text-lg tracking-widest">
                    ₹{product.price}
                  </span>
                  <div className="flex gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={
                          i < 4
                            ? "text-brand fill-brand"
                            : "text-gray-600 fill-gray-600"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Add to cart perfectly squared green button */}
              <button className="w-14 h-14 bg-brand hover:bg-brand-dark rounded-2xl flex items-center justify-center transition-colors shrink-0 shadow-lg shadow-brand/20">
                <Plus
                  size={24}
                  className="text-white font-black"
                  strokeWidth={3}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
