import Header from "./components/Header";
import Selector from "./components/Selector";

function App() {
  return (
    <div className="App">
      <div className="topSpan">
        <Header />
        <a href="https://www.google.com">I'd rather be surfing!</a>
      </div>
      
      <Selector />
      
      
    </div>
  );
}

export default App;
