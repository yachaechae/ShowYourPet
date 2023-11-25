import styled from 'styled-components';

export const FS = styled.div`
  width: 100vw;
  height: 100vw;
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
  width: 150px;
  height: 100%;
  border: 1px solid black;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SideList = styled.div`
  width: 300px;
  height: 50vw;
  position: relative;
  top: 50%;
  align-items: center;
`;

export const LinkBtn = styled.button``;
