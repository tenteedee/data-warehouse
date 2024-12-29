import React, { useContext, useState } from 'react';
import { PostContext } from '../../context/PostContext';
import AddPostModal from './AddPostModal';
import axios from '../../utils/axios';

const Filter: React.FC = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('Filter must be used within a PostProvider');
  }

  const { setTitle, setTag, tags, setPage } = context;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleSaveNewPost = async (newPost: {
    title: string;
    description: string;
    tags: string[];
  }) => {
    try {
      await axios.post('/posts', newPost);
      setIsAddModalOpen(false);
      setPage(1);
      window.location.reload();
    } catch (error) {
      console.error('Error adding new post:', error);
    }
  };

  return (
    <div className="flex gap-4 mb-4 justify-between">
      <button
        onClick={openAddModal}
        className="w-[252px] h-[58px] bg-[#9C69E2] text-white px-4 py-2 rounded-[58px] mb-4"
      >
        Add New
      </button>
      <div className="flex gap-5">
        <input
          type="text"
          placeholder="Search by Title"
          onChange={(e) => {
            setTitle(e.target.value);
            setPage(1);
          }}
          className="w-[368px] h-[49px] border p-2 rounded"
        />

        <select
          onChange={(e) => {
            setTag(e.target.value);
            setPage(1);
          }}
          className="w-[368px] h-[49px] border p-2 rounded"
        >
          <option value="">All Tags</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Add Post Modal */}
      <AddPostModal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        tags={tags}
        onSave={handleSaveNewPost}
      />
    </div>
  );
};

export default Filter;
