import { FaAppleAlt, FaCarrot, FaClipboardList, FaHandsHelping, FaSpa, FaLeaf } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Expert Health Tips",
      description: "Get guidance from certified nutritionists and health experts.",
      icon: <FaAppleAlt className="text-5xl text-lime-300" />,
    },
    {
      id: 2,
      title: "Delicious Recipes",
      description: "Discover easy-to-make, nutritious recipes for every meal.",
      icon: <FaCarrot className="text-5xl text-lime-300" />,
    },
    {
      id: 3,
      title: "Meal Planning",
      description: "Plan your meals with personalized diet strategies.",
      icon: <FaClipboardList className="text-5xl text-lime-300" />,
    },
    {
      id: 4,
      title: "Community Support",
      description: "Join a community of like-minded individuals for support and motivation.",
      icon: <FaHandsHelping className="text-5xl text-lime-300" />,
    },
    {
      id: 5,
      title: "Wellness Blogs",
      description: "Read in-depth articles on mindfulness, fitness, and healthy living.",
      icon: <FaSpa className="text-5xl text-lime-300" />,
    },
    {
      id: 6,
      title: "Eco-Friendly Practices",
      description: "Learn how to live sustainably while maintaining a healthy diet.",
      icon: <FaLeaf className="text-5xl text-lime-300" />,
    },
  ];

  return (
    <div className="bg-lime-50 min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-[#003300] text-center mb-8">
          Features of Healthy Diet Blog
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Explore the benefits of our platform and how it can guide you on your journey to a healthier, happier life.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-lime-50 rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
