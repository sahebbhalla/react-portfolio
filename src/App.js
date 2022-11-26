import React,{useState,useEffect} from 'react';
import Hero from './Components/Hero';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  const [navChoice, setNavChoice] = useState("AboutMe");
  useEffect(() => {
    document.title = "Saheb Bhalla";  
  }, []);
  return (
    <div className="App">

          <Header navChoice={navChoice} setNavChoice={setNavChoice}  />
          <Hero navName={navChoice} />
          <Footer />
    </div>
  );
}

export default App;
