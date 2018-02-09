import { one, pick, pickDate, pickInteger } from '../utils/faker'
import firstNames from '../utils/faker/firstName'
import lastNames from '../utils/faker/lastName'
import position from '../utils/faker/position'
import country from '../utils/faker/country'
import city from '../utils/faker/city'

const allData = []
function init() {
  const offset = 1000 * 3600 * 24 * 1000
  const c20 = pick(country, 20)
  const c30 = pick(city, 30)
  for (let i = 1; i <= 1000; i++) {
    allData.push({
      id: i,
      firstName: one(firstNames),
      lastName: one(lastNames),
      position: one(position),
      start: pickDate('yyyy-MM-dd', offset),
      salary: pickInteger(500000, 50000),
      country: one(c20),
      office: one(c30),
    })
  }

  const newFN = []
  for (let i = 0; i <= firstNames.length; i += 3) {
    newFN.push(firstNames[i])
  }
}

init()

export const all = (delay = 500) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(allData)
  }, delay)
})

export function getData(count = 100, start = 0) {
  const data = []
  for (let i = 0; i < count; i++) {
    data.push(allData[i + start])
  }

  return data
}

export default (src, { type }) => {
  switch (type) {
    default:
      return all()
  }
}