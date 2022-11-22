import React,{useState} from 'react';
import './App.css';
import Nav from '../src/Components/Nav/index'
import Hero from './Components/Hero';
import Header from './Components/Header';
function App() {
  const [navChoice, setNavChoice] = useState("AboutMe");

  return (
    <div className="App">
         
          <Header navChoice={navChoice} setNavChoice={setNavChoice}  />
          <Hero navName={navChoice} />
    </div>
  );
}

export default App;
