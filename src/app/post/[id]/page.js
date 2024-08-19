import { notFound } from 'next/navigation';

async function fetchPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store', 
  });

  if (!res.ok) {
   
    notFound();
  }

  return res.json();
}

export default async function Post({ params }) {
  const post = await fetchPost(params.id);

  return (
    <>
      
      <div className="row">
        
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </main>
      </div>
      
    </>
  );
}
