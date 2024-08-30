// app/with-sidebar/[...all].js

import Link from 'next/link';

export default function CatchAll({ params }) {
  return (
    <div>
      <h1>All Routes</h1>
      <ul>
        {params.all.map((route, index) => (
          <li key={index}>
            <Link href={`/${route}`}>
              {route}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
