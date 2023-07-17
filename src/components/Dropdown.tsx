interface DropdownProps {
  options: { id: number; value: string; name: string }[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
  error?: string
}

export default function Dropdown({
  options,
  onChange,
  className,
  error,
}: DropdownProps) {
  return (
    <div className='flex flex-col'>
      <select
        className={`p-2 border-2 border-gray-700 shadow-md ${
          className ? className : ''
        }`}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}
