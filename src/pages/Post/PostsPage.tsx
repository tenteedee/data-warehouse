import Sidebar from '../../components/Post/Sidebar';
import FilterCategory from '../../components/Post/FilterCategory';
import PostTable from '../../components/Post/PostTable';
import { PostProvider } from '../../context/PostContext';

const PostPage = () => {
  return (
    <div className="flex h-screen">
      <PostProvider>
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50">
          <h1 className="text-2xl font-bold mb-4">Post Management</h1>
          <button className="bg-purple-500 text-white px-4 py-2 rounded mb-4">
            Add New
          </button>
          <FilterCategory />
          <PostTable />
        </div>
      </PostProvider>
    </div>
  );
};

export default PostPage;
