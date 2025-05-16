type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return(
    <button onClick={onClick} className="font-poppins bg-[#5db6e3] text-[#151a53] font-bold py-2 px-4 rounded">
      {children}
    </button>
  )
}

export default Button