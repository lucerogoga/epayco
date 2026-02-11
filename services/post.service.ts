import { Post } from "@/types/post";

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async (): Promise<Post[]> => {
  const res = await fetch(BASE_URL, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error('Error fetching posts');
  }

  return res.json();
};

export const createPost = async (data: Post): Promise<Post> => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error('Error creating post');
  }

  return res.json();
};

export const updatePost = async (id: number, data: Post): Promise<Post> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error('Error updating post');
  }

  return res.json();
};

export const deletePost = async (id: number): Promise<void> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });

  if (!res.ok) {
    throw new Error('Error deleting post');
  }
};

export const getPost = async (id: number): Promise<Post> => {
  console.log('Fetching post with id:', id);  
  const res = await fetch(`${BASE_URL}/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Error fetching post');
  }

  return res.json();
};