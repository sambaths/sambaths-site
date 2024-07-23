import Link from 'next/link';
import { getSortedPostsData } from '../../lib/blog';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-6">Blog</h1>
          <ul className="space-y-4">
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/blog/${id}`}>
                  <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition duration-300">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-gray-600">{date}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {/* Add navigation buttons here */}
        </div>
      </div>
    </div>
  );
}