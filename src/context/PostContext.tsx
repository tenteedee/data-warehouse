// src/context/PostContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from '../utils/axios';

interface Post {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

interface PostContextType {
  posts: Post[];
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  setTitle: (title: string) => void;
  setTags: (tags: string) => void;
  deletePost: (id: number) => void;
}

export const PostContext = createContext<PostContextType | undefined>(
  undefined
);

interface PostProviderProps {
  children: ReactNode;
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [title, setTitle] = useState<string>('');
  const [tags, setTags] = useState<string>('');

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`/posts?title=${title}&page=${page}`);
      setPosts(response.data.posts);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page, title, tags]);

  const deletePost = async (id: number) => {
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
        page,
        totalPages,
        setPage,
        setTitle,
        setTags,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
