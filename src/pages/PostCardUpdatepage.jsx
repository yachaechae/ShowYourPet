import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Firebase 설정 객체
const firebaseConfig= {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function PostCardUpdatepage() {
  const { docId } = useParams(); // URL의 id 파라미터 가져오기
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'postCards', docId);
        const snapshot = await getDoc(docRef);

        // 콘솔에 데이터 출력
        console.log('Snapshot:', snapshot);
        const data = snapshot.data();
        console.log('Data:', data);
        if (snapshot.exists()) {
          
          setTitle(data.title);
          setContents(data.contents);
          setImage(data.image);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    fetchData();
  }, [db, docId]);

  return (
    <div>
      <h1>Edit Post</h1>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Contents:</label>
      <textarea value={contents} onChange={(e) => setContents(e.target.value)} />
      {image && <img src={image} alt="Preview" />}
      <button>Update</button>
    </div>
  );
}

export default PostCardUpdatepage;
