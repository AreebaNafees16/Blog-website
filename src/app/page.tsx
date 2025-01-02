import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Feature from "./components/feature";

export default function Home() {
  return (
    <div className=" bg-lime-50">
      
      <Hero />
    <Feature />
    </div>
  );
}
