import React from 'react';
import { AuthContext } from '../AuthContext';
import { useContext } from 'react';

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  if (user) {
    // The user object has basic properties such as display name, email, etc.
    // const email = user.email;
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    // const uid = user.uid;
  }

  return <div>{user && <p>{`Manage your profile ${user.email}`}</p>}</div>;
};

export default Profile;
