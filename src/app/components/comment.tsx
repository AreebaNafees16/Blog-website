"use client";

import { useState } from 'react';

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

export default function Comment()  {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && author.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author,
        content: newComment,
        date: new Date().toISOString(),
      };
      setComments([...comments, comment]);
      setNewComment('');
      setAuthor('');
    }
  };

  return (
    <div className="mt-12 bg-lime-50">
      <h2 className="text-2xl font-bold mb-4 text-[#003300]">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
          className="w-full p-2 mb-4 border rounded focus:ring-2 focus:ring-lime-400 focus:outline-none"
          required
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 mb-4 border rounded focus:ring-2 focus:ring-lime-400 focus:outline-none"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-lime-400 text-black px-4 py-2 rounded hover:bg-lime-500 transition duration-300"
        >
          Post Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{comment.author}</span>
              <span className="text-gray-500 text-sm">{new Date(comment.date).toLocaleString()}</span>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

