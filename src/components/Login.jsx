import React from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
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
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('로그인이 되었습니다!!!!', userCredential.user);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('아이디와 비밀번호를 다시 확인해주세요', errorCode, errorMessage);
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
                <input type="password" value={password} name="password" onChange={onChange} required />
            </InputWrapper>
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
