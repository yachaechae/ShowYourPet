import styled, { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
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
