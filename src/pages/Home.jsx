import { useNavigate } from 'react-router-dom';
import { PiUserCircle, PiHouse, PiPencilLine } from 'react-icons/pi';
import { Postbox, LinkBtn, Sidemenu, MainContainer, PostInfo, User } from '../style/HomeSytles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostCards } from 'redux/module/loadData';
import { ContainerDiv } from 'style/GlobalStyles';

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.postList);
    // dispatch(fetchPostCards());
    // console.log(postList);

    useEffect(() => {
        fetchPostCards()(dispatch);
    }, []);

<<<<<<< HEAD
    // console.log(postList);

=======
>>>>>>> 4d5010c71c8da499a8cebd89fb3b0dfaccc34f0c
    const linkBtn = (e) => {
        const pageName = e.target.name;
        if (pageName == 'home') {
            navigate(`/`);
        } else navigate(`/${pageName}`);
    };
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
                    {postList.map((postCard) => {
                        console.log(postCard);
                        return (
                            <Postbox>
                                <img src={postCard.image} alt="" />
                                <PostInfo>
                                    <User></User>
                                    <div className="title">{postCard.title}</div>
                                    {postCard.contents}
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
