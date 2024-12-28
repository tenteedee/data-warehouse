import React, { useContext } from 'react';
import { PostContext } from '../../context/PostContext';

const PostTable: React.FC = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('PostTable must be used within a PostProvider');
  }

  const { posts, page, totalPages, setPage, deletePost } = context;

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.description}</td>
              <td>{post.tags.join(', ')}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostTable;
