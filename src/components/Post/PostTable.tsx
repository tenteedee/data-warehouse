import React, { useContext, useState } from 'react';
import { PostContext } from '../../context/PostContext';
import { Pencil, Trash2 } from 'lucide-react';
import EditPostModal from './EditPostModal';
import axios from '../../utils/axios';

const PostTable: React.FC = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('PostTable must be used within a PostProvider');
  }

  const { posts, currentPage, totalPages, setPage, deletePost } = context;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<{
    id: string;
    title: string;
    description: string;
    tags: { tag: string }[];
  } | null>(null);

  const openEditModal = (post: typeof editingPost) => {
    setEditingPost(post);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingPost(null);
  };

  const handleSaveEdit = async (
    id: string,
    updatedPost: { title: string; description: string }
  ) => {
    try {
      await axios.patch(`/posts/${id}`, updatedPost);
      setIsEditModalOpen(false);
      setEditingPost(null);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`px-3 py-1 border rounded ${
            i === currentPage ? 'bg-[#9C69E2] text-white' : 'bg-white'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 table-fixed">
        <thead className="bg-gray-100">
          <tr>
            <th className="w-2/12 px-2 py-2 border">ID</th>
            <th className="w-2/12 px-2 py-2 border">Title</th>
            <th className="w-2/12 px-2 py-2 border">Description</th>
            <th className="w-2/12 px-2 py-2 border">Tags</th>
            <th className="w-1/12 px-2 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="px-2 py-2 border">{post.id}</td>
              <td className="px-2 py-2 border">{post.title}</td>
              <td className="px-2 py-2 border">{post.description}</td>
              <td className="px-2 py-2 border">
                <div className="flex flex-wrap gap-1">
                  {post.tags
                    .map((tag) => (typeof tag === 'string' ? tag : undefined))
                    .join(', ')}
                </div>
              </td>

              <td className="px-2 py-2 border">
                <div className="flex justify-center gap-10">
                  <button
                    onClick={() => openEditModal(post)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center gap-2 mt-4">
        {renderPageNumbers()}
      </div>

      <EditPostModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        post={editingPost}
        onSave={handleSaveEdit}
      />
    </div>
  );
};

export default PostTable;
