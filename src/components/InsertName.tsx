'use client'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'

import Button from './Button'
import TextInput from './TextInput'

import { nameState } from '../recoil/atoms/UserAtom'

export default function InsertName() {
  const [name, setName] = useState({
    value: '',
    error: '',
  })
  const setNameAtom = useSetRecoilState(nameState)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (name.value.length === 0) {
      setName({
        ...name,
        error: 'Please enter a name',
      })
    } else {
      setNameAtom(name.value)
    }
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center'>
      <p>Hi There! Welcome to your education showcase.</p>
      <p className='mt-8'>
        Type your name and click &quot;Enter&quot; below to begin!
      </p>
      <TextInput
        className='mt-4'
        onChange={(event) =>
          setName({
            ...name,
            value: event.target.value,
          })
        }
        value={name.value}
        placeholder='Ex. John Doe'
        error={name.error}
      />
      <Button primary className=' mt-4' type='submit'>
        Enter
      </Button>
    </form>
  )
}
