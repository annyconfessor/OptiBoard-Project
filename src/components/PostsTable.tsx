import PostItem from "./PostItem";

import type { PostType } from "../types/posts.type";

interface PostsTableProps {
  data: PostType[]
};

export default function PostsTable({ data }: PostsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 max-w-4xl">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:px-6">ID</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:px-6">Título</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:px-6">Descrição</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((post) => (
            <PostItem key={`post-${post.id}`} {...post} />
          ))}
        </tbody>
      </table>
    </div>
  )
};
