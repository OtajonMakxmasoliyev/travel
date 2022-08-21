import React from 'react'
import ImageCarousel from './ImageCarosusel'
import { offers, Property_type, Vacation } from './server/server'




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
        </div>
    )
}

export default Home