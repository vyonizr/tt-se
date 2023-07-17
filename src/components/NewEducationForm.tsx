'use client'
import { useState } from 'react'
import { useQuery } from 'react-query'

import TextInput from './TextInput'
import Dropdown from './Dropdown'

import { getUniversitiesByName } from '@/API'
import useDebounce from '@/hooks/useDebounce'

import MONTHS from '../constants/months'
import years from '../constants/years'

const YEAR_OPTIONS = years()
const DESCRIPTION_MAX_LENGTH = 1000

export default function NewEducationForm() {
  const [schoolName, setSchoolName] = useState({
    value: '',
    error: '',
  })
  const [degree, setDegree] = useState('')
  const [fieldOfStudy, setFieldOfStudy] = useState('')
  const [startYear, setStartYear] = useState({
    month: MONTHS[0].value,
    year: YEAR_OPTIONS[0].value,
  })
  const [endYear, setEndYear] = useState({
    month: MONTHS[0].value,
    year: YEAR_OPTIONS[0].value,
  })
  const [grade, setGrade] = useState('')
  const [description, setDescription] = useState({
    value: '',
    error: '',
  })

  const debouncedSchoolName = useDebounce(schoolName.value)

  const { isFetching, data } = useQuery({
    queryKey: ['schools', debouncedSchoolName],
    queryFn: () => {
      const url = getUniversitiesByName(debouncedSchoolName)
      fetch(url).then((res) => res.json())
    },
    enabled: debouncedSchoolName.length > 0,
  })

  return (
    <>
      <label className='block mt-4'>School Name</label>
      <TextInput
        className='w-full'
        placeholder='Ex: Boston University'
        onChange={(event) =>
          setSchoolName({
            error: '',
            value: event.target.value,
          })
        }
        value={schoolName.value}
      />
      <label className='block mt-4'>Degree</label>
      <TextInput
        className='w-full'
        placeholder="Ex: Bachelor's"
        onChange={(event) => setDegree(event.target.value)}
        value={degree}
      />
      <label className='block mt-4'>Field of Study</label>
      <TextInput
        className='w-full'
        placeholder='Ex: Business'
        onChange={(event) => setFieldOfStudy(event.target.value)}
        value={fieldOfStudy}
      />
      <label className='block mt-4'>Start Year</label>
      <div className='grid gap-x-4 grid-cols-2'>
        <Dropdown
          options={MONTHS}
          onChange={(event) => {
            setStartYear({
              ...startYear,
              month: event.target.value,
            })
          }}
        />
        <Dropdown
          options={YEAR_OPTIONS}
          onChange={(event) => {
            setStartYear({
              ...startYear,
              year: event.target.value,
            })
          }}
        />
      </div>
      <label className='block mt-4'>End Year</label>
      <div className='grid gap-x-4 grid-cols-2'>
        <Dropdown
          options={MONTHS}
          onChange={(event) => {
            setEndYear({
              ...endYear,
              month: event.target.value,
            })
          }}
        />
        <Dropdown
          options={YEAR_OPTIONS}
          onChange={(event) => {
            setEndYear({
              ...endYear,
              year: event.target.value,
            })
          }}
        />
      </div>
      <label className='block mt-4'>Grade</label>
      <TextInput
        className='w-full'
        onChange={(event) => setGrade(event.target.value)}
        value={grade}
      />
      <label className='block mt-4'>Description</label>
      <div>
        <textarea
          className='w-full p-2 border-2 border-gray-700 shadow-md'
          rows={5}
          onChange={(event) =>
            setDescription({
              error: '',
              value: event.target.value,
            })
          }
        />
        <p className='text-sm text-right'>{`${description.value.length}/${DESCRIPTION_MAX_LENGTH}`}</p>
      </div>
    </>
  )
}
