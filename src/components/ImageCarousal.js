import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from "react";
import bankImage from '../resources/image1.jpg';
import secureImage from '../resources/secure.png';
import '../styling/CarouselImage.css';
import Box from '@material-ui/core/Box';

export default function ImageCarousel() {
    return (
        <Carousel
            showIndicators={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            autoPlay={true}
            swipeable={true}
            emulateTouch={true}
            showThumbs={false}
        >
            <div class="image">
                <img src={bankImage} alt="bankImage" />

                <div class="contentOnImage">
                    <h2>
                        <Box component="span" sx={{ p: 2, bgcolor: "#000033" }}>
                            <span>Welcome to All New Banking Experience
                            </span>
                        </Box>
                    </h2>
                    <br />
                </div>
            </div>
            <div class="image">
                <div class="">
                    <img src={secureImage} alt="HungryKids" />
                    <div class="contentOnImage">
                        <h2>
                            <Box component="span" sx={{ p: 2, bgcolor: "#000033" }}>
                                <span>
                                    Secure and reliable banking at your fingertips!!
                                </span>
                            </Box>
                        </h2>
                        <br />
                    </div>
                </div>
            </div>
        </Carousel>

    );
}