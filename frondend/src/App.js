
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from 'axios'
import Header from './Components/Header'
import Login from './Pages/Login'
import SignUp from './Pages/Signup';
import Test from './Pages/Test';
import PrivateRoutes from './Components/PrivateRoutes';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          } />
          <Route path='/test' element={
            <PrivateRoutes>
              <Test />
            </PrivateRoutes>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/login/:msg' element={<Login />} />
          <Route path='/reg' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
