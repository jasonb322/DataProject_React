// Jason Bahr
// May 10, 2021
// This app will show you the tidal data for the Atlantic City NOAA station

import Location from './Location'
import Tides from './Tides'
import Temps from './Temps'
import { Link } from 'react-router-dom'
import { TideDiv } from './tideStyle'

function TideWatch() {
  return (
    <TideDiv>
      <div className='tideBody'>
        <Location />
        <Tides className='tides' />
        <Temps className='temps' />
        <Link className="link" to='/'>Back to Work</Link>
      </div>
    </TideDiv>
  );
}

export default TideWatch;
