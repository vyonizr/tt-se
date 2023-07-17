import { useState } from 'react'
import { useRecoilValue } from 'recoil'
// import Modal from 'react-modal'
import { Dialog } from '@headlessui/react'

import { nameState, educationState } from '../recoil/atoms/UserAtom'
import Button from './Button'
import NewEducationForm from './NewEducationForm'
import EducationCard from './EducationCard'

export default function InsertName() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const nameAtom = useRecoilValue(nameState)
  const educations = useRecoilValue(educationState)

  const handleAddEducation = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <p>{`Welcome to ${nameAtom}'s education page`}</p>
      <Button primary onClick={handleAddEducation}>
        Add Education
      </Button>
      <Dialog open={isModalOpen} onClose={closeModal} className='relative z-50'>
        <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
        <div className='fixed inset-0 flex items-center justify-center'>
          <Dialog.Panel className='w-1/2 h-5/6 rounded bg-white p-8 overflow-y-scroll'>
            <Dialog.Title className='text-2xl font-bold'>
              Add Education
            </Dialog.Title>
            <NewEducationForm />
            <div className='flex justify-end gap-x-4'>
              <Button>Cancel</Button>
              <Button primary>Add</Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      <div className='grid grid-cols-[1fr_36rem_1fr] mt-8 gap-x-8'>
        <ul className='bg-gray-200 p-4 h-fit'>
          {educations.map((education) => (
            <li key={education.id}>{education.school}</li>
          ))}
        </ul>
        <ul className='flex flex-col gap-y-4'>
          {educations.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </ul>
      </div>
    </>
  )
}
