import React from 'react';
import { ContainerDiv } from '../style/GlobalStyles';
import MyPageHeader from '../components/MyPageHeader';
import MyPageBody from 'components/MyPageBody';
import Title from 'components/common/Title';
import SideMenu from 'components/common/SideMenu';

export default function Mypage() {
    return (
        <>
            <SideMenu />
            <ContainerDiv>
                <MyPageHeader />
                <MyPageBody></MyPageBody>
            </ContainerDiv>
        </>
    );
}
