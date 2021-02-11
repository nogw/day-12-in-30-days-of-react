import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: #000;
  position: absolute;
  top:0;
  right:0;
  left:0;
  width: 100%;
  height: 70px;

  a {
    color: #fff;
    font-size: 25px;
    font-weight: 900;
    text-decoration: none;
    margin: 40px;

    &:hover {
      text-decoration: underline
    }
  }
`;
