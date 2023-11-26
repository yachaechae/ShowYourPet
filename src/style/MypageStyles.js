import styled from 'styled-components';

export const MypageHeader = styled.section`
    background: #eaeaea;
    display: flex;
    width: 100%;
    gap: 1rem;
    margin: 2rem 0 0;
`;
export const Image = styled.div`
    background: #121212;
    & img {
        border-radius: 50%;
    }
`;
export const ChangeImg = styled.div`
    background: #fff;
`;
export const Info = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;
export const MypageBody = styled.section`
    margin: 3rem 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.46rem;
`;

export const MyWritings = styled.div`
    width: 300px;
    height: 300px;
    position: relative;
    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        background: #000;
    }
    & .info {
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #00000080;
        color: #fff;
    }
    & .info .title {
        font-size: 1.2rem;
    }
    &:hover .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
`;
