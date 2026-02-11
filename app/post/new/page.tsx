import { PostForm } from '@/components/molecules/PostForm';

export default function NewPost() {
  return (
    <div className="p-8">
      <h1 className="text-xl mb-4">New Post</h1>
      <PostForm />
    </div>
  );
}