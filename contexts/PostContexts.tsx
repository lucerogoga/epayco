'use client';

import { createContext, useContext, useState } from 'react';
import { Post, PostContextType, PostProviderProps } from '@/types/post';

const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children, initialPosts }: PostProviderProps) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  const ctx = useContext(PostContext);
  if (!ctx) throw new Error('usePosts must be inside PostProvider');
  return ctx;
};
