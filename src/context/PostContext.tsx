import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from '../utils/axios';

interface Post {
  id: string;
  title: string;
  description: string;
  tags: { tag: string }[];
}

interface PostContextType {
  posts: Post[];
  tags: string[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  setPage: (page: number) => void;
  setTitle: (title: string) => void;
  setTag: (tag: string) => void;
  deletePost: (id: string) => void;
}

export const PostContext = createContext<PostContextType | undefined>(
  undefined
);

interface PostProviderProps {
  children: ReactNode;
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [tags, setTagsList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [tag, setTag] = useState<string>('');

  const fetchPosts = async () => {
    try {
      setPosts([]);

      const response = await axios.get('/posts', {
        params: {
          page: currentPage,
          title: title || undefined,
          tags: tag || undefined,
        },
      });

      setPosts(response.data.posts || []);
      setCurrentPage(response.data.current_page || 1);
      setTotalPages(response.data.total_page || 1);
      setPageSize(response.data.page_size || 10);
      setTotalItems(response.data.total || 0);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await axios.get('/posts/tags');
      setTagsList(response.data || []);
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage, title, tag]);

  useEffect(() => {
    fetchTags();
  }, []);

  const deletePost = async (id: string) => {
    try {
      await axios.delete(`/posts/${id}`);
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        tags,
        currentPage,
        totalPages,
        pageSize,
        totalItems,
        setPage: setCurrentPage,
        setTitle,
        setTag,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
