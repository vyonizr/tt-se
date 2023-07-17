import { IEducation } from '@/types'

interface EducationCardProps {
  education: IEducation
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <li key={education.id} className='bg-gray-200 p-4 w-[36rem]'>
      <h2 className='font-bold text-lg'>{`${education.degree} @ ${education.school}`}</h2>
      <p className='text-gray-600'>
        {education.start} -{' '}
        {education.end.length > 0 ? education.end : 'Present'}
      </p>
      {education.grade.length > 0 ? <p>Grade: {education.grade}</p> : null}
      {education.description.length > 0 ? (
        <p className='mt-4'>{education.description}</p>
      ) : null}
    </li>
  )
}
