export type Post = {
  id?: number;
  title: string;
  body: string;
  userId?: number;
};

export type PostContextType = {
  posts: Post[];
  setPosts: (p: Post[]) => void;
};
export type PostProviderProps = {
  children: React.ReactNode;
  initialPosts: Post[];
};