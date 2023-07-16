import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { nameState } from '../recoil/atoms/UserAtom'
import Button from './Button'

export default function InsertName() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const nameAtom = useRecoilValue(nameState)

  const handleAddEducation = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <p>{`Welcome to ${nameAtom}'s education page`}</p>
      <Button onClick={handleAddEducation}>Add Education</Button>
    </>
  )
}
