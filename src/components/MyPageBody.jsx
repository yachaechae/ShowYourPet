import { auth } from '../firebase';
import React from 'react';
import { useSelector } from 'react-redux';
import { MyWritings, MypageBody } from 'style/MypageStyles';

export default function MyPageBody() {
    const postList = useSelector((state) => state.post.postList);
    const myPost = postList.filter((post) => post.userId === auth.currentUser.uid);
    return myPost.length > 0 ? (
        <MypageBody>
            {myPost.map((postCard) => {
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
    ) : (
        <>
            <MypageBody>
                <h2>작성된 게시글이 없어요!</h2>
            </MypageBody>
        </>
    );
}
