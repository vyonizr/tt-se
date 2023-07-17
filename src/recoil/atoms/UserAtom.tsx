import { atom } from 'recoil'

import { DUMMY_EDUCATIONS } from '../../dummy'

const DUMMY_NAME = 'Fitrahtur'

export const nameState = atom({
  key: 'nameState',
  default: DUMMY_NAME,
  // default: '',
})

export const educationState = atom({
  key: 'educationState',
  default: DUMMY_EDUCATIONS,
  // default: [],
})