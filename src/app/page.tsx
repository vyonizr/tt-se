'use client'
import { useRecoilValue } from 'recoil'
import InsertName from '../components/InsertName'
import EducationList from '../components/EducationList'
import { nameState } from '../recoil/atoms/UserAtom'

export default function Home() {
  const nameAtom = useRecoilValue(nameState)

  return (
    <main className='flex min-h-screen flex-col items-center p-16'>
      {nameAtom ? <EducationList /> : <InsertName />}
    </main>
  )
}
