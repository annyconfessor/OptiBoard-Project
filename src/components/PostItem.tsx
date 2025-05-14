import { useState } from "react"
import type { PostType } from "../types/posts.type"

export default function PostItem({ body, id, title }: PostType) {
  const [valueTitle, setValueTitle] = useState(title)
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [valueBody, setValueBody] = useState(body)
  const [isEditingBody, setIsEditingBody] = useState(false)

  return (
    <tr className="hover:bg-gray-200 transition duration-200 ease-in-out">
      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600 md:px-6">{id}</td>

      {/* edit title */}

      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600 md:px-6">
        {isEditingTitle &&
        <input 
        type="text" 
        className="edit-input w-full rounded bg-transparent focus:outline-none focus:ring-0"
        value={valueTitle}
        onChange={(e) => setValueTitle(e.target.value)}
        onBlur={() => setIsEditingTitle(false)}
        />}
        <span 
        className={`edit-data-field cursor-pointer ${
          !isEditingTitle && !valueTitle ? "text-gray-400 italic" : ""
        }`}
        onClick={() => setIsEditingTitle(true)}>
        {isEditingTitle ? '' : valueTitle ? valueTitle : 'Clique aqui para editar'}
        </span>
      </td>

      {/* edit body */}

      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600 md:px-6">
      {isEditingBody &&
        <input 
        type="text" 
        className="edit-input w-full rounded bg-transparent focus:outline-none focus:ring-0"
        value={valueBody}
        onChange={(e) => setValueBody(e.target.value)}
        onBlur={() => setIsEditingBody(false)}
        />}
        <span 
        className={`edit-data-field cursor-pointer ${
          !isEditingBody && !valueBody ? "text-gray-400 italic" : ""
        }`}
        onClick={() => setIsEditingBody(true)}>
        {isEditingBody ? '' : valueBody ? valueBody : 'Clique aqui para editar'}
        </span>
      </td>
    </tr>
  )
}
