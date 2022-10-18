import { addDoc, collection } from 'firebase/firestore';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { database } from '../firebase';

export const useAddToWishlist = () => {
  const { user } = useContext(AuthContext);

  const addToWishList = async (data) => {
    const objectToSave = {
      data: { ...data, email: user.email },
      date: new Date().getTime(),
    };
    try {
      await addDoc(collection(database, user.email), objectToSave);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return addToWishList;
};
