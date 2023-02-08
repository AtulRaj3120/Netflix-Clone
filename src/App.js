import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import Login from './Components/Login'
import Profile from './Components/Profile'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';

function App() {
  // The current user is set to the user present in the current state using the selecter function and the
  // useSelecter hook
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged In
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }
      else {
        // Logger Out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch])


  return (
    <div className="app">
      <Router>
        {!user ? (<Login />) : (
          <Routes>
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/' element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
