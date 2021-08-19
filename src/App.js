import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import questionDog from "./questionDog.jpg";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <div className="container">
          <h1 className="title">English dictionary</h1>

          <img src={questionDog} alt="questionDog" className="questionDog" />

          <br />

          <SearchEngine defaultKeyword="welcome" />
        </div>
      </section>
    </div>
  );
}

export default App;
