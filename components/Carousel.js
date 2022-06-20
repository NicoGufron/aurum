import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import no1 from "../public/assets/bg1.png";
import no2 from "../public/assets/bg2.png";
import no3 from "../public/assets/bg3.jpg";
import no4 from "../public/assets/bg4.jpg";

function ImgCarousel() {
    return (
        <Carousel
            stopOnHover={false}
            interval={3000}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            width="100%"
        >
            <div>
                <Image src={no1}></Image>
            </div>
            <div>
                <Image src={no2}></Image>
            </div>
            <div>
                <Image src={no3}></Image>
            </div>
            <div>
                <Image src={no4} layout={"responsive"}></Image>
            </div>
        </Carousel>
    );
}

export default ImgCarousel;