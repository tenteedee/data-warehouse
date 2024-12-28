import React, { useContext } from 'react';
import { PostContext } from '../../context/PostContext';

const FilterCategory: React.FC = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('Filter must be used within a PostProvider');
  }

  const { setTitle, setTags } = context;

  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-1/2"
      />
      <input
        type="text"
        placeholder="Tags"
        onChange={(e) => setTags(e.target.value)}
        className="border p-2 rounded w-1/2"
      />
    </div>
  );
};

export default FilterCategory;
