import { Suspense, useCallback, useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import type { PostType } from '../../types/posts.type'

import * as TypicodeAPI from '../../services/typicode.service'

import PostsTable from '../../components/PostsTable'
import Input from '../../components/Input'
import useDebounce from '../../hooks/useDebounce'
import EmptyData from '../../components/EmptyData'

const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([])

  const handlePostsRequest = useCallback(async (search: string = '') => {
    const response = await TypicodeAPI.getPosts(search)

    setPosts(response)
  }, [])

  useEffect(() => {
    handlePostsRequest()
  }, [handlePostsRequest])

  const debouncedSearch = useDebounce(handlePostsRequest, 500)

  const handleSearch = (search: string) => {
    debouncedSearch(search)
  }

  return (
    <Suspense fallback={<AiOutlineLoading3Quarters />}>
      <div className='w-full flex-col'>
        <div className='mb-5'>
          <Input onChange={handleSearch} />
        </div>
        {posts.length ? <PostsTable data={posts} /> : <EmptyData />}
      </div>
    </Suspense>
  );
};

export default Home
