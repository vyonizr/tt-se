interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
  className?: string
  error?: string
}

export default function TextInput({
  onChange,
  value,
  placeholder,
  className,
  error,
}: TextInputProps) {
  return (
    <>
      <input
        type='text'
        onChange={onChange}
        className={`p-2 border-2 border-gray-700 shadow-md ${
          className ? className : ''
        }`}
        placeholder={placeholder || ''}
        value={value}
      />
      {error && <p className='text-red-500'>{error}</p>}
    </>
  )
}
