import React from 'react'

// import images
import footer_logo from "../images/footer_logo.png"
import facebook from "../images/icons/facebook.png"
import twitter from "../images/icons/twitter.png"
import youtube from "../images/icons/youtube.png"
import instagram from "../images/icons/instagram.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_block">
                <div className="logo">
                    <img src={footer_logo} alt="" />
                </div>
                <div className="links_block">
                    <div className="links">
                        <ul>
                            <li>
                                <a href="#">Voice Over and Sub Jazz</a>
                            </li>

                            <li>
                                <a href="#">Media Market</a>
                            </li>
                            <li>
                                <a href="#">Gillie</a>
                            </li>
                            <li>
                                <a href="#">Size Last</a>
                            </li>

                        </ul>
                        <ul>
                            <li><a href="#">Self Betimes</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Basal Himmler</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Yard Market</a></li>
                            <li><a href="#">Job Opportunities</a></li>
                            <li><a href="#">Car Preferences</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Hedge Karla</a></li>
                            <li><a href="#">Mullein Terms</a></li>
                            <li><a href="#">Autumnal Bulgier</a></li>
                        </ul>

                    </div>
                    <div className="socialAndCopywright">
                        <div className="copywright">

                            <button>Helmet CODE</button>

                            <p>&copy; Created by Otajon Makxmasoliyev. Samarkand, Uzbekistan. 2022</p>
                        </div>
                        <ul className='footerIcons'>
                            <li>
                                <a href="#"><img src={facebook} /></a>
                            </li>
                            <li>
                                <a href="#"><img src={instagram} /></a>
                            </li>
                            <li>
                                <a href="#"><img src={twitter} /></a>
                            </li>
                            <li>
                                <a href="#"><img src={youtube} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer