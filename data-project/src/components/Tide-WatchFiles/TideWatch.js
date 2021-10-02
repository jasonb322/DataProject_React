// Jason Bahr
// May 10, 2021
// This app will show you the tidal data for the Atlantic City NOAA station


import './TideWatch.css';
import Location from './Location'
import Tides from './Tides'
import Temps from './Temps'
import { Link } from 'react-router-dom'


function TideWatch() {
  return (
    <div className="tide-watch">
      <Location />
      <Tides className='tides' />
      <Temps className='temps' />
      <Link className="link" to='/'>Better get back to work.</Link>
    </div>
  );
}

export default TideWatch;
