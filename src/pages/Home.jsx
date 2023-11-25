import { useState } from 'react';
import { ContainerDiv } from '../style/GlobalStyles';
import { useNavigate } from 'react-router-dom';
import {
  Commentbox,
  Imgbox,
  Postname,
  Postbox,
  Postmenu,
  SideList,
  LinkBtn,
  Sidemenu,
  FS,
  RDbtn,
  CI,
  ULC
} from '../style/HomeSytles';

function Home() {
  const [SideList] = useState('');
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  };
  const goLogin = () => {
    navigate('/login');
  };

  const linkBtn = (e) => {
    console.log(e.target.name);

    navigate(`/${e.target.name}`);
  };
  return (
    <>
      <FS>
        <Sidemenu>
          <p>{SideList}</p>
          <LinkBtn name="home">Home</LinkBtn>
          <LinkBtn name="login">Login</LinkBtn>
          <LinkBtn name="mypage">Mypage</LinkBtn>
          <LinkBtn name="postWrite">PostWrite</LinkBtn>
        </Sidemenu>
        <Postmenu>
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
        </Postmenu>
      </FS>
    </>
  );
}

export default Home;
