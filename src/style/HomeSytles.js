import styled from 'styled-components';
import { MasterBtn } from './GlobalStyles';

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

export const Postmenu = styled.div`
    width: 85%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    float: left;
    display: flex;
`;
export const RDbtn = styled.button`
    float: right;
    margin-left: 457px;
    display: inline;
    float: right;
`;

export const Postbox = styled.div`
    width: 600px;
    height: 700px;
    flex-direction: row;
    border: 1px solid black;
    margin: 10px;
    position: relative;
`;

export const Postname = styled.span`
    flex-direction: row;
    float: left;
`;

export const Imgbox = styled.div`
    width: 500px;
    height: 400px;
    src: '';
    alt: '';
`;

export const Commentbox = styled.div`
    position: absolute;
    bottom: 0;
    border: 1px solid black;
    width: 600px;
    height: 200px;
`;

export const CI = styled.input`
    width: 510px;
`;

export const ULC = styled.button``;

export const Sidemenu = styled.div`
    width: 350px;
    height: 100%;
    border-right: 1px solid black;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
`;

export const SideList = styled.div`
    width: 300px;
    height: 50vw;
    position: relative;
    top: 50%;
    align-items: center;
`;

export const LinkBtn = styled.button`
    ${MasterBtn};
    font-size: 1.5rem;
    background: transparent;
`;
