// export default PostPage;
"use client"
import { blogPosts } from "@/app/data/blogposts";
import CommentSection from '@/app/components/comment';
import { useParams } from 'next/navigation';


export default function Blogpost() {
  const { id } = useParams();


  // Find the post with the matching ID
  const post = blogPosts.find((post) => post.id === Number(id));

  // Show a 404 page if the post is not found
  if (!post) {
    return <p>Blog post not found.</p>;
  }


  return (
    <div className="container mx-auto p-6 bg-lime-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full md:h-96 rounded mb-6"
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose lg:prose-lg"></div>
        <CommentSection />
      </div>
    </div>
  );
}
