import { fetchPostByID, fetchAllPosts } from '@/app/lib/route';
import Link from 'next/link';
import Image from 'next/image';

export default async function Post({ params }) {
  const postId = params.id;

  if (typeof postId !== 'string') {
    throw new Error('Invalid post ID parameter');
  }

  const post = await fetchPostByID(postId);
  const posts = await fetchAllPosts();

  const currentIndex = posts.findIndex(p => p.id === post.id);
  const nextPost = posts[currentIndex + 1];
  const prevPost = posts[currentIndex - 1];

  return (
    <div className="container my-4">
      <div className="card shadow-sm border-light" style={{ maxWidth: '600px', margin: 'auto' }}>
        <Image 
          src={post.imageUrl} 
          alt={post.title} 
          width={600} 
          height={400} 
          className="card-img-top" 
          style={{ objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h2 className="card-title mb-3">{post.title}</h2>
          <p className="card-text">{post.body}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          {prevPost && (
            <Link href={`/with-sidebar/post/${prevPost.id}`} className="btn btn-outline-primary btn-sm">
              <i className="bi bi-arrow-left"></i> Previous
            </Link>
          )}
          {nextPost && (
            <Link href={`/with-sidebar/post/${nextPost.id}`} className="btn btn-outline-secondary btn-sm">
              Next <i className="bi bi-arrow-right"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
