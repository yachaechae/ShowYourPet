import React from 'react';
import { PiHouse, PiPencilLine, PiUserCircle } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkBtn, Sidemenu } from 'style/HomeSytles';

export default function SideMenu() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const linkBtn = (e) => {
        const pageName = e.target.name;
        if (pageName === 'home') {
            navigate(`/`);
        } else if (!user) {
            navigate('/login');
        } else navigate(`/${pageName}`);
    };

    return (
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
    );
}
