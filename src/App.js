
import './App.css';
import { Filter} from "./components/Filter"
import { Home } from "./components/Home"
// import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1 className='h1'>NC NEWS</h1>
     <Filter></Filter>
     <Home></Home>
    </div>
  );
}

export default App;
