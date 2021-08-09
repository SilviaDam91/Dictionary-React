import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import questionDog from "./questionDog.jpg";
import SearchEngine from "./SearchEngine";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Dictionary</h1>
          <img src={questionDog} alt="questionDog" className="questionDog" />
          <br />
          <SearchEngine />
        </div>
      </header>
    </div>
  );
}

export default App;
