// import clientPromise from './mongodb';

// export async function fetchPostByID(id) {

//   if (typeof id !== 'string') {
//     console.error('Invalid post ID:', id);
//     throw new Error('Invalid post ID');
//   }

 
//   const numericId = parseInt(id, 10);

  
//   if (isNaN(numericId)) {
//     console.error('Invalid numeric ID:', id);
//     throw new Error('Invalid numeric ID');
//   }

//   const client = await clientPromise;
//   const db = client.db('my_next_app_db');
//   const collection = db.collection('posts');

  
//   const post = await collection.findOne({ id: numericId });

//   if (!post) {
//     throw new Error('Post not found');
//   }

//   return post;
// }
