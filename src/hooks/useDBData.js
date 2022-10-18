import { useEffect, useState, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../firebase';
import { AuthContext } from '../AuthContext';

const getWishlistFromDB = async (user, setState) => {
  if (!user) {
    return;
  }

  const docRef = collection(database, user.email);
  const docSnap = await getDocs(docRef);

  const dataFromDatabase = [];

  docSnap.forEach((doc) => {
    dataFromDatabase.push(doc.data());
  });

  setState(dataFromDatabase);
};

export const useDBData = () => {
  const [dbData, setState] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getWishlistFromDB(user, setState);
  }, []);

  return dbData;
};
