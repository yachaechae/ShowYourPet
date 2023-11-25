import Home from 'pages/Home';
import Login from 'pages/Login';
import Mypage from 'pages/Mypage';
import PostCardPage from 'pages/PostCardPage';
import PostCardUpdatepage from 'pages/PostCardUpdatepage';
import RagisterPage from 'pages/RagisterPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
