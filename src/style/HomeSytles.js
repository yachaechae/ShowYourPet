import styled from 'styled-components';
import { MasterBtn } from './GlobalStyles';

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

export const Sidemenu = styled.div`
    width: 350px;
    height: 100%;
    border-right: 1px solid black;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    position: fixed;
`;

export const LinkBtn = styled.button`
    ${MasterBtn};
    font-size: 1.5rem;
    background: transparent;
    display: flex;
    align-items: center;
`;

export const Postbox = styled.div`
    width: 500px;
    border: 1px solid black;
    margin: 10px;

    & img {
        width: 100%;
        height: 500px;
        object-fit: contain;
        background: #000;
    }
`;

export const PostInfo = styled.div`
    padding: 0.5rem 1rem;
    & .title {
        font-weight: bold;
        margin: 0 0 0.5rem;
    }
`;

export const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.5rem 1rem;
    & .userName {
        font-size: 1.5rem;
    }
`;

export const Postname = styled.span`
    flex-direction: row;
`;
