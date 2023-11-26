import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import RagisterPage from '../pages/RagisterPage';
import Login from '../pages/Login';
import Mypage from '../pages/Mypage';
import PostCardPage from '../pages/PostCardPage';
import PostCardUpdatepage from '../pages/PostCardUpdatepage';
import { useDispatch } from 'react-redux';
import { fetchPostCards } from 'redux/module/loadData';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { signIn } from 'redux/module/auth';

export default function Router() {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchPostCards()(dispatch);
        onAuthStateChanged(auth, (user) => {
            if (user !== null) {
                dispatch(signIn(user));
            }
        });
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<RagisterPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/mypage" element={<Mypage />} />
                    <Route path="/postcardpage" element={<PostCardPage />} />
                    <Route path="/postcardupdatepage/:id" element={<PostCardUpdatepage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
