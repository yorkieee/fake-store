import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

const SignUp = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    // const firstName = event.target[0];
    // const lastName = event.target[1];
    const email = event.target[2];
    const password = event.target[3];

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        console.log(errorCode);
        console.log(errorMessage);

        // ..
      });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div
        style={{ display: 'flex', flexDirection: 'column', width: 300 }}
        className="container"
      >
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="First name"
          name="firstName"
          required
        />

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="First name"
          name="lastName"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={handleChange}
          placeholder="Email"
          name="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={handleChange}
          placeholder="Enter Password"
          name="password"
          required
        />

        <button type="submit">Register</button>
      </div>
    </form>
  );
};
export default SignUp;
