interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  primary?: boolean
}

export default function Button({
  children,
  className,
  primary,
  ...props
}: ButtonProps) {
  function handleColor(primary: boolean | undefined) {
    if (primary) {
      return 'bg-blue-500 text-white'
    } else {
      return 'bg-gray-300'
    }
  }

  return (
    <button
      className={`py-2 px-4 min-w-[10rem] ${handleColor(primary)} mt-4 ${
        className ? className : ''
      }`}
      {...props}
    >
      {children}
    </button>
  )
}
