interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`py-2 px-4 min-w-[10rem] bg-gray-400 mt-4 ${
        className ? className : ''
      }`}
      {...props}
    >
      {children}
    </button>
  )
}
