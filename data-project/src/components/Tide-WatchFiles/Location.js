import getData from './getData'
import { useState, useEffect } from 'react'

const Location = () => {

  const waterTempURL = 'https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=8534720&product=water_temperature&datum=STND&time_zone=lst_ldt&units=english&format=json'

  const [location, setLocation] = useState(0)
  const [name, setName] = useState('')
  const [lat, setLat] = useState(0.0)
  const [long, setLong] = useState(0.0)

  const setLocationData = async () => {
    const data = await getData(waterTempURL)
    setLocation(data.metadata.id)
    setName(data.metadata['name'])
    setLat(data.metadata['lat'])
    setLong(data.metadata['lon'])
  }

  useEffect(() => {
    setLocationData()
  }, [])
  

  return (
    <div className='location'>
      <h2>{name}</h2>
      <h3>Tides and Temps</h3>
      <p>Lat: {lat}</p>
      <p>Long: {long}</p>
      <p>NOAA Station Id: {location}</p>
    </div>
  )
}

export default Location
