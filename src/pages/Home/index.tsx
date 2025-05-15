import { useCallback, useEffect, useState } from 'react'

import type { PostType } from '../../types/posts.type'

import * as TypicodeAPI from '../../services/typicode.service'

import PostsTable from '../../components/PostsTable'
import Input from '../../components/Input'
import useDebounce from '../../hooks/useDebounce'
import EmptyData from '../../components/EmptyData'

const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const pageSize = 12

  const totalPages = Math.ceil(posts.length/pageSize)
  const paginetedPosts = posts.slice(currentPage * pageSize, (currentPage + 1) * pageSize) 

  const handlePostsRequest = useCallback(async (search: string = '') => {
    setIsLoading(true)
    const response = await TypicodeAPI.getPosts(search)

    setPosts(response)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    handlePostsRequest()
  }, [handlePostsRequest])

  const debouncedSearch = useDebounce(handlePostsRequest, 500)

  const handleSearch = (search: string) => {
    debouncedSearch(search)
    setCurrentPage(0)
  }

  const Loading = () => {
    return <h2 className='text-gray-300'>🌀 Loading...</h2>
  }

  return (
    <div className='w-full flex-col'>
        <div className='mb-5'>
          <Input onChange={handleSearch} />
        </div>
        {isLoading ? <Loading /> : posts.length ? (
        <>
          <PostsTable data={paginetedPosts} /> 
          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`px-2 py-1/2 rounded ${
                  currentPage === index
                    ? 'bg-[#5db6e3] text-[#151a53]'
                    : 'bg-gray-200 text-gray-400 hover:bg-blue-100'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>)
        : <EmptyData />}
      </div>
  );
};

export default Home
