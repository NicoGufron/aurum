import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import 'animate.css';
import ImgCarousel from '../components/Carousel.js';
import VideoGIF from '../public/assets/video.gif';

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
          <h1 className="topTitle animate__animated animate__fadeIn animate__slow">A U R U M </h1>
          <h1 className='bottomTitle animate__animated animate__fadeIn animate__slower'>Virtual Interior</h1>
          <p className="subtext animate__animated animate__fadeIn animate__slower">Offering a new breakthrough of interior design innovation technology. We provide virtual interior services by turning your static interior projects into an interactive, most fun, and real-time rendering project.</p>
        </div>
        <div>
        </div>
      </div>
      <div className='contentTwo' id="about">
        <div className='wrapperTwo'>
          <h1 className='titleTwo'>WHY CHOOSE VIRTUAL INTERIOR?</h1>
        </div>
        <div className="reasons">
          <div className='aboutText'>
            <h3>Stay at Home</h3>
            <p style={{ textAlign: "justify" }}>Save your time and distance. You would not have to meet your designer one-on-one anymore, your designer will work with you online to bring your soon to be space with an interactive 3D model while you stay at home. </p>
          </div>
          <div className='aboutText'>
            <h3>Interactive 3D Design</h3>
            <p style={{ textAlign: "justify" }}>You will be able to interact with the objects of your choosing. How? We develop your virtual interior so you will be able to feel like you are actually in your soon to be space while you decide what fits in or not by choosing materials or textures real-time!</p>
          </div>
        </div>
        <div className='video-section'>
          <h1>Preview</h1>
          <div className='video-preview'>
            <Image src={VideoGIF}></Image>
          </div>
          <Link href="#features"><CustomButton>View More</CustomButton></Link>
        </div>
      </div>
      <div className='contentThree' id="features">
        <div className='subtitle'>
          <h1>Gallery</h1>
          <h5>Check out our gallery from our previous projects!</h5>
        </div>
        <div className="featuresText" id="carousel">
          <ImgCarousel ></ImgCarousel>
        </div>
      </div>
      <div className='contentFive' id="contact">
        <div className='box'>
          <h3>Interested? Contact Us!</h3>
          <p></p>
          <div className='form-box'>
            <input type="email" placeholder='E-mail*' id="email-box" name="email-box" required></input>
            <input type="number" placeholder='Phone*' id="phone-box" name="phone-box" required></input>
            <input type="text" placeholder='Message*' id="phone-box" name="phone-box" required></input>
            <label style={{ textAlign: "left", padding: "10px 0px 0px 25px" }}>* Required</label>
            <CustomButton className="message-button">Send Message</CustomButton>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home