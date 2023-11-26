import React from 'react';
import { ChangeImg, Image, Info, MypageHeader } from '../style/MypageStyles';
import MyPageBody from './MyPageBody';
import { useSelector } from 'react-redux';

export default function MyPageHeader() {
    const user = useSelector((state) => {
        console.log('state', state);
        return state.auth.user;
    });

    if (user === null) return null;

    return (
        <>
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
        </>
    );
}
