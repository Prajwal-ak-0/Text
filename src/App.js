import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import About from './Components/About';
//  (imrs)



// go to (react router dom)in google search
/*
  */


function App() {
const [mode, setMode]=useState('light');

const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    message:message,
    type:type
  })
  
/*  setTimeout(() => {
    setAlert('null');
  }, 2000);    */
}

const toogleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#252656';
    showAlert("Dark Mode Enabeled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode Enabeled","success");

  }
}


  return (
  <>
  <Navbar title="NoBrand" menu="Home" mode={mode} toogleMode={toogleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading="Enter Your Text To Analyse" mode={mode}/>
  </div>
</>
  );
}
// ExXACT PATH is imp to avoid relative opening of a site
// Write -> <Navbar></Navbar> T GET AUTOMATICALLY IMPORT THE PARENT FILE...

export default App;
// <About/>
