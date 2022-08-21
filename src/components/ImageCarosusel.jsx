import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


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
            items: 3
        },
        1000: {
            items: 3
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
    return (
        <div className="beachCarousel">

            {
                props.mal && <OwlCarousel center={false}

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

            {
                props.bigCard && <OwlCarousel center={false}

                    {...optionsBigCard} loop={props.loop} items={props.responsive}
                    className='owl-theme owl_carusel'  >{
                        props.bigCard.map((bigCardData, index) => (
                            <div className="item" key={index}>
                                <div className="BigCard">
                                    <div className="image">
                                        <img src={bigCardData.image} />
                                    </div>
                                    <div className="info_block">
                                        <p className='role'>{bigCardData.role}</p>
                                        <p className='title'>{bigCardData.title}</p>
                                        <p className='info'>{bigCardData.info}</p>
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </OwlCarousel>
            }


        </div >
    )
}

export default ImageCarousel