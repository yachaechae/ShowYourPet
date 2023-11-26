import React, { useState, useEffect } from 'react';
import { PostCardForm, PostCardinputForm, PostCardTextarea, PostCardInput } from '../style/CardFormStyles';
import PostCard from './PostCard';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { addPost, addImg, validationError } from 'redux/module/action';
import { useDispatch, useSelector } from 'react-redux';
import { performValidation } from 'redux/module/loadData';

function CardForm() {
    const [postCards, setPostCards] = useState([]); // 게시물 정보를 담은 상태
    const [title, setTitle] = useState(''); // 제목 상태
    const [contents, setContents] = useState(''); // 내용 상태
    const [image, setImage] = useState(null); // 이미지 파일 상태
    const [imagePreview, setImagePreview] = useState(null); // 이미지 미리보기 상태
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.user.uid);
    const userName = useSelector((state) => state.auth.user.email);

    const onAddPostCard = async (event) => {
        // 새로고침 방지
        event.preventDefault();
        // performValidation 함수를 통해 유효성 검사를 수행하고 유효성 여부를 반환받음
        const isValid = performValidation(contents, title);
        if (!isValid) {
            alert('제목과 내용이 입력되지 않았습니다.');
            return;
        }
        // 새로운 게시물 카드 만들기
        const newPostCard = {
            userId,
            userName,
            title,
            contents,
            image: imagePreview,
            createdAt: new Date().toISOString()
        };

        try {
            // Firestore에 'postCards'컬렉션에 새 게시물 추가
            const docRef = await addDoc(collection(db, 'postCards'), newPostCard);
            const newPostCard_data = { id: docRef.id, ...newPostCard };

            // Redux store에 새로운 게시물 데이터 추가를 위해 액션을 디스패치
            dispatch(addPost(newPostCard_data));

            // 새로운 게시물을 기존 게시물 목록에 추가하고 상태를 업데이트
            setPostCards([...postCards, newPostCard]);
            setTitle('');
            setContents('');
            setImage(null);
            setImagePreview(null);
            // 문서 추가 중 오류 발생시 오류 메세지 출력
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) {
                fileInput.value = ''; // 파일 선택(input) 값 초기화
            }
        } catch (e) {
            console.error('문서를 가져오는 중 오류가 발생했습니다. ', e);
        }
    };

    // 이미지 업로드 호출 함수
    const handleImageAdd = (event) => {
        const selectedImage = event.target.files[0]; //
        // 이미지 미리보기 생성

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result); // 이미지 미리보기에 Base64 데이터 사용
            dispatch(addImg(selectedImage, imagePreview));
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
            {/* 게시물 추가 폼 */}
            <PostCardForm onSubmit={onAddPostCard}>
                <PostCardinputForm>
                    <label>제목</label>
                    <PostCardInput
                        onChange={(event) => setTitle(event.target.value)}
                        value={title}
                        placeholder="제목을 입력 해주세요."
                    />
                    <label>내용</label>
                    <PostCardTextarea
                        onChange={(event) => setContents(event.target.value)}
                        value={contents}
                        placeholder="내용을 입력 해주세요."
                    />
                    <input type="file" accept="image/*" onChange={handleImageAdd} />
                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="이미지 미리보기"
                            style={{ maxWidth: '100px', maxHeight: '100px' }}
                        />
                    )}
                    <button type="submit">게시물 추가</button>
                </PostCardinputForm>
            </PostCardForm>
        </>
    );
}

export default CardForm;
