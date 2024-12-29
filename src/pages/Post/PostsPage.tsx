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
          <FilterCategory />
          <PostTable />
        </div>
      </PostProvider>
    </div>
  );
};

export default PostPage;
