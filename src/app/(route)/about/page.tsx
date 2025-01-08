import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12 bg-lime-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#003300]">About Us</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Your ultimate guide to embracing a healthier and happier lifestyle.
        </p>
      </div>

{/* Section 1 - Left Image, Right Text */}
<section className="flex flex-wrap items-center mb-12 relative">
  <div className="w-full md:w-1/2">
    <Image
      src="/Image1.png"
      alt="Mission"
      width={400}
      height={400}
      className="rounded-md shadow-lg mx-auto"
    />
  </div>
  <div className="w-full md:w-1/2 px-6 mt-6 md:mt-0">
    <h2 className="text-2xl font-semibold text-[#003300]">Our Vision</h2>
    <p className="mt-4 text-gray-700 leading-relaxed">
      At Healthy Diet, our vision is to inspire individuals to embrace a healthier lifestyle by making informed food choices that nourish both body and mind. We aim to build a supportive community where wellness is a priority, and balanced nutrition is accessible to everyone. By promoting sustainable habits, we envision a future where healthy living becomes second nature, enhancing the quality of life for people across all walks of life.
    </p>
  </div>
  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-2 bg-lime-400 md:block hidden"></div>
</section>

{/* Section 2 - Right Image, Left Text */}
<section className="flex flex-wrap items-center mb-12 relative">
  <div className="w-full md:w-1/2 px-6 mt-6 md:mt-0 order-2 md:order-1">
    <h2 className="text-2xl font-semibold text-[#003300]">Continued Growth</h2>
    <p className="mt-4 text-gray-700 leading-relaxed">
    At Healthy Diet, we are dedicated to evolving alongside the ever-changing world of nutrition. By continuously learning, adapting, and sharing the latest insights, we aim to inspire healthier choices and lasting wellness for our community.
    </p>
  </div>
  <div className="w-full md:w-1/2 order-1 md:order-2">
    <Image
      src="/Image2.png"
      alt="Commitment"
      width={400}
      height={400}
      className="rounded-md shadow-lg mx-auto"
    />
  </div>
  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-2 bg-lime-400 md:block hidden"></div>
</section>

{/* Section 3 - Left Image, Right Text */}
<section className="flex flex-wrap items-center mb-12 relative">
  <div className="w-full md:w-1/2">
    <Image
      src="/Image.png"
      alt="Support"
      width={400}
      height={400}
      className="rounded-md shadow-lg mx-auto"
    />
  </div>
  <div className="w-full md:w-1/2 px-6 mt-6 md:mt-0">
    <h2 className="text-2xl font-semibold text-[#003300]">Enhanced Support Story</h2>
    <p className="mt-4 text-gray-700 leading-relaxed">
      In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients.
    </p>
  </div>
  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-2 bg-lime-400 md:block hidden"></div>
</section>

{/* Section 4 - Right Image, Left Text */}
<section className="flex flex-wrap items-center mb-12 relative">
  <div className="w-full md:w-1/2 px-6 mt-6 md:mt-0 order-2 md:order-1">
    <h2 className="text-2xl font-semibold text-[#003300]">Our Future Goals</h2>
    <p className="mt-4 text-gray-700 leading-relaxed">
    At Healthy Diet Blog, we are committed to inspiring healthier lifestyles around the world. Our future goals include expanding our content to cover a wider range of wellness topics, building a supportive community, and creating interactive tools that help people make better food choices. We aim to empower individuals to lead balanced, happy, and nutritious lives through reliable and actionable guidance.
      
    </p>
  </div>
  <div className="w-full md:w-1/2 order-1 md:order-2">
    <Image
      src="/Image4.png"
      alt="Future Goals"
      width={400}
      height={400}
      className="rounded-md shadow-lg mx-auto"
    />
  </div>
  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-2 bg-lime-400 md:block hidden"></div>
</section>


      {/* Call-to-Action Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text[#003300]">Join Our Community</h2>
        <p className="mt-4 text-gray-700">
          We’re on a journey to spread health and happiness, one plate at a time. Stay connected for recipes, tips, and more!
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 text-slate-900 py-2 px-6 rounded-lg shadow hover:bg-lime-300 outline outline-lime-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
