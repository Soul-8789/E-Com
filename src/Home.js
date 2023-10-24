import React from 'react'
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper className='test'>
    Home
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;


export default Home;


// @media (max-width: ${({ theme }) => theme.media.tab}) {
//     .container {
//     max-width: 130rem;
//     padding: 0 3.2rem;
//   }
//   }

//    @media (max-width: ${({ theme }) => theme.media.mobile}) {
//        html {
//       font-size: 50%;
//     }