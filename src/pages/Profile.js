import { auth } from '../firebase';

const Profile = () => {
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.

    const email = user.email;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }

  return (
    <div>
      <p>{`Manage your profile ${user.email}`}</p>
    </div>
  );
};

export default Profile;
