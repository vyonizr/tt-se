const years = () => {
  const currentYear = new Date().getFullYear()
  const years = []
  for (let i = 1923; i <= currentYear; i++) {
    if (i === 1923) {
      years.push({
        id: 0,
        value: 'Year',
        name: 'Year',
      })
    }
    years.push({
      id: i,
      value: String(i),
      name: String(i),
    })
  }
  return years
}

export default years
