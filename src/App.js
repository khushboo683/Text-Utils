import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'

import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Alert from './Components/Alert'
function App() {
  const [alert,setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(()=>{
     setalert(null);
    },1500)

  }
  const [mode, setmode] = useState("light")
  let toggleMode=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode is enabled","success");
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert("Dark mode is enabled","success");
    }
  }
  return (
    <Router>
    <div>
    <Navbar title='TextUtils' about='AboutUs' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
           
           <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>}/>
           
           
          
         </Routes>
    
  
     </div>
    </Router>
   
  );
}

export default App;
