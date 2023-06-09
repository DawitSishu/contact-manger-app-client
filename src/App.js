import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import { useState } from 'react';

function App() {
  const [loggedIn, SetLoggedIn] = useState(false);
  const handleLogIn = () =>{
      SetLoggedIn(true)
  } 
  const handleLogOut = () =>{
      SetLoggedIn(false)
  } 
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={loggedIn ? <Home onLogOut={handleLogOut}/> : <Login onLogIn = {handleLogIn} />}/>
        <Route path='/signup' element={<SignUp />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
