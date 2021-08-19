import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import searching from "./searching.svg";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <div className="container">
          <h1 className="title">English dictionary</h1>

          <img src={searching} alt="searching" className="searching" />

          <br />

          <SearchEngine defaultKeyword="dog" />
        </div>
      </section>
    </div>
  );
}

export default App;
