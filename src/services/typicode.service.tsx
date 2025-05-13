import type { PostType } from "../types/posts.type";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const apiRequest = async <T,>(endpoint: string, options?: RequestInit): Promise<T> => {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
};

export const getPosts = () => {
  return apiRequest<PostType[]>('/posts');
};
