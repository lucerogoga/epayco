'use client'
import { deletePost } from '@/services/post.service';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePosts } from '@/contexts/PostContexts';
import { Post } from '@/types/post';

const colors = [
  'bg-yellow-200',
  'bg-blue-200',
  'bg-green-200',
  'bg-pink-200'
];

const rotations = [
  'rotate-[-2deg]',
  'rotate-[1deg]',
  'rotate-[2deg]'
];

export const PostCard = ({ post }: { post: Post & { id: number } }) => {
  const color = colors[post.id % colors.length];
const { posts, setPosts } = usePosts();

  const rotation = rotations[post.id % rotations.length];

  const router = useRouter();

  const handleDelete = async () => {
    await deletePost(post.id);
   // router.refresh(); // recarga SSR
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div
      className={`
        ${color}
        p-4 rounded-lg shadow-md
         ${rotation}
        hover:rotate-0
        transition-transform
      `}
    >
      <h2 className="font-bold mb-2 text-gray-900">{post.title}</h2>
      <p className="text-sm text-gray-700">{post.body}</p>

      <div className="mt-4 flex gap-2">
        <Link
  href={`/post/${post.id}`}
  className="text-xs text-blue-400 bg-white px-2 py-1 rounded hover:bg-blue-50"
>
  Edit
</Link>
        <button className="text-xs text-red-500 bg-white px-2 py-1 rounded hover:bg-red-50" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};