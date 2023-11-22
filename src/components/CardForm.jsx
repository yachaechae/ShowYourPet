import React from 'react'
import { PostCardForm } from '../style/CardFormStyles';
import { PostCardinput } from '../style/CardInputStyles';
import { PostCardTextarea } from '../style/CardTextareaStyles';
import PostCard from './PostCard';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';


function CardForm() {
  const [postCards, setPostCards] = useState([]);
  const [contents, setContents] = useState('');


  const onAddPostCard = (event) => {
    // 새로고침 방지
    event.preventDefault();
      // 유효성 검사
      if(!contents) {
        return alert('내용을 입력해주세요.');
      }
    // 새로운 게시물 카드 만들기(추가 코드 필요)
    const newPostCard = {
      id: uuidv4(),
      contents,
    }
    setPostCards([...postCards, newPostCard]);
    setContents('');
  }

  // 파일 업로드 기능 (코드 수정 필요)
  // const FileUpLoad = () => {
  //   const fileInputRef = useRef<HTMLInputElement>(null);
  // }

  // const handleClickFileInput = () => {
  //   fileInputRef.current?.click();
  // }

  return (
    <>
      <PostCardForm onSubmit={onAddPostCard}>
        <PostCardinput>
          <label>내용</label>
          <PostCardTextarea onChange={event => setContents(event.target.value)} value={contents} placeholder='내용을 입력 해주세요.'/>
          <PostCardTextarea placeholder='이미지도 넣을 수 있게 해야해'/>
          <button type="submit">게시물 추가</button>
        </PostCardinput>
        {/* 파일 업로드 기능 (코드 수정 필요) */}
        {/* <FileInput type='file' accept='image/jpg, image/jpeg, image/png' ref={fileInputRef} onChange={uploadProfile} />
        <FileUploadButton type='button' onClick={handleClickFileInput}>
          파일 업로드 버튼
        </FileUploadButton> */}
        {/* <PostCardSubmitButton>
        </PostCardSubmitButton> */}
      </PostCardForm>
      <PostCard postCards={postCards}/> {/* postCards를 PostCard 컴포넌트에 props로 전달 */}
    </>
  )
}

export default CardForm;



