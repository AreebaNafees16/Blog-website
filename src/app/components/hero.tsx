import Link from "next/link";
import { GiFallingLeaf } from "react-icons/gi";

export default function Hero() {
  return (
    <div>

      
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex items-center justify-center bg-lime-50"
        style={{ backgroundImage: "url('/fruit.web')" }}
      >
         {/* Leaf Icon */}
  <div className="absolute -top-9 -right-0">
  <GiFallingLeaf  className="text-[#003300] opacity-90 md:w-[500px] md:h-[500px] w-[200px] h-[200px]"/>
  
  </div>
        <div className="bg-[#e4f8b3] py-8 px-6 text-center w-[900px] mt-20">
          <h1 className="text-[#003300] text-5xl font-extrabold mb-6">
            Welcome to Healthy Diet Blog
          </h1>
          <p className="text-xl text-gray-700 font-sans mb-6 leading-relaxed max-w-2xl mx-auto">
          Discover the best tips, recipes, and advice for a healthier lifestyle.
            
          </p>
           <Link href="/blogs">
          <button className="bg-lime-50 px-6 py-3 rounded-md text-slate-900 font-bold hover:bg-lime-300 transition outline outline-lime-300">
            Discover Blogs
          </button>
          </Link>
        </div>
      </div>
           
    </div>
  );
}
