import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function POST(request) {
  const { title, body, imageUrl } = await request.json();

  if (!title || !body) {
    return NextResponse.json({ message: 'Title and body are required' }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db('my_next_app_db');
  const collection = db.collection('posts');

  try {
    const newPost = { title, body, imageUrl, id: Date.now() }; // Example ID generation
    await collection.insertOne(newPost);
    return NextResponse.json({ message: 'Post added successfully!' });
  } catch (error) {
    console.error('Error adding post:', error);
    return NextResponse.json({ message: 'Failed to add post' }, { status: 500 });
  }
}
