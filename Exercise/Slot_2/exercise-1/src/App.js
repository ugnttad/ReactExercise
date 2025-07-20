import './App.css';

function App() {
  const h1Style = {
    color: "blue",
    textAlign: "center",
  };

  return (
    <>
    <div>
      <h1 style={{ color: "blue", textAlign: "center" }}>Hello world!</h1>
    </div>
    <div>
      <h1 style={h1Style}>Hello world!</h1>
    </div>
    <div>
      <h1 className="h1Style">Hello world!</h1>
    </div>
  </>
  );
}


export default App;
