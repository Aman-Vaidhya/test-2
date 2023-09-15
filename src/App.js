import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import SignUp from './components/sign-up';
import User from './components/user';
import Home from './components/home-page';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/sign-up' element={<SignUp />} />
          <Route exact path='/user' element={<User />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
