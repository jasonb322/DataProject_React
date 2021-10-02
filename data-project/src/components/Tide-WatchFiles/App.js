// Jason Bahr
// May 10, 2021
// This app will show you the tidal data for the Atlantic City NOAA station


import './App.css';
import Location from './components/Location'
import Tides from './components/Tides'
import Temps from './components/Temps'


function App() {
  return (
    <div className="App">
      <Location />
      <Tides className='tides' />
      <Temps className='temps' />
    </div>
  );
}

export default App;
