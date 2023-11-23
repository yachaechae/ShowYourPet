import React from 'react'
import { PostCardBox,PostCardBoxContainer } from '../style/CardFormStyles';
import { useNavigate } from 'react-router-dom';

function PostCard({ postCards }) {
  const navigate = useNavigate();

  const PostCardChangeHandler = (id) => {
    navigate(`/postcardupdatepage/${id}`);
  };

  return (
    <PostCardBoxContainer>
      {postCards && postCards.length > 0 ? (
        postCards.map(card => (
          <PostCardBox key={card.id}>
            <h1>{card.title}</h1>
            {card.image && <img src={card.image} alt='이미지 미리보기' style={{maxWidth: '100px', maxHeight: '100px'}} />}
            <p>{card.contents}</p>
            <button onClick={() => PostCardChangeHandler(card.id)}>수정하기</button>
          </PostCardBox>
        ))
      ) : (
        <p>게시물이 없습니다.</p>
      )}
    </PostCardBoxContainer>
  )
}

export default PostCard;