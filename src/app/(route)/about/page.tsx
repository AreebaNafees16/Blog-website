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

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#003300]">Our Mission</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          At <span className="font-bold text-lime-400">Healthy Diet Blog</span>, our mission is to empower you with the knowledge, tips, and inspiration needed to make informed choices about your nutrition and overall well-being. We believe that a balanced diet can transform your life, boost your energy, and bring joy to your daily routine.
        </p>
      </section>

      {/* About the Author Section */}
      <section className="flex flex-wrap items-center mb-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/image.png"
            alt="Author"
            width={500}
            height={500}
            className="rounded-md shadow-lg mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 px-6 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold text-[#003300]">Enhanced Support Story</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
          In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients.
          </p>
        </div>
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