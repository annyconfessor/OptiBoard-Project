import PostItem from "./PostItem";

import type { PostType } from "../types/posts.type";

interface PostsTableProps {
  data: PostType[]
};

export default function PostsTable({ data }: PostsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-700 bg-[#2c3e47] shadow-lgmax-w-4xl">
      <table className="min-w-full">
        <thead className="bg-[#2c3e47]">
          <tr>
            <th className="px-3 py-3 text-left text-xs font-semibold text-[#ccfdfa] uppercase tracking-wider md:px-6">ID</th>
            <th className="px-3 py-3 text-left text-xs font-semibold text-[#ccfdfa] uppercase tracking-wider md:px-6">Título</th>
            <th className="px-3 py-3 text-left text-xs font-semibold text-[#ccfdfa] uppercase tracking-wider md:px-6">Descrição</th>
          </tr>
        </thead>

        <tbody className="bg-gray-100 divide-y divide-gray-200">
          {data.map((post) => (
            <PostItem key={`post-${post.id}`} {...post} />
          ))}
        </tbody>
      </table>
    </div>
  )
};
