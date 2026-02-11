import { Post } from '@/services/post.service';
import { PostCard } from '@/components/molecules/PostCard';

export const PostList = ({ posts }: { posts: Post[] }) => {
  const postsWithIds = posts.filter((post): post is Post & { id: number } => post.id != null);
  
  return (
    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      gap-6
    ">
      {postsWithIds.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};