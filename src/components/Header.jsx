import React, { useState } from 'react'

// imported images
import Logo from "../images/trxvl.png"
import InputCheck from './InputCheck'
import Calendar_icon from "../images/icons/calendar_icon.svg"
import Person_icon from "../images/icons/person_icon.svg"

const Header = () => {


  return (
    <div className='Header'>
      <nav>
        <div className="logo">
          <img src={Logo} alt="TravelX Logo" />
        </div>
        <ul>

        </ul>
      </nav>
      <div className="showcase">
        <h1>The whole world awaits.</h1>
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

          <button type='search'>Search</button>
        </div>
        <div className="categories">
          <p>Top categories</p>
          <div className="links">
            <ul>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
