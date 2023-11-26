import React from 'react';
import { useSelector } from 'react-redux';
import { MyWritings, MypageBody } from 'style/MypageStyles';

export default function MyPageBody() {
    const postList = useSelector((state) => state.postList);
    return (
        <MypageBody>
            {postList.map((postCard) => {
                console.log(postCard);
                return (
                    <MyWritings>
                        <img src={postCard.image} alt="" />
                        <div className="info">
                            <div className="title">{postCard.title}</div>
                            {postCard.contents}
                        </div>
                    </MyWritings>
                );
            })}
        </MypageBody>
    );
}
