import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
