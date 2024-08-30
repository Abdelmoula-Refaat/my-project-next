import { fetchAllPosts } from '@/app/lib/route';
import PostCard from '@/components/PostCard';

export default async function Blog() {
  const posts = await fetchAllPosts();

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1>Blog</h1>
          <div className="row">
            {posts.map(post => (
              <div className="col-md-4 mb-4" key={post._id}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

