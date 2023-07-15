'use client'
import { useState } from 'react'

export default function InsertName() {
  const [name, setName] = useState('')

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    localStorage.setItem('name', name)
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center'>
      <p>Hi There! Welcome to your education showcase.</p>
      <p className='mt-8'>
        Type your name and click &quot;Enter&quot; below to begin!
      </p>
      <input
        type='text'
        onChange={(event) => setName(event.target.value)}
        className='py-2 px-4 mt-4'
      />
      <button
        disabled={name.length === 0}
        className='py-2 px-4 min-w-[10rem] bg-gray-400 mt-4'
        type='submit'
      >
        Enter
      </button>
    </form>
  )
}
