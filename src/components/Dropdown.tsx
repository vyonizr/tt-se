interface DropdownProps {
  options: { id: number; value: string; name: string }[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
}

export default function Dropdown({
  options,
  onChange,
  className,
}: DropdownProps) {
  return (
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
  )
}
