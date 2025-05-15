import PostItem from "./PostItem";

import type { PostType } from "../types/posts.type";

interface PostsTableProps {
  data: PostType[]
};

export default function PostsTable({ data }: PostsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-700 bg-[#2c3e47] shadow-lgmax-w-4xl">
      <table className="min-w-full">
        <thead className="bg-[#5db6e3]">
          <tr>
            <th className="font-playfair py-3 w-1/14 text-left text-[12.5px] font-semibold text-[#151a53] uppercase tracking-wider md:px-6">ID</th>
            <th className="font-playfair w-3/12 text-left text-[12.5px] font-semibold text-[#151a53] uppercase tracking-wider md:px-2">Título</th>
            <th className="font-playfair w-8/12 text-left text-[12.5px] font-semibold text-[#151a53] uppercase tracking-wider md:px-6">Descrição</th>
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
