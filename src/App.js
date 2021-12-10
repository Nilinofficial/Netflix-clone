import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { auth } from './firebase';
import Homescreen from './screens/Homescreen';
import LoginScreen from './screens/LoginScreen';
import { useDispatch } from 'react-redux';
import {  login, logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }
      else {
        dispatch(logout())
      }
    });
    return unsub;
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        <Switch>

             

          <Route exact path="/">
            {user ?
              <Homescreen />
              :
              <LoginScreen />
            }
          </Route>
          {user &&
            <>
              <Route path="/profile">
                <ProfileScreen />
              </Route>
            </>
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
