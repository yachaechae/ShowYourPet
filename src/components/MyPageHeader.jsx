import React from 'react';
import { ChangeImg, Image, Info, MypageHeader } from '../style/MypageStyles';
import MyPageBody from './MyPageBody';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function MyPageHeader() {
    const user = useSelector((state) => state.auth.user);
    console.log(user);

    return (
        <MypageHeader as="form">
            <Image>
                <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocLaP80xCrAJBkTaG3InkSmlzAL1-bAI-pdVIzWTLBOzuUs=s288-c-no"
                    alt=""
                />
                <ChangeImg></ChangeImg>
            </Image>
            <Info>{user.email}님</Info>
        </MypageHeader>
    );
}
