import React from 'react'
import HeroSection from './components/HeroSection';

const Home = () => {
  
    const data = {
      name: "thapa store",
    };
  
    return <HeroSection myData={data} />;
  
}

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