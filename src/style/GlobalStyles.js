import styled, { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

import GiantsInline from '../fonts/Giants-Inline.otf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'IM_Hyemin-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/IM_Hyemin-Bold.woff2') format('woff');
    font-weight: normal;
    font-style: normal;}

    ${reset}

    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        margin-bottom: 100px;
    }
    ol, ul{
        list-style: none;
    }
`;

const defaultWidth = 915;
export const ContainerDiv = styled.div`
    width: ${(props) => props.$width || defaultWidth}px;
    padding-left: ${(props) => props.$Lpadding || 0}px;
    margin: 0 auto;
`;
export const MasterBtn = css`
    cursor: pointer;
    border: 0;
`;
export const TitleStyle = styled.div`
    font-size: 2rem;
    font-family: 'IM_Hyemin-Bold';
    text-align: center;
    cursor: pointer;
`;
