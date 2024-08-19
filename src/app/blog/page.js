import PostCard from "@/components/PostCard";


async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store', 
  });

  return res.json();
}

export default async function Blog() {
  const posts = await fetchPosts();

  return (
    <div className="container-fluid">
      <div className="row">
        
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <h1>Blog</h1>
          <div className="row">
            {posts.map(post => (
              <div className="col-md-4 mb-4" key={post.id}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
