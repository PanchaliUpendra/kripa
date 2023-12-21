import React, { useContext } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';
import Login from './Components/Login/Login';
import Eachcate from './Features/Eachcate/Eachcate';
import Eachitem from './Features/Eachitem/Eachitem';
import Contact from './Features/Contact/Contact';
import MyContext from './MyContext';
import Emailverification from './Others/Emailverification/Emailverification';
import Pagenotfound from './Others/Pagenotfound/Pagenotfound';
import About from './Components/About/About';
import Addtocart from './Features/Addtocart/Addtocart';
import Wishlist from './Features/Wishlist/Wishlist';



function App() {

  const sharedvalue=useContext(MyContext);

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/shop' element={<Shop/>}/>
        {sharedvalue.isauthed===false && <Route path='/login' element={<Login/>}/>}
        <Route path='/collection/:cate' element={<Eachcate/>}/>
        <Route path='/shop/:id' element={<Eachitem/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {sharedvalue.emailverified===false && sharedvalue.isauthed===true && <Route path='/verification' element={<Emailverification/>}/>}
        <Route path='/*' element={<Pagenotfound/>}/>
        <Route path='/about' element={<About/>}/>
        {sharedvalue.isauthed===true && sharedvalue.emailverified && <Route path='/cart' element={<Addtocart/>}/>}
        {sharedvalue.isauthed===true && sharedvalue.emailverified && <Route path='/wishlist' element={<Wishlist/>}/>}   
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
