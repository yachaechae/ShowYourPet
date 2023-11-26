import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TitleStyle } from 'style/GlobalStyles';

export default function Title() {
    const navigate = useNavigate();
    return (
        <TitleStyle
            onClick={() => {
                navigate('/');
            }}
        >
            Show Your Pet
        </TitleStyle>
    );
}
