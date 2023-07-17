import { v4 as uuidv4 } from 'uuid'

export const DUMMY_EDUCATIONS = [
  {
    id: uuidv4(),
    school: 'University of California, Berkeley',
    degree: 'Bachelor of Arts',
    field: 'Computer Science',
    start: 'August 2016',
    end: 'May 2020',
    grade: '3.7 GPA',
    description: 'Lorem Ipsum',
  },
  {
    id: uuidv4(),
    school: 'University of California, Berkeley',
    degree: 'Bachelor of Arts',
    field: 'Computer Science',
    start: 'August 2016',
    end: '',
    grade: '',
    description: 'Lorem Ipsum',
  },
]
