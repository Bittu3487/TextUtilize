
import Navbar from './components/Navbar';
import TeaxtArea from './components/TeaxtArea';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode , setMode] = useState("light")
  const [alert , setAlert] = useState(null)
  const showAlert = (type , message) =>{
    setAlert({
      type:type,
      message:message
    })
      setTimeout(() => {
      setAlert(null);
    
  }, 1500);
  }
 
  const toggleMode = () =>{
    if (mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "black"
       document.body.style.color = "white"
       showAlert("success" , "Darkmode enable")
    }
    else{
      setMode("light")
       document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        showAlert("success" , "Lightmode enable")
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <div className='container my-3'>
    <TeaxtArea showAlert={showAlert} />
    </div>
    </>
  );
}

export default App;
