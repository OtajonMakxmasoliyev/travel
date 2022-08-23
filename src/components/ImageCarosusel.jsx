import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import OwlCarousel from 'react-owl-carousel';
import { beach } from './server/server';


const options = {
    center: false,
    margin: 24,
    dots: false,
    nav: false,
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

const optionsBigCard = {
    center: false,
    margin: 24,
    dots: false,
    nav: false,
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
        900: {
            items: 2
        },
        1000: {
            items: 2
        },
        1300: {
            items: 2
        },
        1366: {
            items: 2
        },
        1920: {
            items: 3
        }

    }
}

const ImageCarousel = (props) => {
    const item = [];
    beach.forEach((data) => item.push(

        <div className="item" key={data}>
            <div className="image">
                <img src={data.image} alt={data.info} />
                <p>{data.info}</p>
            </div>
        </div>
    ))
    console.log(item);






    return (
        <div className="beachCarousel">

            {
                props.mal &&


                <OwlCarousel center={false}

                    {...options} loop={props.loop}
                    className='owl-theme owl_carusel'  >{
                        props.mal.map((data, index) => (
                            <div className="item" key={index}>
                                <div className="image">
                                    <img src={data.image} alt={data.info} />
                                    <p>{data.info}</p>
                                </div>
                            </div>
                        ))}
                </OwlCarousel>
            }

            {/* {
                props.bigCard && <OwlCarousel center={false}

                    {...optionsBigCard} loop={props.loop} items={props.responsive}
                    className='owl-theme owl_carusel'  >{
                        props.bigCard.map((bigCardData, index) => (
                            <div className="item" key={index}>
                                <div className="BigCard">
                                    <div className="image">
                                        <img src={bigCardData.image} />
                                    </div>
                                </div>
                                <div className="info_block">
                                    <p className='role'>{bigCardData.role}</p>
                                    <p className='title'>{bigCardData.title}</p>
                                    <p className='info'>{bigCardData.info}</p>
                                    <button>Book Now</button>
                                </div>
                            </div>

                        ))}
                </OwlCarousel>
            } */}


        </div >
    )
}

export default ImageCarousel