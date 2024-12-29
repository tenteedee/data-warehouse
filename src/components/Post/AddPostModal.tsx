import React, { useState } from 'react';

interface AddPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  tags: string[];
  onSave: (newPost: {
    title: string;
    description: string;
    tags: string[];
  }) => void;
}

const AddPostModal: React.FC<AddPostModalProps> = ({
  isOpen,
  onClose,
  tags,
  onSave,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(
      (prevTags) =>
        prevTags.includes(tag)
          ? prevTags.filter((t) => t !== tag) // Xóa tag nếu đã chọn
          : [...prevTags, tag] // Thêm tag nếu chưa chọn
    );
  };

  const handleSave = () => {
    if (title.trim() && description.trim() && selectedTags.length > 0) {
      onSave({ title, description, tags: selectedTags });
      setTitle('');
      setDescription('');
      setSelectedTags([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter description"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <label key={tag} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                  className="mr-1"
                />
                {tag}
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPostModal;
