import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { beach } from './server/server';

import star from "../images/icons/star.png"



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
        }
    }
}


const Beach = () => {
    console.log(beach);
    return (
        <div>
            <div className="beachCarousel">
                <OwlCarousel {...options} className='owl-theme owl_carusel' loop >
                    {
                        beach.map((data, index) => (
                            <div className="item" key={index}>
                                <div className="popCard">
                                    <img src={data.image} alt="" />
                                    <div className="titleRating">
                                        <p alt={data.name}>{data.name}</p>
                                        <div className="rate">
                                            <img src={star} />
                                            <span>{data.rate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </OwlCarousel>
            </div>
        </div >
    )
}

export default Beach