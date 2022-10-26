import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Navbar from './components/navbar.component';

// Custom protecting routes component
import PrivateRoute from './components/private-route.component';

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
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
