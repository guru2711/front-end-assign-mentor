import Mentor from './mentor';
import Student from './student';
import Home from './Home';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
      
        <Route exact path="/" element = { <Home />} />
        <Route path="/mentor" element = { <Mentor />} />
        <Route path="/student" element = { <Student />} />
         
       
     
    </Routes>
    </div>
  );
}

export default App;
