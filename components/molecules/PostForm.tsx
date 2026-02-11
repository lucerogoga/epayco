'use client'

import { usePosts } from '@/contexts/PostContexts';
import { createPost, updatePost } from '@/services/post.service';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PostForm = ({ post }: { post?: any }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');
  const router = useRouter();
const { posts, setPosts } = usePosts();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (post) {
      await updatePost(post.id, { title, body });
      setPosts(posts.map(p =>
  p.id === post.id ? { ...p, title, body } : p
));
    } else {
      await createPost({ title, body });
      setPosts([{ id: Date.now(), title, body }, ...posts]);
    }

    router.push('/');
   // router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        className="w-full border p-2"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />

      <textarea
        className="w-full border p-2"
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Body"
      />

      <button className="bg-black text-white px-4 py-2 rounded">
        {post ? 'Update' : 'Create'}
      </button>
    </form>
  );
};