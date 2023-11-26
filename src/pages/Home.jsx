import { Postbox, MainContainer, PostInfo, User, PostHeader } from '../style/HomeSytles';
import { useSelector, useDispatch } from 'react-redux';
import { ContainerDiv } from 'style/GlobalStyles';
import SideMenu from 'components/common/SideMenu';
import { Firestore, deleteDoc, doc } from 'firebase/firestore';
import { PiDotsThreeVertical } from 'react-icons/pi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deletePost } from 'redux/module/action';
import { db } from '../firebase';

const sortPostsByTime = (posts) => {
    return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

function Home() {
    const postList = useSelector((state) => state.post.postList);
    const userList = useSelector((state) => state.auth.user);
    const sortedPostList = sortPostsByTime(postList);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOptionsClick = (postId) => {
        setShowMenu(!showMenu);
    };

    const handleEdit = (docId) => {
        navigate(`/postcardupdatepage/${docId}`);
    }

    const handleDelete = async (postId) => {
        try {
            const docRef = doc(db, 'postCards', postId);
            await deleteDoc(docRef);
            dispatch(deletePost(postId));
        } catch (error) {
            console.error('문서를 삭제하는 중에 오류가 발생했습니다:', error);
        }
    }

    return (
        <>
            <MainContainer>
                <SideMenu />
                <ContainerDiv $width="500" $Lpadding="350">
                    {sortedPostList.map((postCard) => {
                        return (
                            <>
                                <Postbox>
                                    <PostHeader>
                                        <div className="userName">{postCard.userName}</div>
                                        <div className="option">
                                            <PiDotsThreeVertical size={30} onClick={() => handleOptionsClick(postCard.id)}/>
                                             {showMenu && (
                                                <div className="menu">
                                                    <button onClick={() => handleEdit(postCard.id)}>수정</button>
                                                    <button onClick={() => handleDelete(postCard.id)}>삭제</button>
                                                </div>
                                            )}
                                        </div>
                                    </PostHeader>
                                    <img src={postCard.image} alt="" />
                                    <PostInfo>
                                        <div className="title">{postCard.title}</div>
                                        {postCard.contents}
                                        <div>작성 시간: {new Date(postCard.createdAt).toLocaleString()}</div>
                                    </PostInfo>
                                </Postbox>
                            </>
                        );
                    })}
                </ContainerDiv>
            </MainContainer>
        </>
    );
}

export default Home;
