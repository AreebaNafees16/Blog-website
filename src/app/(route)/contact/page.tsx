export default function Contact() {
    return (
      <div className="container mx-auto p-6 bg-lime-50 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section: About the Blog */}
          <div className="p-8">
            <h2 className="text-4xl font-bold text-[#003300] mb-6">Healthy Diet Blog</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Welcome to the <strong>Healthy Diet Blog</strong>, your go-to resource for living a healthier, more balanced life. Our mission is to educate, motivate, and inspire individuals to embrace nutritious eating habits and holistic well-being.
            </p>
            <h3 className="text-2xl font-semibold text-slate-800 mt-4 mb-2">What We Offer:</h3>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Expert tips on balanced diets and nutrition.</li>
              <li>Easy-to-follow recipes for every meal.</li>
              <li>Insights into the latest health trends.</li>
              <li>Practical advice for achieving your wellness goals.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-slate-800 mt-4 mb-2">Get in Touch</h3>
            <p className="text-gray-700">
              Whether you have questions, suggestions, or just want to share your thoughts, we're here to listen. Fill out the form, and we’ll get back to you as soon as possible!
            </p>
          </div>
  
          {/* Right Section: Contact Form */}
          <div className="bg-lime-50 p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-[#003300] mb-6">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-lime-400 text-black font-bold py-3 px-4 rounded-lg hover:bg-lime-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  