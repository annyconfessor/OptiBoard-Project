import { useState } from "react"
import type { PostType } from "../types/posts.type"

export default function PostItem({ body, id, title }: PostType) {
  const [valueTitle, setValueTitle] = useState(title)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <tr className="hover:bg-gray-200 transition duration-200 ease-in-out">
      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600 md:px-6">{id}</td>

      {/* edit title */}

      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600 md:px-6">
        {isEditing &&
        <input 
        type="text" 
        className="edit-input w-full border rounded px-1 py-2"
        value={valueTitle}
        onChange={(e) => setValueTitle(e.target.value)}
        onBlur={() => setIsEditing(false)}
        />}
        <span className="edit-data-field" onClick={() => setIsEditing(true)}>{valueTitle}</span>
      </td>

      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600 md:px-6">{body}</td>
      <td>
        <button className="text-blue-400">Editar</button>
        <button className="ml-4 text-red-400">Excluir</button>
      </td>
    </tr>
  )
}
