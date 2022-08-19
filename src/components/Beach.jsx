import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { beach } from './server/server';
import { recently } from './server/server';

import star from "../images/icons/star.png"
import airplane_icon from "../images/icons/airplane_icon.png"
import hotel_icon from "../images/icons/hotel_icon.png"
import transfer_icon from "../images/icons/transfer_icon.png"
import activity_icon from "../images/icons/activity_icon.png"



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
    console.log(beach);
    return (
        <div className='beach'>
            <p className='blockTitle top'>Popular Beach Destinations</p>
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
                                    <p className='dayNight'>{data.day} days {data.day + 1} nights</p>
                                    <div className="services">
                                        <div className="service">
                                            <img src={airplane_icon} />
                                            <p>{data.services.flight} Flight</p>
                                        </div>
                                        <div className="service">
                                            <img src={hotel_icon} />
                                            <p>{data.services.hotel} Hotels</p>
                                        </div>
                                        <div className="service">
                                            <img src={transfer_icon} />
                                            <p>{data.services.transfer} Transfers</p>
                                        </div>
                                        <div className="service">
                                            <img src={activity_icon} />
                                            <p>{data.services.activity} Activity</p>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <ul>
                                            {
                                                data.quality.map((info, index) => (
                                                    <li key={index}>
                                                        <p>{info}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="sale">
                                        <del>₹{data.sale}</del>
                                        <strong>₹{data.price}</strong>
                                        <sub>Per Person</sub>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </OwlCarousel>
            </div>
            <p className='blockTitle'>Popular Beach Destinations</p>
            <div className="beachCarousel">
                <OwlCarousel {...options} className='owl-theme owl_carusel' loop={false} >
                    {
                        recently.map((data, index) => (
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
                                    <p className='dayNight'>{data.day} days {data.day + 1} nights</p>
                                    <div className="services">
                                        <div className="service">
                                            <img src={airplane_icon} />
                                            <p>{data.services.flight} Flight</p>
                                        </div>
                                        <div className="service">
                                            <img src={hotel_icon} />
                                            <p>{data.services.hotel} Hotels</p>
                                        </div>
                                        <div className="service">
                                            <img src={transfer_icon} />
                                            <p>{data.services.transfer} Transfers</p>
                                        </div>
                                        <div className="service">
                                            <img src={activity_icon} />
                                            <p>{data.services.activity} Activity</p>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <ul>
                                            {
                                                data.quality.map((info, index) => (
                                                    <li key={index}>
                                                        <p>{info}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="sale">
                                        <del>₹{data.sale}</del>
                                        <strong>₹{data.price}</strong>
                                        <sub>Per Person</sub>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="item">
                        <div className="popCard_last">
                            <p className='title'>Summer Bonanza!</p>
                            <ul>
                                <li>
                                    <p>Enjoy confortable transfers in shared coaches</p>
                                </li>
                                <li>
                                    <p>Choose from 5 flights per week</p>
                                </li>
                                <li>
                                    <p>Get a free Rapid Antigen Test at selected hotels</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div >
    )
}

export default Beach