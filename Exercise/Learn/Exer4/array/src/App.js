import "./App.css";
import BootstrapDemo from "./components/Bootstrap";

function App() {
  var array = [1, 2, 3, 4];

  var sum = array.reduce((acc, curr) => acc + curr, 0);

  var product = array.reduce((acc, curr) => acc * curr, 1);

  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12",
    },
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>The Array: {array.join(", ")}</h1>
        <p>Sum of the array: {sum}</p>
        <p>Product of the array: {product}</p>
      </header> */}

      <BootstrapDemo />
    </div>
  );
}

export default App;
