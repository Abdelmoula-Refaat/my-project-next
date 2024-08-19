"use client"; 
import { useState } from 'react';
import Link from 'next/link';

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <button onClick={handleLike} className="btn btn-primary">
          Like ({likes})
        </button>
        <Link href={`/post/${post.id}`} className="btn btn-secondary ms-2">
          Read More
        </Link>
      </div>
    </div>
  );
}
