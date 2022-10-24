import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar.component';

// Pages
import Explore from './pages/explore.component';
import ForgotPassword from './pages/forgot-password.component';
import Offers from './pages/offers.component';
import Profile from './pages/profile.component';
import SignIn from './pages/sign-in.component';
import SignUp from './pages/sign-up.component';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
