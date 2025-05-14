import { SlMagnifier } from "react-icons/sl"

type SearchInputProps = {
  onChange: (searchTerm: string) => void
}

const SearchInput = ({ onChange }: SearchInputProps) => {

  return(
    <div className="flex justify-center w-full">
      <div className="relative w-[50%]">
        <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
          <SlMagnifier/>
        </span>
        <input 
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className="w-full py-2 pl-10 px-3 border-none bg-gray-600 text-gray-200 rounded-[10px] focus:outline-none" 
        placeholder="Search"></input>
      </div>
    </div>
  )
}

export default SearchInput