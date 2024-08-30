"use client"; 
import { useParams } from 'next/navigation';

export default function CatchAll() {
  const { slug } = useParams(); 

  return (
    <div className="container mt-4">
      <h1>All Routes</h1>
      <ul className="list-group">
        {slug && slug.length > 0 ? (
          slug.map((route, index) => (
            <li key={index} className="list-group-item">
              {route}
            </li>
          ))
        ) : (
          <li className="list-group-item">No routes found.</li>
        )}
      </ul>
    </div>
  );
}
