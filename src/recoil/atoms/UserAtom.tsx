import { atom } from 'recoil'

const DUMMY_NAME = 'Fitrahtur'

export const nameState = atom({
  key: 'nameState',
  default: DUMMY_NAME,
  // default: '',
})
