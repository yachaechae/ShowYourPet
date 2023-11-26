import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Form, InputWrapper, LoginContainer } from 'style/LoginStyles';
import Title from 'components/common/Title';

export default function RagisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate();
    //const checkpassword if 다르면 일치하지 않습니다.

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log('user', user);
        });
    }, []);

    const signUp = async (event) => {
        event.preventDefault();

        if (email === '') {
            return alert('이메일을 입력해주세요');
        }
        if (password === '') {
            return alert('비밀번호를 입력해주세요');
        }

        if (password !== password2) {
            return alert('비밀번호와 비밀번호확인이 일치하지 않습니다.');
        }

        try {
            //   if 이메일 확인 식별자 확인해서 중복된 이메일입니다.
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('회원가입이 완료!', userCredential.user);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('회원가입을 실패!', errorCode, errorMessage);
            return alert('해당 이메일로 가입된 계정이 있습니다.');
        }
        navigate('/');
    };

    return (
        <LoginContainer>
            <Title />
            <Form>
                회원가입
                <InputWrapper>
                    <label>아이디</label>
                    <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="이메일을 입력해주세요"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>비밀번호</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        name="password"
                        required
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>비밀번호 확인</label>
                    <input
                        value={password2}
                        onChange={(e) => {
                            setPassword2(e.target.value);
                        }}
                        placeholder="비밀번호확인"
                        type="password"
                    />
                </InputWrapper>
                <Button onClick={signUp} text="회원가입" />
            </Form>
        </LoginContainer>
    );
}
