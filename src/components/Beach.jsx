import React, { createElement } from 'react';
import { beach, Mountain_city, recently, Honeymoon_freebies } from './server/server';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import star from "../images/icons/star.png"
import airplane_icon from "../images/icons/airplane_icon.png"
import hotel_icon from "../images/icons/hotel_icon.png"
import transfer_icon from "../images/icons/transfer_icon.png"
import activity_icon from "../images/icons/activity_icon.png"





const Beach = () => {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 2 },
        1200: { items: 3 },
        1600: { items: 4 }
    };
    const loga = (data) => (
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
    )
    const BeachDestination = beach.map(loga)
    const RecentlyViewed = recently.map(loga)
    const AllInclusivePackages = Mountain_city.map(loga)
    const HoneymoonFreebiesSpecial = Honeymoon_freebies.map(loga)
    return (
        <div className='beach'>
            <div className="block">
                <p className='title top'>Top Vacation Destinations</p>
                <AliceCarousel infinite={true} autoPlay={true} disableDotsControls={true} disableButtonsControls={true} responsive={responsive} mouseTracking items={BeachDestination} />
            </div>
            <div className="block">
                <p className='title'>Recently Viewed</p>
                <AliceCarousel infinite={true} autoPlay={true} disableDotsControls={true} disableButtonsControls={true} responsive={responsive} mouseTracking items={BeachDestination} />
            </div>
            <div className="block">
                <p className='title'>Recently Viewed</p>
                <AliceCarousel infinite={true} autoPlay={true} disableDotsControls={true} disableButtonsControls={true} responsive={responsive} mouseTracking items={AllInclusivePackages} />
            </div>
            <div className="block">
                <p className='title'>Recently Viewed</p>
                <AliceCarousel infinite={true} autoPlay={true} disableDotsControls={true} disableButtonsControls={true} responsive={responsive} mouseTracking items={HoneymoonFreebiesSpecial} />
                {/* The end */}
            </div>
        </div >
    )
}

export default Beach