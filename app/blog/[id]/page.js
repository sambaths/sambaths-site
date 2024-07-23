import { getPostData } from '../../../lib/blog';

export default async function BlogPost({ params }) {
  const postData = await getPostData(params.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-2">{postData.title}</h1>
          <p className="text-gray-600 mb-4">{postData.date}</p>
          <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          {/* Add navigation buttons and comments section here */}
        </div>
      </div>
    </div>
  );
}