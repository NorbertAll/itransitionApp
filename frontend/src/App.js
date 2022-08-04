import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Userapp from './components/Userapp';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<Userapp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
    </div>
  );
}

export default App;
