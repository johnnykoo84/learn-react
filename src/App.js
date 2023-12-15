import logo from "./logo.svg";
import "./App.css";

function App() {
  // js code here

  // return jsx
  return (
    <div className="App">
      <div className="Header">Code Example</div>
      <div>
        {["Hello", "World", "This", "is", "React"].map((item, index) => {
          return (
            <ul className="List" key={index}>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
