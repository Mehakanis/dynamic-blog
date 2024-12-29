"use client";

import blogs from "@/data/blogs";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation"; // Import useParams for dynamic routing

export default function BlogPost() {
  const { id } = useParams(); // Retrieve dynamic ID from the route

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [nameInput, setNameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");

  // Fetch comments from localStorage
  useEffect(() => {
    if (id) {
      const storedComments = localStorage.getItem(`comments-${id}`);
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    }
  }, [id]);

  // Convert `id` from string to number
  const blog = blogs.find((post) => post.id === parseInt(id as string, 10));

  if (!blog) {
    return <h1 className="text-center text-2xl mt-8">Blog not found</h1>;
  }

  // Save comments to localStorage
  const saveCommentsToLocalStorage = (newComments: { name: string; comment: string }[]) => {
    localStorage.setItem(`comments-${id}`, JSON.stringify(newComments));
  };

  const handleCommentSubmit = () => {
    if (nameInput.trim() && commentInput.trim()) {
      const newComment = { name: nameInput, comment: commentInput };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      saveCommentsToLocalStorage(updatedComments); // Persist to localStorage
      setNameInput("");
      setCommentInput("");
    }
  };

  return (
    <main className="max-w-screen-lg mx-auto py-8 content-center border-b-2 border-[#3333] pb-14 ml-5 md:ml-0">
      <h1 className="text-3xl md:text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-600 mt-2">
        {blog.author} - {blog.readTime}
      </p>
      <div className="mt-4">
        <Image
          src={blog.image}
          alt={blog.title}
          width={500}
          height={500}
          className="w-[80%] h-auto object-cover pt-6"
        />
      </div>
      <p className="mt-6 text-base md:text-lg text-gray-800">{blog.description}</p>
      <h1 className="text-2xl md:text-3xl font-bold pt-4">{blog.subheading1}</h1>
      <p className="text-base md:text-lg text-gray-800">{blog.description1}</p>
      <h1 className=" text-2xl md:text-3xl font-bold pt-4">{blog.subheading2}</h1>
      <p className="text-base md:text-lg text-gray-800">{blog.description2}</p>

      {/* Comment Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <div className="mt-4">
          {comments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            <ul className="space-y-4">
              {comments.map((entry, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded">
                  <p className="font-bold">{entry.name}</p>
                  <p>{entry.comment}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-6">
          <input
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Your name"
            className="w-full p-2 border rounded mb-2"
          />
          <textarea
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 border rounded"
          />

          <button
            onClick={handleCommentSubmit}
            className="mt-2 bg-[#FFB6C1] text-[#333333] py-2 px-4 rounded"
          >
            Post Comment
          </button>
        </div>
      </div>
    </main>
  );
}
