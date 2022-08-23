import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



import star from "../images/icons/star.png"
import airplane_icon from "../images/icons/airplane_icon.png"
import hotel_icon from "../images/icons/hotel_icon.png"
import transfer_icon from "../images/icons/transfer_icon.png"
import activity_icon from "../images/icons/activity_icon.png"
import { Vacation } from './server/server';

const options = {
    center: false,
    margin: 10,
    dots: false,
    nav: false,
    margin: 32,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        700: {
            items: 1
        },
        800: {
            items: 2
        },
        1000: {
            items: 2
        },
        1100: {
            items: 3
        },
        1200: {
            items: 3
        },
        1300: {
            items: 3,
        },
        1366: {
            items: 3
        },
        1920: {
            items: 4
        }

    }
}


const Carousel_block = (props) => {
    
    return (
        <div className="beachCarousel">
            <OwlCarousel center={false}

                {...options} loop={props.loop}
                className='owl-theme owl_carusel'  >
                {
                    props.mal && props.mal.map((data, index) => (
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
                {
                    props.lastInfo && <div className="item">
                        <div className="popCard_last">
                            <p className='title'>{props.lastInfo.title}</p>
                            <ul>
                                {props.lastInfo.block_info.map((lastInfo, index) => (
                                    <li key={index}>
                                        <p>{lastInfo}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }
            </OwlCarousel>
        </div >
    )
}

export default Carousel_block