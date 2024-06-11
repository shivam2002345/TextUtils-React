// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
// import React from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //When dark Mode is enabled or not
  const [alert, setAlert] = useState(null); 

  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      },1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has enabled","success");
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode has enabled","success");
    }
  }

  return (
    <>
   {/* <Router> */}
<Navbar  title = "TextUtils"  aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
{/* <Routes> */}
        {/* /users---> Component 1 */}
        {/* /users/home---->---->Component 2 */}
          {/* <Route exact path="/about">
            <About />
          </Route>          */}
                      {/* <Route exact path="/about" element={<About />} />

          {/* <Route exact path="/">
          
         </Route> */}
                     {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to Analyze' mode={mode} />} /> */}

         {/* </Routes> */} 
         <TextForm showAlert={showAlert} heading = 'Enter the text to Analyze' mode={mode}/>
      </div>
      {/* </Router> */}
       </>
  );
}

export default App;
