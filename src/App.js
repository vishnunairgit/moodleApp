// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Langing from './Components/LandingPage/Landing/Langing';
import LoginPage from './Components/LandingPage/LoginPage/LoginPage';
import Home from './Components/Home/home/Home';
// import Login from './Components/LandingPage/Login/Login';
// import Signup from './Components/LandingPage/SignUp/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
          <Route path="/" element={< Langing/>} />
          <Route path="/LoginPage" element={< LoginPage/>} />
          <Route path="*" element={<Home/>}  /> 


          {/* <Route path="/login" element={< Login/>} />
          <Route path="/signup" element={< Signup/>} /> */}

      </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
