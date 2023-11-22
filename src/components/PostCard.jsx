import React from 'react'

function PostCard({ postCards }) {
  return (
    <div>
      {postCards && postCards.length > 0 ? (
        postCards.map(card => (
          <div key={card.id}>
            {card.contents}
          </div>
        ))
      ) : (
        <p>게시물이 없습니다.</p>
      )}
    </div>
  )
}

export default PostCard;