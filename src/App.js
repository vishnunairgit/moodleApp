// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Langing from './Components/LandingPage/Landing/Langing';
import LoginPage from './Components/LandingPage/LoginPage/LoginPage';
import Home from './Components/Home/home/Home';
import StudentHome from './Components/Student/StudentHome/studentHome/StudentHome';
// import Login from './Components/LandingPage/Login/Login';
// import Signup from './Components/LandingPage/SignUp/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
          <Route path="/" element={< Langing/>} />
          <Route path="/LoginPage" element={< LoginPage/>} />
          {/* <Route path="*" element={<Home/>}  />  */}

          <Route path='*' element={<StudentHome/>}  />


          

      </Routes>

      </BrowserRouter> 


    </div>
  );
}

export default App;
