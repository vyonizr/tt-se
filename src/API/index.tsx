export const BASE_URL = 'http://universities.hipolabs.com'
export const getUniversitiesByName = (name: string) =>
  `${BASE_URL}/search?name=${name}`
