"use client"; 
import { useState } from 'react';
import Link from 'next/link';

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title text-primary">{post.title}</h5>
        <p className="card-text text-muted">{post.body.substring(0, 100)}...</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button onClick={handleLike} className="btn btn-outline-primary">
            👍 Like ({likes})
          </button>
          <Link href={`/with-sidebar/post/${post.id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
