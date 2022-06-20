import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import no1 from "../public/assets/image-1.png";
import no2 from "../public/assets/image-2.png";
import no3 from "../public/assets/image-3.png";
import no4 from "../public/assets/image-4.png";

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
                <Image src={no4}></Image>
            </div>
        </Carousel>
    );
}

export default ImgCarousel;