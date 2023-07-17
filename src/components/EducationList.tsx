import { useState } from 'react'
import { useRecoilValue } from 'recoil'
// import Modal from 'react-modal'
import { Dialog } from '@headlessui/react'

import { nameState } from '../recoil/atoms/UserAtom'
import Button from './Button'
import NewEducationForm from './NewEducationForm'

export default function InsertName() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const nameAtom = useRecoilValue(nameState)

  const handleAddEducation = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <p>{`Welcome to ${nameAtom}'s education page`}</p>
      <Button onClick={handleAddEducation}>Add Education</Button>
      <Dialog open={isModalOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="w-1/2 h-5/6 rounded bg-white p-8 overflow-y-scroll">
            <Dialog.Title className='text-2xl font-bold'>Add Education</Dialog.Title>
            <NewEducationForm />
            <div className='flex justify-end gap-x-4'>
              <Button>Cancel</Button>
              <Button primary>Add</Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
