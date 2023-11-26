import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { getPost } from './action';

export const fetchPostCards = () => {
    return async function (dispatch) {
        const querySnapshot = await getDocs(collection(db, 'postCards'));
        const postData = [];
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, doc.data());
            postData.push({ ...doc.data(), id: doc.id });
        });
        console.log(postData);
        dispatch(getPost(postData));
    };
};

export const performValidation = (contents, title) => {
    if (!contents && !title) {
        return false;
    }
    return true;
};

export const loadPostCards = () => {};
