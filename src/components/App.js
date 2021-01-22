import '../App.css';
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <div data-testid="timer">00:00:00.00</div>
    </div>
  );
}

export default App;
