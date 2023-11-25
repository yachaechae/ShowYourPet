import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mypage from '../pages/Mypage';
import Home from '../Home';
import PostCardPage from 'pages/PostCardPage';
import PostCardUpdatepage from 'pages/PostCardUpdatepage';

export default function Router() {
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
