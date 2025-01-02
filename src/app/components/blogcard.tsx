// import Link from "next/link";

import Link from "next/link";

const posts = [
    {
      id: 1,
      title: "The Power of Leafy Greens",
      description: "Explore the health benefits of adding greens to your meals.",
      imageUrl: "/green-leafy-vegetables.jpg",
      date: "2024-12-20",
    },
    {
      id: 2,
      title: "Superfoods to Boost Immunity",
      description: "Discover foods that can strengthen your immune system.",
      imageUrl: "/superfoods.webp",
      date: "2024-12-18",
    },
    {
      id: 3,
      title: "Balancing Macronutrients",
      description: "A guide to carbs, proteins, and fats for a healthy diet.",
      imageUrl: "/Balancing Macronutrients.jpeg",
      date: "2024-12-15",
    },
    {
      id: 4,
      title: "Hydration and Health",
      description: "Why staying hydrated is essential for your body.",
      imageUrl: "/hydration.jpg",
      date: "2024-12-10",
    },
    {
      id: 5,
      title: "The Role of Fiber",
      description: "How fiber supports digestion and overall health.",
      imageUrl: "/Fiber.jpg",
      date: "2024-12-08",
    },
    {
      id: 6,
      title: "Meal Prepping Tips",
      description: "Save time and eat healthier with these meal prep strategies.",
      imageUrl: "/meal-prepping.jpg",
      date: "2024-12-05",
    },
    {
      id: 7,
      title: "Mindful Eating Habits",
      description: "Techniques to help you eat with intention and awareness.",
      imageUrl: "/mindful-eating.webp",
      date: "2024-12-01",
    },
    {
      id: 8,
      title: "Plant-Based Protein Sources",
      description: "Alternatives to meat for a balanced diet.",
      imageUrl: "/plant-based.jpg",
      date: "2024-11-28",
    },
    {
      id: 9,
      title: "Healthy Snacking Options",
      description: "Nutritious snacks that keep you energized.",
      imageUrl: "/Healthy-Snack-Options.jpg",
      date: "2024-11-25",
    },
  ];

{/* Blog Posts Section */}
<div className="container mx-auto p-6">
<h1 className="text-4xl font-bold mb-6">Healthy Diet Blog</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {posts.map(post => (
    <Link key={post.id} href={`/posts/${post.id}`}>
      <div className="block p-4 border rounded-lg shadow hover:shadow-lg transition">
      <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />

        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</p>
        <p className="text-gray-600 mt-2">{post.description}</p>
        <button

  className="block mt-4 text-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
>
  Read More
</button>
      </div>
    </Link>
  ))}
</div>
</div>

