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

          <SearchEngine defaultKeyword="koala" />
        </div>
        <footer className="footer">
          <a
            href="https://github.com/SilviaDam91/Dictionary-React"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>
          by Silvia Pariota
        </footer>
      </section>
    </div>
  );
}

export default App;
