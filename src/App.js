import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/LoginPart/Login/Login';
import SignUp from './Pages/Home/LoginPart/SignUp/SignUp';
import TopHeader from './Pages/Home/TopHeader/TopHeader';
import RequireAuth from './Pages/Home/LoginPart/Login/RequireAuth/RequireAuth';
import Cart from './Pages/Home/Cart/Cart';

function App() {
  return (
    <div className="">
     <TopHeader></TopHeader>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login'element={<Login></Login>}></Route>
       <Route path='/cart'element={
         <RequireAuth>
           <Cart/>
         </RequireAuth>
       }></Route>
       <Route path='/signup'element={<SignUp></SignUp>}></Route>
     </Routes>
    </div>
  );
}

export default App;
