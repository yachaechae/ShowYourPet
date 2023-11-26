import React from 'react';
import { ContainerDiv } from '../style/GlobalStyles';
import MyPageHeader from '../components/MyPageHeader';
import MyPageBody from 'components/MyPageBody';
import Title from 'components/common/Title';

export default function Mypage() {
    return (
        <>
            <Title />
            <ContainerDiv>
                <MyPageHeader />
                <MyPageBody></MyPageBody>
            </ContainerDiv>
        </>
    );
}
