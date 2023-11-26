import React, { useState } from 'react';
import { Image, Info, MypageHeader } from '../style/MypageStyles';
import MyPageBody from './MyPageBody';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { auth, storage } from '../firebase';
import { PiUserCircleThin } from 'react-icons/pi';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { updateUser } from 'redux/module/auth';

export default function MyPageHeader() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const uploadImg = (event) => {
        const uploadToStorage = async () => {
            const imgInfo = event.target.files[0];
            const storageRef = ref(storage, `images/profile/${imgInfo.name}`);
            await uploadBytes(storageRef, imgInfo);
            const imgRef = await getDownloadURL(storageRef);
            await updateProfile(auth.currentUser, {
                displayName: auth.currentUser.email,
                photoURL: imgRef
            });
            dispatch(updateUser({ photoURL: imgRef }));
        };
        uploadToStorage();
    };

    return (
        <MypageHeader>
            <Image>
                {!user.photoURL ? <PiUserCircleThin size={300} /> : <img src={`${user.photoURL}`} alt="" />}
                <div className="changeForm">
                    <label htmlFor="changeImg">이미지 변경</label>
                    <input type="file" accept="image/*" name="changeImg" id="changeImg" onChange={uploadImg} />
                </div>
            </Image>
            <Info>{user.email}님</Info>
        </MypageHeader>
    );
}
