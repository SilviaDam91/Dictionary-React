import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import questionDog from "./questionDog.jpg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container"> Container Bootstrap </div>

        <img
          src={questionDog}
          alt="questionDog"
          className="img-fluid questionDog"
        />
      </header>
    </div>
  );
}

export default App;
