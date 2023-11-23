import Login from '../components/Login';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mypage from '../pages/Mypage';
import Home from '../pages/Home';
import RagisterPage from '../components/RagisterPage';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RagisterPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mypage" element={<Mypage />} />
            </Routes>
        </BrowserRouter>
    );
}
