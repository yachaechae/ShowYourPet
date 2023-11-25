import React from 'react';
import { ContainerDiv } from '../style/GlobalStyles';
import MyPageHeader from '../components/MyPageHeader';
import MyPageBody from 'components/MyPageBody';

export default function Mypage() {
    return (
        <>
            <ContainerDiv>
                <MyPageHeader />
                <MyPageBody></MyPageBody>
            </ContainerDiv>
        </>
    );
}
