import React, { useState, useEffect } from 'react';
import { PostCardForm, PostCardinputForm, PostCardTextarea, PostCardInput  } from '../style/CardFormStyles';
import PostCard from './PostCard';
import { collection, addDoc , getDocs } from 'firebase/firestore';
import { db } from '../firebase';
 
function CardForm() {
  const [postCards, setPostCards] = useState([]); // 게시물 정보를 담은 상태
  const [title, setTitle] = useState(''); // 제목 상태
  const [contents, setContents] = useState(''); // 내용 상태
  const [image, setImage] = useState(null); // 이미지 파일 상태
  const [imagePreview, setImagePreview] = useState(null); // 이미지 미리보기 상태

  // Firebase에서 데이터를 불러오는 함수
  const fetchPostCards = async () => {
  const querySnapshot = await getDocs(collection(db, 'postCards'));
  const postData = [];
    querySnapshot.forEach((doc) => {
      postData.push({ ...doc.data(), id: doc.id });
    });
    setPostCards(postData);
  };

  // 컴포넌트가 마운트될 때 Firebase에서 데이터를 가져옴
  useEffect(() => {
    fetchPostCards();
  }, []);

  const onAddPostCard = async (event) => {
    // 새로고침 방지
    event.preventDefault();
      // 유효성 검사 
      if(!contents && !title) {
        return alert('내용과 제목을 입력해주세요.');
      }
    // 새로운 게시물 카드 만들기
    const newPostCard = {
      title,
      contents,
      image: imagePreview,
    }

    try {
      // Firestore에 'postCards'컬렉션에 새 게시물 추가
      const docRef = await addDoc(collection(db, 'postCards'), newPostCard);
      console.log('Document written with ID: ', docRef.id); // 추가된 문서의 ID 출력

      // 새로운 게시물을 기존 게시물 목록에 추가하고 상태를 업데이트
      setPostCards([...postCards, newPostCard]);
      setTitle('');
      setContents('');
      setImage(null);
      setImagePreview(null);
      // 문서 추가 중 오류 발생시 오류 메세지 출력
    } catch (e) {
      console.error('문서를 가져오는 중 오류가 발생했습니다. ', e);
    }
  };

  // 이미지 업로드 호출 함수
  const handleImageAdd = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);

    // 이미지 미리보기 생성
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result); // 이미지 미리보기에 Base64 데이터 사용
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <>
      {/* 게시물 추가 폼 */}
      <PostCardForm onSubmit={onAddPostCard}>
        <PostCardinputForm>
          <label>제목</label>
          <PostCardInput onChange={event => setTitle(event.target.value)} value={title} placeholder='제목을 입력 해주세요.'/>
          <label>내용</label>
          <PostCardTextarea onChange={event => setContents(event.target.value)} value={contents} placeholder='내용을 입력 해주세요.'/>
          <input type='file'accept='image/*' onChange={handleImageAdd} />
          {imagePreview && <img src={imagePreview} alt='이미지 미리보기' style={{maxWidth: '100px', maxHeight: '100px'}} />}
          <button type='submit'>게시물 추가</button>
        </PostCardinputForm>
      </PostCardForm>

      {/* 게시물 목록을 보여주는 PostCard 컴포넌트 */}
      <PostCard postCards={postCards}/> {/* postCards를 PostCard 컴포넌트에 props로 전달 */}
    </>
  )
}

export default CardForm;