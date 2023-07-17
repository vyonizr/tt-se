'use client'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import Button from './Button'
import { nameState } from '../recoil/atoms/UserAtom'

export default function InsertName() {
  const [name, setName] = useState('')
  const setNameAtom = useSetRecoilState(nameState)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNameAtom(name)
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
        className='py-2 px-4 mt-4 border-2 border-gray-700 shadow-md'
        value={name}
      />
      <Button disabled={name.length === 0} className=' mt-4' type='submit'>
        Enter
      </Button>
    </form>
  )
}
