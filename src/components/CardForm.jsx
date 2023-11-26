import React, { useState, useEffect } from 'react';
import { PostCardForm, PostCardinputForm, PostCardTextarea, PostCardInput  } from '../style/CardFormStyles';
import PostCard from './PostCard';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { addPost, addImg } from 'redux/module/action';
import { useDispatch } from 'react-redux';
import { performValidation } from 'redux/module/loadData';
import { useNavigate } from 'react-router-dom';

function CardForm() {
  const [postCards, setPostCards] = useState([]); // 게시물 정보를 담은 상태
  const [title, setTitle] = useState(''); // 제목 상태
  const [contents, setContents] = useState(''); // 내용 상태
  const [image, setImage] = useState(null); // 이미지 파일 상태
  const [imagePreview, setImagePreview] = useState(null); // 이미지 미리보기 상태
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onAddPostCard = async (event) => {
    event.preventDefault();

    const isValid = performValidation(contents, title);
    if (!isValid) {
      alert('제목과 내용이 입력되지 않았습니다.');
      return;
    }

    const newPostCard = {
      title,
      contents,
      image: imagePreview,
      createdAt: new Date().toISOString(),
    }

    try {
      const docRef = await addDoc(collection(db, 'postCards'), newPostCard);
      navigate(`/`);
      const newPostCardData = { id: docRef.id, ...newPostCard };

      dispatch(addPost(newPostCardData));

      setPostCards([...postCards, newPostCard]);
      setTitle('');
      setContents('');
      setImage(null);
      setImagePreview(null);

      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (e) {
      console.error('문서를 추가하는 중 오류가 발생했습니다. ', e);
    }
  };

  const handleImageAdd = (event) => {
    const selectedImage = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(selectedImage); // 이미지 파일 상태 업데이트
      dispatch(addImg(selectedImage, reader.result));
    };

    if (selectedImage !== undefined) {
      reader.readAsDataURL(selectedImage);
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  return (
    <>
      <PostCardForm onSubmit={onAddPostCard}>
        <PostCardinputForm>
          <label>제목</label>
          <PostCardInput onChange={event => setTitle(event.target.value)} value={title} placeholder='제목을 입력 해주세요.'/>
          <label>내용</label>
          <PostCardTextarea onChange={event => setContents(event.target.value)} value={contents} placeholder='내용을 입력 해주세요.'/>
          <input type='file' accept='image/*' onChange={handleImageAdd} />
          {imagePreview && <img src={imagePreview} alt='이미지 미리보기' style={{ maxWidth: '100px', maxHeight: '100px' }} />}
          <button type='submit'>게시물 추가</button>
        </PostCardinputForm>
      </PostCardForm>

      <PostCard postCards={postCards}/>
    </>
  )
}

export default CardForm;
