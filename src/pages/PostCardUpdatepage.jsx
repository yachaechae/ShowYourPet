import React, { useState, useEffect } from 'react';
import { PostCardForm, PostCardinputForm, PostCardTextarea, PostCardInput  } from '../style/CardFormStyles';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { addImg } from 'redux/module/action';
import { performValidation } from 'redux/module/loadData';
import { useDispatch, useSelector } from 'react-redux';

function PostCardUpdatepage() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // 이미지 미리보기 상태
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.uid);
  const userName = useSelector((state) => state.auth.user.email);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'postCards', id);
        const snapshot = await getDoc(docRef);

        // 콘솔에 데이터 출력
        if (snapshot.exists()) {
          const data = snapshot.data();
          setTitle(data.title);
          setContents(data.contents);
          setImage(data.image);
        } else {
          console.log('문서가 없습니다!');
        }
      } catch (error) {
        console.error('문서를 찾는 중 오류가 있습니다!', error);
      }
    };

    fetchData();
  }, [db, id]);

  const updateCompleteHandler = async (event) => {
    // 새로고침 방지
    event.preventDefault();
  
    // performValidation 함수를 통해 유효성 검사를 수행하고 유효성 여부를 반환받음
    const isValid = performValidation(contents, title);
    if (!isValid) {
      alert('제목과 내용이 입력되지 않았습니다.');
      return;
    }
  
    // 수정한 게시물
    try {
      const docRef = doc(db, 'postCards', id);
      const snapshot = await getDoc(docRef);
      const dataToupdate = {
        userId,
        userName,
        title,
        contents,
        image: imagePreview ? imagePreview : snapshot.data().image,
        createdAt: snapshot.data().createdAt ? snapshot.data().createdAt : new Date().toISOString(),
      };
  
      await updateDoc(docRef, dataToupdate);
  
      const updatedSnapshot = await getDoc(docRef);
      const updatedData = updatedSnapshot.data();
  
      // 상태 변경을 통해 화면 다시 렌더링
      setTitle(updatedData.title);
      setContents(updatedData.contents);
      setImage(updatedData.image);
      
      console.log('Title:', title); // 변경된 상태 확인용 로그
      console.log('Contents:', contents);
      console.log('Image:', image);

      navigate(`/`);
    } catch (error) {
      console.error('문서 업데이트 중 오류가 발생했습니다!', error);
    }
  };

    // 이미지 업로드 호출 함수
  const handleImageAdd = (event) => {
    const selectedImage = event.target.files[0];
    
    // 이미지 미리보기 생성
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result); // 이미지 미리보기에 Base64 데이터 사용
      dispatch(addImg(selectedImage, imagePreview));
    };
    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  return (
    <PostCardForm>
      <PostCardinputForm>
      <h1>수정 페이지</h1>
      <label>제목</label>
      <PostCardInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>내용</label>
      <PostCardTextarea value={contents} onChange={(e) => setContents(e.target.value)} />
      {image && <img src={image} alt="" style={{maxWidth: '100px', maxHeight: '100px'}} />}
      {image && <img src={imagePreview} style={{maxWidth: '100px', maxHeight: '100px'}} />}
      <input type='file'accept='image/*' onChange={handleImageAdd} />
      <button onClick={updateCompleteHandler}>수정완료</button>
      </PostCardinputForm>
    </PostCardForm>
  );
}

export default PostCardUpdatepage;