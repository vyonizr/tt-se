'use client'
import { useState, useMemo } from 'react'
import { useQuery } from 'react-query'

import TextInput from './TextInput'
import Dropdown from './Dropdown'

import { SEARCH_URL } from '@/API'
import useDebounce from '@/hooks/useDebounce'

import MONTHS from '../constants/months'
import years from '../constants/years'

import { ISchool, ISchoolOption } from '@/types'

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const debouncedSchoolName = useDebounce(schoolName.value)

  const { isFetching, data } = useQuery({
    queryKey: ['schools', debouncedSchoolName],
    queryFn: async () => {
      const res = await fetch(
        `${SEARCH_URL}?` +
          new URLSearchParams({
            name: encodeURIComponent(debouncedSchoolName),
            limit: '10',
          })
      )
      const responseJSON = await res.json()
      return responseJSON
    },
    enabled: debouncedSchoolName.length > 0,
  })

  const schoolOptions: ISchoolOption[] = useMemo(() => {
    if (data) {
      return data.map((school: ISchool, index: number) => ({
        id: index,
        value: school.name,
        label: school.name,
      }))
    }
    return []
  }, [data])

  return (
    <>
      <label className='block mt-4'>School Name</label>
      <div className='relative'>
        <TextInput
          className='w-full'
          placeholder='Ex: Boston University'
          onChange={(event) => {
            setSchoolName({
              error: '',
              value: event.target.value,
            })
            setIsDropdownOpen(true)
          }}
          value={schoolName.value}
        />
        {isDropdownOpen && schoolOptions.length > 0 && !isFetching ? (
          <ul className='absolute top-12 left-0 w-full max-h-56 overflow-y-scroll bg-white p-2 border-2 border-gray-700 shadow-md'>
            {schoolOptions.map((school, index) => (
              <li
                key={index}
                onClick={() => {
                  setSchoolName({
                    ...schoolName,
                    value: school.value,
                  })
                  setIsDropdownOpen(false)
                }}
                className='p-2 cursor-pointer hover:bg-gray-200'
              >
                {school.label}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
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
