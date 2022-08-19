import React from 'react'

const Carousel_block = (props) => {
    return (
        <div className="beachCarousel">
            <OwlCarousel {...options} className='owl-theme owl_carusel' loop={false} >
                {
                    props.mal.map((data, index) => (
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
                                {props.lastInfo.info.map((lastInfo, index) => (
                                    <li key={index}>
                                        <p>{lastInfo}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }
            </OwlCarousel>
        </div>
    )
}

export default Carousel_block