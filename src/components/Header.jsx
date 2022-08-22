import React, { useState } from 'react'
import InputCheck from './InputCheck'

// imported images
import Logo from "../images/trxvl.png"
import Calendar_icon from "../images/icons/calendar_icon.svg"
import Person_icon from "../images/icons/person_icon.svg"



// categories image
import beach from "../images/icons/beach.svg"
import desert from "../images/icons/desert.svg"
import mountain from "../images/icons/mountain.svg"
import iconic from "../images/icons/iconic.svg"
import houseboats from "../images/icons/houseboats.svg"
import countryside from "../images/icons/countryside.svg"
import camping from "../images/icons/camping.svg"
import castle from "../images/icons/castle.svg"
import skiing from "../images/icons/skiing.svg"
import tropical from "../images/icons/tropical.svg"
import Beach from './Beach'
import Footer from './Footer'
import Home from './Home'




import beachBack from "../images/beach_back.png"
import head_back from "../images/head_back.png"
const pages = [
  { name: "Beaches", button_image: beach, page: < Beach />, back_image: beachBack },
  { name: "Deserts", button_image: desert, page: <Home />, back_image: head_back },
  { name: "Mountains", button_image: mountain, page: <InputCheck />, back_image: beachBack },
  { name: "Iconic Cities", button_image: iconic, page: <InputCheck />, back_image: beachBack },
  { name: "Houseboats", button_image: houseboats, page: <InputCheck />, back_image: beachBack },
  { name: "Countryside", button_image: countryside, page: <InputCheck />, back_image: beachBack },
  { name: "Camping", button_image: camping, page: <InputCheck />, back_image: beachBack },
  { name: "Castles", button_image: castle, page: <InputCheck />, back_image: beachBack },
  { name: "Skiing", button_image: skiing, page: <InputCheck />, back_image: beachBack },
  { name: "Tropical", button_image: tropical, page: <InputCheck />, back_image: beachBack }
]


const Header = () => {

  const [page, setPage] = useState(<Home />);
  const [showcaseBack, setShowcaseBack] = useState(head_back);

  return (
    <div className='Header'>
      <div className='Header_block'>

        <img src={showcaseBack} className="backImage" />
        <nav>
          <div className="logo">
            <img src={Logo} alt="TravelX Logo" />
          </div>
          <ul>

          </ul>
        </nav>
        <div className="showcase" >
          <div className="siteTitle">
            <h1>The whole world awaits.</h1>
          </div>

          <div className="inputs">




            <input type="search" name='name' className='search_input' placeholder='Search destinations, hotels' />
            {/* <input type={type} placeholder='salom' name='chekIn' id='checkIn' onClick={() => setType("date")} onMouseLeave={() => setType("text")} /> */}

            <InputCheck placeHolder="Check In" Id="checkIn" /> <InputCheck placeHolder="Check Out" Id="checkIn" />

            <div className="input_span">
              <img src={Person_icon} alt="" />
              <input type="number" value={0} name="room" id="room" />
              <span>room</span>
              <input type="number" value={0} name="adult" id="adult" />
              <span>adults</span>
            </div>

            <button type='search' className='search'>Search</button>
          </div>
          <div className="categories">
            <p>Top categories</p>
            <div className="links">
              <ul>
                {
                  pages.map((data, index) => (
                    <li key={index}>
                      <button onClick={() => {
                        setPage(data.page);
                        setShowcaseBack(data.back_image)
                      }}>
                        <img src={data.button_image} />
                        <p>{data.name}</p>
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      {page}
      {/* <Beach /> */}
      <Footer />
    </div >
  )
}

export default Header
