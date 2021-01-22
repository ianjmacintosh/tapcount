import '../App.css';
import Counter from "./Counter";
import Timer from "./Timer";
import Controls from "./Controls";

function App() {
  return (
    <div className="App" data-testid="app-component">
      <Counter />
      <Timer />
      <Controls />
    </div>
  );
}

export default App;
