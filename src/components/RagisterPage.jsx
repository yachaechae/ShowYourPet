import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function RagisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordChk, setPasswordChk] = useState('');
    const navigate = useNavigate();
    //const checkpassword if 다르면 일치하지 않습니다.

    const passwordDoubleCheck = (password, passwordChk) => {
        if (password !== passwordChk) {
            console.log('비밀번호가 다릅니다.');
            return;
        } else {
            console.log('비밀번호가 동일합니다.');
        }
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log('user', user);
        });
    }, []);

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

    const signUp = async (event) => {
        event.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('회원가입이 되었습니다 !!', userCredential.user);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('회원가입을 실패하였습니다 !!!', errorCode, errorMessage);
        }
        navigate('/');
    };

    return (
        <div>
            <Form>
                회원가입
                <InputWrapper>
                    <label>아이디</label>
                    <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={onChange}
                        required
                        placeholder="이메일을 입력해주세요"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>비밀번호</label>
                    <input type="password" value={password} name="password" onChange={onChange} required />
                </InputWrapper>
                <InputWrapper>
                    <label>비밀번호 확인</label>
                    <input onChange={(e) => {}} type="password" name="signup_pwd_check" />
                </InputWrapper>
                <Button onClick={signUp} text="회원가입" />
            </Form>
        </div>
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
