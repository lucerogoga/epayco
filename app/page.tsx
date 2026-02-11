'use client';

import { PostList } from "@/components/organisms/PostList";
import { usePosts } from "@/contexts/PostContexts";
import Link from 'next/link';

export default function Home() {
const { posts } = usePosts();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-900">
        Post-it Board 📝
      </h1>
      <Link
        href="/post/new"
        className="inline-block mb-6 px-4 py-2 bg-black text-white rounded"
      >
        + New Post
      </Link>
      </div>
      <PostList posts={posts.slice(0, 12)} />
    </div>
  );
}