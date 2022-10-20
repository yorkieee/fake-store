import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { auth } from './firebase';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        setIsLoggedIn(true);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const SignUpUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setIsLoggedIn(true);

        // ...
      }
    );
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  };

  const LogInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setUser(user);
      setIsLoggedIn(true);

      // ...
    });
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);

    signOut(auth).then(() => {
      // Sign-out successful.
    });
    //   .catch((error) => {
    //     // An error happened.
    //   });
  };

  return (
    <AuthContext.Provider value={{ user, SignUpUser, LogInUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
