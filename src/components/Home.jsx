import React from 'react'
import ImageCarousel from './ImageCarosusel'
import { offers, Property_type, Vacation } from './server/server'

import Mobile from "../images/mocup_mobile.png"
import Google_play from "../images/google.png"
import Apple_store from "../images/apple.png"




const Home = () => {



    return (
        <div className='home'>
            <p className='title top'>Top Vacation Destinations</p>
            <ImageCarousel mal={Vacation} loop={true} />
            <p className='title'>Top Vacation Destinations</p>
            <ImageCarousel bigCard={offers} loop={true} responsive={15} />
            <p className='title'>Browse by property type</p>
            <ImageCarousel mal={Property_type} loop={true} />

            <div className="plan">
                <h2>Plan your trip with travel expert</h2>
                <p>Our professional advisors can craft your perfect itinerary</p>
            </div>
            <div className="contact">
                <div className="left">
                    <img src={Mobile} alt="Trxvl. mobile" />
                </div>
                <div className="right">
                    <h2>Your all-in-one travel app.</h2>
                    <p>Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!</p>

                    <div className="right_left">
                        <div className="buttons">
                            <button>Mobile</button>
                            <button>Email</button>
                        </div>
                        <p className='inputInfo'>Enter your phone number to receive a text with a link to download the app.</p>
                        <div className="search">
                            <input type="text" placeholder='+91 Mobile number' />
                            <button type='search'>Search</button>
                        </div>
                    </div>
                    <p className='border'>or</p>
                    <div className="right_right">
                        <a href="https://play.google.com/store">
                            <img src={Google_play} />
                        </a>
                        <a href="https://www.apple.com/store">
                            <img src={Apple_store} />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home