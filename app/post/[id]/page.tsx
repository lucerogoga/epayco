import { getPost } from '@/services/post.service';
import { PostForm } from '@/components/molecules/PostForm';

export default async function EditPost({ params }: { params: { id: string } }) {
  const paramsData = await params;
  const post = await getPost(Number(paramsData.id));

  return (
    <div className="p-8">
      <h1 className="text-xl mb-4">Edit Post</h1>
      <PostForm post={post} />
    </div>
  );
}