import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mypage from '../pages/Mypage';
import Home from '../Home';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={Home} />
                    <Route path="/mypage" element={Mypage} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
