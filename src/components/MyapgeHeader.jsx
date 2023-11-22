import React from 'react';
import { ChangeImg, Image, Info, MypageHeader } from '../style/MypageStyles';

export default function MyapgeHeader() {
    return (
        <>
            <MypageHeader as="form">
                <Image>
                    <img
                        src="https://lh3.googleusercontent.com/a/ACg8ocLaP80xCrAJBkTaG3InkSmlzAL1-bAI-pdVIzWTLBOzuUs=s288-c-no"
                        alt=""
                    />
                    <ChangeImg>{/* <input type="file" value="이미지변경" /> */}</ChangeImg>
                </Image>
                <Info>이름</Info>
            </MypageHeader>
        </>
    );
}
