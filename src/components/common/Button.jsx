import styled from 'styled-components';

export default function Button({ text, onClick = () => {} }) {
    return (
        <BtnWrapper>
            <button onClick={onClick}>{text}</button>
        </BtnWrapper>
    );
}

const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & button {
        background-color: white;
        border: none;
        color: black;
        font-size: 16px;
        padding: 6px 12px;
        cursor: pointer;
        &:hover {
            background-color: #fff9c0;
            color: black;
            border: none;
            border-radius: 10px;
            height: 38px;
        }
    }
`;
