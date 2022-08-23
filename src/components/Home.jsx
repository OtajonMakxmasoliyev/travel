import React from 'react'
import ImageCarousel from './ImageCarosusel'
import { offers, Property_type, Vacation } from './server/server'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Mobile from "../images/mocup_mobile.png"
import Google_play from "../images/google.png"
import Apple_store from "../images/apple.png"




class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            SearchInfo: ""
        }
    }


    changHandler = (event) => {
        this.setState({ SearchInfo: event.target.value })
    }

    CreateSearch = () => {
        const url = "https://reqres.in/api/user";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.SearchInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }

    Search = (event) => {
        event.preventDefault();
        alert("siz Ushbu Ma'lumotni izlamoqchisiz " + this.state.SearchInfo);
    }



    render() {
        const responsive = {
            0: { items: 1 },
            568: { items: 2 },
            1024: { items: 3 },
            1600: { items: 4 }
        };
        const responsiveBig = {
            0: { items: 1 },
            568: { items: 2 },
            1024: { items: 2 },
            1600: { items: 2 }
        };

        const loga = (data) => (
            <div key={data} className="aliceCarousel">
                <div className="image">
                    <img src={data.image} alt={data.info} />
                    <p>{data.info}</p>
                </div>
            </div >
        )
        const big_car = (data, index) => (
            <div className="BigCard">
                <div className="image">
                    <img src={data.image} />
                </div>
                <div className="info_block">
                    <p className='role'>{data.role}</p>
                    <p className='title'>{data.title}</p>
                    <p className='info'>{data.info}</p>
                    <button>Book Now</button>
                </div>
            </div>
        )
        const itemVacation = Vacation.map(loga)
        const offer = offers.map(big_car)
        const itemBrowse = Property_type.map(loga)
        return (
            <div className='home' >
                <div className="block">
                    <p className='title top'>Top Vacation Destinations</p>
                    <AliceCarousel infinite={true} autoPlay={true} disableDotsControls={true} disableButtonsControls={true} responsive={responsive} mouseTracking items={itemVacation} />
                </div>
                <div className="block">
                    <p className='title'>Browse by property type</p>
                    <AliceCarousel infinite={true} autoPlay={true} disableDotsControls={true} disableButtonsControls={true} responsive={responsiveBig} mouseTracking items={offer} />
                </div>
                <div className="block">
                    <p className='title'>Browse by property type</p>
                    <AliceCarousel infinite={true} autoPlay={true} disableDotsControls={true} disableButtonsControls={true} responsive={responsive} mouseTracking items={itemBrowse} />
                </div>

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
                                <input type="text" name='infoSearch' placeholder='+91 Mobile number' onChange={this.changHandler} />
                                <button type='search'
                                    onClick={this.CreateSearch || this.CreateSearch}>Search</button>
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
}

export default Home