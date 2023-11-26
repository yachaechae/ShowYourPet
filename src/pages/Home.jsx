import { Postbox, MainContainer, PostInfo, User, PostHeader } from '../style/HomeSytles';
import { useSelector } from 'react-redux';
import { ContainerDiv } from 'style/GlobalStyles';
import SideMenu from 'components/common/SideMenu';
import { Firestore } from 'firebase/firestore';
import { PiDotsThreeVertical } from 'react-icons/pi';

const sortPostsByTime = (posts) => {
    return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

function Home() {
    const postList = useSelector((state) => state.post.postList);
    const userList = useSelector((state) => state.auth.user);
    const sortedPostList = sortPostsByTime(postList);

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
                                            <PiDotsThreeVertical size={30} />
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
