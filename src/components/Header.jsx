import React, { useState, useEffect } from 'react'
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


class Header extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      favoritecolor: "red",
      page: <Home />,
      showcaseBack: head_back,
      styleButton: null,
      ekran: false,
      salom: false,
    };
  }
  componentDidMount(e) {
    const myFunction = (x) => {
      if (x.matches) { // If media query matches
        this.setState({ ekran: true });
      } else {
        this.setState({ ekran: false });
      }
    }

    var x = window.matchMedia("(max-width: 1025px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction)

  }

  // componentDidMount() {

  //   if (window.innerWidth < 1025) {
  //     setTimeout(() => {
  //       this.setState({ ekran: false })
  //     }, 1000)
  //     console.log(this.state.showcaseBack);
  //   } else {
  //     setInterval(() => {
  //       this.setState({ ekran: true })
  //     }, 5000)
  //   }

  // };


  // componentDidUpdate() {
  //   let l = 0;
  //   if (window.innerWidth > 1025) {
  //     this.setState({ ekran: false })

  //   }
  //   let arr = ['a', 'b', 'c'];
  //   setTimeout(() => {
  //     l = l + 1
  //   }, 500)
  //   if (l === 5) {
  //     console.log(l);
  //     return null
  //   }

  // };



  render() {
    return (
      <div className='Header'>

        <div className='Header_block'>
          <img src={this.state.showcaseBack} className="backImage" />
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

              <InputCheck placeHolder="Check In" Id="checkIn" />
              <InputCheck placeHolder="Check Out" Id="checkIn" />

              <div className="input_span">
                <img src={Person_icon} alt="" />
                <input type="number" name="room" id="room" />
                <span>room</span>
                <input type="number" name="adult" id="adult" />
                <span>adults</span>
              </div>

              <button type='search' className='search' onClick={() => this.setState({ ekran: false })}>Search</button>
            </div>
            <button className="toogle" onClick={() => this.setState({ ekran: !this.state.ekran })}>menu</button>
            <div className="categories" style={this.state.ekran ? { height: "0" } : { height: "50%" }} >
              <p className='linksTitle'>Top categories</p>
              <div className="links">
                <ul >
                  {
                    pages.map((data, index) => (
                      <li key={index}>
                        <button onClick={() => {
                          this.setState({ page: data.page });
                          this.setState({ showcaseBack: data.back_image })
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
        </div >
        {this.state.page}
        {/* <Beach /> */}
        <Footer />
      </div >
    )
  }
}

export default Header
