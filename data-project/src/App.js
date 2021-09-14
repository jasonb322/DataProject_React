import Header from "./components/Header";
import Selector from "./components/Selector";
import NameGrid from "./components/NameGrid";

function App() {
  return (
    <div className="App">
      <div className="topSpan">
        <Header />
        <a href="https://www.google.com">Link</a>
      </div>
      
      <Selector />
      <NameGrid />
      
    </div>
  );
}

export default App;
