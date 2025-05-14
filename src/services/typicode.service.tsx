import type { PostType } from "../types/posts.type";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiRequest = async <T,>(endpoint: string, options?: RequestInit): Promise<T> => {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export const getPosts = (search: string) => {
  const params = { title_like: search, body_like: search };
  const queryParams = new URLSearchParams(params).toString();

  return apiRequest<PostType[]>('/posts' + (search.length ? `?${queryParams}` : ''));
}
