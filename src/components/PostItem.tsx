import type { PostType } from "../types/posts.type"

export default function PostItem({ body, id, title }: PostType) {
  return (
    <tr>
      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 md:px-6">{id}</td>
      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 md:px-6">{title}</td>
      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 md:px-6">{body}</td>
      <td>
        <button className="text-indigo-600 hover:text-indigo-900">Editar</button>
        <button className="ml-2 text-red-600 hover:text-red-900">Excluir</button>
      </td>
    </tr>
  )
}
