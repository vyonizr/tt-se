import { atom } from 'recoil'

// import { DUMMY_EDUCATIONS } from '../../dummy'
import { IEducation } from '../../types'

// const DUMMY_NAME = 'Fitrahtur'

export const nameState = atom({
  key: 'nameState',
  // default: DUMMY_NAME,
  default: '',
})

export const educationState = atom({
  key: 'educationState',
  // default: DUMMY_EDUCATIONS as IEducation[],
  default: [] as IEducation[],
})