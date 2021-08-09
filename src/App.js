import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import questionDog from "./questionDog.jpg";
import SearchEngine from "./SearchEngine";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {" "}
          Dictionary
          <SearchEngine />
          <br />
          <img src={questionDog} alt="questionDog" className="questionDog" />
        </div>
      </header>
    </div>
  );
}

export default App;
