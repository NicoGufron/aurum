import React, { useRef } from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import 'animate.css';
import ImgCarousel from '../components/Carousel.js';
// import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  })

  const CustomButton = styled(ButtonUnstyled)`
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: bold;
    font-size: 18px;
    background-color: transparent;
    margin-top: 20px;
    padding: 15px 48px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: 1px solid white;

    &:hover {
      color: black;
      background-color: white;
    }

    &.${buttonUnstyledClasses.active} {
      background-color: white;
    }

    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  return (
    <>
      <div className='contentOne'>
        <Navbar></Navbar>
        <div className='title'>
          <h1 className="topTitle animate__animated animate__fadeIn animate__slow">E   D   E   N </h1>
          <h1 className='bottomTitle animate__animated animate__fadeIn animate__slower'>The Meta Estate</h1>
        </div>
      </div>
      <div className='contentTwo' id="about">
        <div className='wrapperTwo'>
          <h1 className='titleTwo'>ABOUT</h1>
        </div>
        <div className='aboutText'>
          <p>EDEN is where virtual interior starts, it started as interior designers wanted to make virtual interior where the client can connect with the designers, allowing them to save time to meet in the virtual interior.</p>
          <p>EDEN is where virtual interior starts, it started as interior designers wanted to make virtual interior where the client can connect with the designers, allowing them to save time to meet in the virtual interior.</p>
        </div>
        <CustomButton>View More</CustomButton>
      </div>
      <div className='contentThree' id="features">
        <div className='subtitle'>
          <h1>Features</h1>
          <h5>Our features on virtual interiors</h5>
        </div>
        <div className="featuresText">
          {/* <div className="blockText">
            <h2>Virtual Conference</h2>
            <lottie-player
              className="lotties"
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json"
            >
            </lottie-player>
            <p>Where interiors can meet with client through virtual conference</p>
          </div>
          <div className="blockText">
            <h2>Instant Changes</h2>
            <lottie-player
              className="lotties"
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_br2wdepe.json"
            ></lottie-player>
            <p>There are instant changes that can be applied in our virtual interior!</p>
          </div>
          <div className="blockText">
            <h2>Greatest Quality</h2>
            <lottie-player
              className="lotties"
              autoplay 
              loop 
              src="https://assets10.lottiefiles.com/private_files/lf30_u4mgmpw4.json">
              
            </lottie-player>
            <p>We deliver the greatest quality to our client!</p>
          </div> */}
        </div>
        <div className="subtitleFeature">
          <h3 style={{ textShadow: "5px 5px black" }}>...Many more to be added!</h3>
        </div>
      </div>
      <div className="contentFour" id="products">
        <div className='subtitle'>
          <h1>Products</h1>
          <h5>See the inside of virtual interior!</h5>
        </div>
        <div className="carousel">
          <ImgCarousel></ImgCarousel>
        </div>
      </div>
      <div className='contentFive'>
          <div className='box'>
            hey
          </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home