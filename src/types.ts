export interface ISchool {
  web_pages: string[]
  domains: string[]
  country: string
  name: string
  'state-province': any
  alpha_two_code: string
}

export interface ISchoolOption {
  id: number
  value: string
  label: string
}

export interface IEducation {
  id: string
  school: string
  degree: string
  field: string
  start: string
  end: string
  grade: string
  description: string
}