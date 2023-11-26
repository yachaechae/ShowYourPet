import { useNavigate } from 'react-router-dom';
import { PiUserCircleLight, PiHouseLight } from 'react-icons/pi';
import {
    Commentbox,
    Imgbox,
    Postname,
    Postbox,
    Postmenu,
    SideList,
    LinkBtn,
    Sidemenu,
    MainContainer,
    RDbtn,
    CI,
    ULC
} from '../style/HomeSytles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostCards } from 'redux/module/loadData';
import { ContainerDiv } from 'style/GlobalStyles';

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.postList);

    useEffect(() => {
        fetchPostCards()(dispatch);
    }, []);

    console.log(postList);

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
                        <PiHouseLight />
                        Home
                    </LinkBtn>
                    <LinkBtn name="mypage" onClick={linkBtn}>
                        <PiUserCircleLight />
                        Mypage
                    </LinkBtn>
                    <LinkBtn name="postcardpage" onClick={linkBtn}>
                        자랑하기
                    </LinkBtn>
                </Sidemenu>
                <ContainerDiv>
                    <Postbox>
                        <Postname>
                            <span>대충 게시물이름</span>
                            <RDbtn>...</RDbtn>
                        </Postname>
                        <Imgbox>
                            <img />
                        </Imgbox>
                        <Commentbox>
                            <CI></CI>
                            <ULC>댓글올리기</ULC>
                        </Commentbox>
                    </Postbox>
                </ContainerDiv>
            </MainContainer>
        </>
    );
}

export default Home;
