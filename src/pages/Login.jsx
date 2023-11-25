import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { firebaseAuth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Button from 'components/common/Button';

export default function Login() {
    const [email, setEmail] = useState('');

    const Rest_api_key = '8f6f8d7af58f247447b8ce9f1dc4e03f'; //REST API KEY
    const redirect_uri = 'http://localhost:3000/'; //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    const kakaohandleLogin = () => {
        window.location.href = kakaoURL;
    };

    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onChange = (event) => {
        const {
            target: { name, value }
        } = event;
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    };

    // 파이어베이스에 있는 로그인 정보와 동일하다면 "로그인이 되었습니다!!!" 그렇지 않다면
    // 아이디와 비밀번호를 다시 확인해주세요" 가 나온다.
    const signIn = async (event) => {
        event.preventDefault();
        if (email === '') {
            return alert('이메일을 입력해주세요');
        }
        if (password === '') {
            return alert('비밀번호를 입력해주세요');
        }
        try {
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
            console.log('로그인이 되었습니다!!!!', userCredential.user);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log('아이디와 비밀번호를 다시 확인해주세요', errorCode, errorMessage);
            // // return alert('비밀번호 또는 이메일을 확인해주세요');
        }
        navigate('/');
    };

    return (
        <Form>
            <InputWrapper>
                <label>이메일</label>
                <input type="email" value={email} name="email" onChange={onChange} required />
            </InputWrapper>
            <InputWrapper>
                <label>비밀번호</label>
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    name="password"
                    onChange={onChange}
                    required
                />
            </InputWrapper>
            <Button text="카카오 로그인" onClick={kakaohandleLogin}></Button>
            {/* <Button text="카카오 로그인" onClick={googlehandleLogin}></Button> */}
            <Button onClick={signIn} text="로그인" />
            <Button
                onClick={() => {
                    navigate('/register');
                }}
                text="회원가입"
            />
        </Form>
    );
}

const Form = styled.form`
    background-color: whitesmoke;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 500px;
    border-radius: 12px;
    margin: 20px 0;
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & label {
        width: 80px;
    }
    & input,
    textarea {
        width: 100%;
        padding: 12px;
    }
`;
