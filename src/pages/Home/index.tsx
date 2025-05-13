import { Suspense, useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import PostsTable from '../../components/PostsTable'

import type { PostType } from '../../types/posts.type';

import * as TypicodeAPI from '../../services/typicode.service'

const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await TypicodeAPI.getPosts();

      setPosts(response);
    }

    fetchData();
  }, [])

  return (
    <Suspense fallback={<AiOutlineLoading3Quarters />}>
      <PostsTable data={posts} />
    </Suspense>
  );
};

export default Home
