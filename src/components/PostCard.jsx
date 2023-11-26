import React, { useEffect } from 'react';
import { PostCardBox, PostCardBoxContainer } from '../style/CardFormStyles';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function PostCard({ postCards }) {
    const navigate = useNavigate();

    const fetchPostCards = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'postCards'));
            querySnapshot.forEach((doc) => {
                const docId = doc.id;
            });
        } catch (error) {
            console.error('Firebase 문서 ID를 가져오는 중 오류 발생:', error);
        }
    };

    // 컴포넌트가 마운트되었을 때 Firestore에서 문서 ID 가져오기
    useEffect(() => {
        fetchPostCards();
    }, []);

    const PostCardChangeHandler = (docId) => {
        navigate(`/postcardupdatepage/${docId}`);
    };

    return (
        <PostCardBoxContainer>
            {postCards && postCards.length > 0 ? (
                postCards.map((card) => {
                    return (
                        <PostCardBox key={card.id}>
                            <h1>{card.title}</h1>
                            {card.image && (
                                <img
                                    src={card.image}
                                    alt="이미지 미리보기"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            )}
                            <p>{card.contents}</p>
                            <button onClick={() => PostCardChangeHandler(card.id)}>수정하기</button>
                        </PostCardBox>
                    );
                })
            ) : (
                <p>게시물이 없습니다.</p>
            )}
        </PostCardBoxContainer>
    );
}

export default PostCard;
