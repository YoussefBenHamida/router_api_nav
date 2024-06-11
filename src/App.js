import './App.css';
import NavBar from './NavBar';
import { Route , Routes } from 'react-router-dom';
import Home from './Home';
import UserList from './UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profil from './Profil';


function App() {
  return (
    <>
    <NavBar/>
   <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/user" element={<UserList/>} />
    <Route path="/profil/:userId" element={<Profil />} />
   </Routes>

    </>
  );
}

export default App;
