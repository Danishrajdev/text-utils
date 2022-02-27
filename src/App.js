import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import TextForm from './components/TextForm';
 
import Alert from './components/Alert';
function App() {
 const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
 const [alert, setAlert] = useState(null);
 const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
 }
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#1a2036" ;
      document.body.color = "white" ;
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light") ;
      document.body.style.backgroundColor = "white" ;
      document.body.color = "black" ;
      showAlert("Light mode has been enabled", "success");

    }
  }
  return ( 
    <div className="app">
     <Header title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/> 
    
    <Alert alert={alert}  />
 
     <div className="container mt-5">
     <TextForm heading="Enter the text to analyze below" mode={mode}/>
    
     

     </div>
    </div> 
  );
}

export default App;
