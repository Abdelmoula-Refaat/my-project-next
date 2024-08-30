import clientPromise from './mongodb';
import { notFound } from 'next/navigation';


export async function fetchAllPosts() {
  const client = await clientPromise;
  const db = client.db('my_next_app_db');
  const posts = await db.collection('posts').find({}).toArray();
  return posts;
}


export async function fetchPostByID(id) {
  if (typeof id !== 'string') {
    console.error('Invalid post ID:', id);
    throw new Error('Invalid post ID');
  }

  const numericId = parseInt(id, 10);

  if (isNaN(numericId)) {
    console.error('Invalid numeric ID:', id);
    throw new Error('Invalid numeric ID');
  }

  const client = await clientPromise;
  const db = client.db('my_next_app_db');
  const collection = db.collection('posts');

  const post = await collection.findOne({ id: numericId });

  if (!post) {
    
    notFound(); 
  }

  return post;
}
