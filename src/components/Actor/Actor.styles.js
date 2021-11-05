import styled from 'styled-components';

export const Wrapper = styled.div`
  color: white;
  background: var(--darkGrey);
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  h3 {
    margin: 10px 0 0 0;
    color:white
  }

  p {
    margin: 5px 0;
    color:grey
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
  height:300px;
  @media screen and (max-width: 500px) {
    height:600px;
  }
`;
