interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
}

export default function TextInput({
  onChange,
  value,
  placeholder,
}: TextInputProps) {
  return (
    <input
      type='text'
      onChange={onChange}
      className='p-2 border-2 border-gray-700 shadow-md'
      placeholder={placeholder || ''}
      value={value}
    />
  )
}
