import { useNavigate } from 'react-router-dom';
import { PiUserCircle, PiHouse, PiPencilLine } from 'react-icons/pi';
import { Postbox, LinkBtn, Sidemenu, MainContainer, PostInfo, User } from '../style/HomeSytles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostCards } from 'redux/module/loadData';
import { ContainerDiv } from 'style/GlobalStyles';

const sortPostsByTime = (posts) => {
    return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

function Home() {
    const navigate = useNavigate();
    const postList = useSelector((state) => state.post.postList);
    const user = useSelector((state) => state.auth.user);
    console.log(user);

    const linkBtn = (e) => {
        const pageName = e.target.name;
        if (pageName == 'home') {
            navigate(`/`);
        } else if (!user) {
            navigate('/login');
        } else navigate(`/${pageName}`);
    };

    const sortedPostList = sortPostsByTime(postList);

    return (
        <>
            <MainContainer>
                <Sidemenu>
                    <LinkBtn name="home" onClick={linkBtn}>
                        <PiHouse />
                        HOME
                    </LinkBtn>
                    <LinkBtn name="mypage" onClick={linkBtn}>
                        <PiUserCircle />
                        MYPAGE
                    </LinkBtn>
                    <LinkBtn name="postcardpage" onClick={linkBtn}>
                        <PiPencilLine />
                        WRITE
                    </LinkBtn>
                </Sidemenu>
                <ContainerDiv $width="500" $Lpadding="350">
                    {sortedPostList.map((postCard) => {
                        console.log(postCard);
                        return (
                            <Postbox>
                                <img src={postCard.image} alt="" />
                                <PostInfo>
                                    <User></User>
                                    <div className="title">{postCard.title}</div>
                                    {postCard.contents}
                                    <div>작성 시간: {new Date(postCard.createdAt).toLocaleString()}</div>
                                </PostInfo>
                            </Postbox>
                        );
                    })}
                </ContainerDiv>
            </MainContainer>
        </>
    );
}

export default Home;
