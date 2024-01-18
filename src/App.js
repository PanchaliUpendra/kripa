import React, { useContext } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
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
import Storelocator from './Features/Storelocator/Storelocator';
import Checkout from './Buying/Checkout/Checkout';
import Analytics from './Dashboard/Analytics/Analytics';



function App() {

  const sharedvalue=useContext(MyContext);

  return (
    <BrowserRouter>
      <div className="App">
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
          <Route path='/storelocator' element={<Storelocator/>}/>
          {
            sharedvalue.isauthed===true && sharedvalue.emailverified && 
            <Route path='/cart' element={<Addtocart/>}>
              <Route index element={<Checkout/>}/>
              <Route path='tips' element={<Checkout/>}/>
            </Route>
            }
          {sharedvalue.isauthed===true && sharedvalue.emailverified && <Route path='/wishlist' element={<Wishlist/>}/>}   

          {/* below is a section only for admin and workers dashboard */}

          {sharedvalue.isauthed===true && sharedvalue.isAdmin && sharedvalue.uid===sharedvalue.admin && <Route path='/dashboard' element={<Analytics/>}/>}


          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
