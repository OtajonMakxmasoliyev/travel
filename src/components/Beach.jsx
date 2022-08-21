import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { beach, Mountain_city_last, recently, Honeymoon_freebies } from './server/server';

import star from "../images/icons/star.png"
import airplane_icon from "../images/icons/airplane_icon.png"
import hotel_icon from "../images/icons/hotel_icon.png"
import transfer_icon from "../images/icons/transfer_icon.png"
import activity_icon from "../images/icons/activity_icon.png"
import Carousel_block from './Carousel_block';



const options = {
    loop: true,
    center: false,
    margin: 10,
    dots: false,
    nav: false,
    margin: 24,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        },
        1366: {
            items: 4
        },
        1600: {
            items: 5
        }

    }
}


const Beach = () => {
    console.log(Mountain_city_last.title);
    return (
        <div className='beach'>
            <p className='blockTitle top'>Popular Beach Destinations</p>
            <div className="beachCarousel1">
                <Carousel_block mal={beach} loop={true} />
            </div>
            <p className='blockTitle'>Popular Beach Destinations</p>
            <div className="beachCarousel1">
                <Carousel_block mal={recently} lastInfo={Mountain_city_last} />
            </div>
            <p className='blockTitle'>Honeymoon Freebies Special</p>
            <div className="beachCarousel1 bottom">
                <Carousel_block mal={Honeymoon_freebies} loop={true} />
            </div>
        </div >
    )
}

export default Beach