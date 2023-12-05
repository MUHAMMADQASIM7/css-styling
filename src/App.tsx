import React, { useRef, useState } from 'react';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useNavigation } from "react-router-dom"

import { AiOutlineMail, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoLinkedin, BiLogoFacebook } from 'react-icons/bi';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import { PiArrowSquareLeftFill, PiArrowSquareRightFill } from 'react-icons/pi';
import { IoIosCall } from 'react-icons/io';

import Logo from './image/Logo.png'

import Icon1 from './image/icon1.svg'
import Icon2 from './image/icon3.svg'
import Icon3 from './image/icon2.svg'
import Icon4 from './image/icon4.svg'
import Icon5 from './image/icon5.svg'
import Icon6 from './image/icon6.svg'
import Icon7 from './image/icon7.svg'
import Icon8 from './image/icon8.svg'

import Quotecoma from './image/Vector.png'

function App() {

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [navHeight, setNavheight] = useState("navsection")
  // const navigation = useNavigation();

  const sliderRef = useRef(null)
  console.log(sliderRef.current)
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <PiArrowSquareRightFill />,
    prevArrow: <PiArrowSquareLeftFill />,
  }
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  }
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    nextArrow: <BsArrowRightCircle />,
    prevArrow: <BsArrowLeftCircle />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
      setNavheight("navsection navheight")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
      setNavheight("navsection")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <>
      <header className='headersection'>
        <div className='contactsection' >
          <div className='container'>
            <div className='contact' >
              <div className='contactdetail'>
                <AiOutlineMail />
                <div>info@milantailors.com</div>
                <IoIosCall />
                <div>+(44)8000488973</div>
              </div>
              <div className='topbarbutton'>
                <button className='bgred btn'>Register</button>
                <button className='whitebd btn'>Login</button>
              </div>
            </div>
          </div>
        </div>
        <div className={navHeight}>
          <div className="container">
            <div className='nav'>
              <img src={Logo} alt="Logo" />
              <div className='navoptions'>
                <span>Suits</span>
                <span>Accessories</span>
                <span>Celebrity</span>
                <span>Brands & Fabrics</span>
                <span>Gift Cards</span>
                <span>Contact</span>
              </div>
              <div className='navbutton'>
                <button className='bgred2 btn' >Limited Time Special Offer </button>
                <button className='whitebd2 btn' >Book Consultation Now</button>
              </div>
              <div className='burger-menu' onClick={updateMenu} >
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
              </div>
              <div className={menu_class}>
                <div className='burgernavoptions'>
                  <span>Suits</span>
                  <span>Accessories</span>
                  <span>Celebrity</span>
                  <span>Brands & Fabrics</span>
                  <span>Gift Cards</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='bannersection'>
        <div className='sliderdiv'>
          <Slider className='bannerslide' {...settings1}>
            <div className='banner'>
              <div className='center'>
                <b>
                  We put you in a suit, that <br />
                  suits you.
                </b>
              </div>
              <button className='bannerbutton btn'>Limited Time Special Offer</button>
            </div>
            <div className='banner'>
              <div className='center'>
                <b>
                  We put you in a suit, that <br />
                  suits you.
                </b>
              </div>
              <button className='bannerbutton btn'>Limited Time Special Offer</button>
            </div>
          </Slider>
        </div>
      </section>
      <section className='aboutsection'>
        <div className='container'>
          <div className='about' >
            <div className='yt' >
              <iframe className="video" data-src="https://www.youtube.com/embed/5BpBP1S4yQc?" title="YouTube video player" src="https://www.youtube.com/embed/5BpBP1S4yQc?"></iframe>
            </div>
            <div className='detail'>
              <h1>We put you in a suit, that suits you</h1>
              <p>Since 1997,styling up professionals with Top Notch custom made Suits at<br />
                the place & Time on their convenience</p>
              <button className='btn'>Experience the best version of yourself</button>
            </div>
          </div>
        </div>
      </section>
      <section className='testimonialssection' >
        <div className="container">
          <h1 className='h1'>See what our clients say</h1>
          <div className="testimonials">
            <div className='videolink'>
              <iframe className="one" title="YouTube video player" src="https://www.youtube.com/embed/OAfgpholXF0?"></iframe>
            </div>
            <div className='videolinks'>
              <iframe className="two" title="YouTube video player" src="https://www.youtube.com/embed/LZHjErvsEz4?"></iframe>
              <iframe className="two" title="YouTube video player" src="https://www.youtube.com/embed/Gkt3TChdZm0?" ></iframe>
              <iframe className="two" title="YouTube video player" src="https://www.youtube.com/embed/NEXw7SX3-AA?" ></iframe>
              <iframe className="two" title="YouTube video player" src="https://www.youtube.com/embed/-a21hJBp-qA?" ></iframe>
            </div>
          </div>
          <div className='testimonialsbutton' >
            <button className='but btn'>Book Consultation Now</button>
          </div>
        </div>
      </section>
      <section className='reasonsection'>
        <div className="container">
          <h1 className='heading'>8 Reasons to choose with Us</h1>
          <div className="reasons">
            <div className='topreason'>
              <div className='iconboderbox'>
                <div className='reasonicon'>
                  <img src={Icon1} alt="" />
                </div>
                <p>Your Personal Stylist to give you perfect Look</p>
              </div>
              <div className='iconboderbox'>
                <div className="reasonicon">
                  <img src={Icon2} alt="" />
                </div>
                <p>Top Notch Stitching quality & Premium Brands</p>
              </div>
              <div className='iconboderbox'>
                <div className="reasonicon">
                  <img src={Icon3} alt="" />
                </div>
                <p>Get Styled up at the Place & Time of your Convenience</p>
              </div>
              <div className='iconboderbox'>
                <div className="reasonicon">
                  <img src={Icon4} alt="" />
                </div>
                <p>Highly Customized Suits</p>
              </div>
            </div>
            <div className='bottomreason'>
              <div className='iconboderbox'>
                <div className="reasonicon">
                  <img src={Icon5} alt="" />
                </div>
                <p>Get your Suit in 21-days</p>
              </div>
              <div className='iconboderbox'>
                <div className="reasonicon">
                  <img src={Icon6} alt="" />
                </div>
                <p>World Class customer Service</p>
              </div>
              <div className='iconboderbox'>
                <div className="reasonicon">
                  <img src={Icon7} alt="" />
                </div>
                <p>Pay Less than you favorite Suiting Store</p>
              </div>
              <div className='iconboderbox'>
                <div className="reasonicon">
                  <img src={Icon8} alt="" />
                </div>
                <p>Choose with your family/Friends at Home/Office</p>
              </div>
            </div>
          </div>
          <div className='reasonbuttondiv'>
            <button className='reasonsbutton btn'>Book Consultation Now</button>
          </div>
        </div>
      </section>
      <section className='ytvideosection'>
        <div className='container'>
          <div className="ytvideo">
            <div className='ytvideocenter'>
              <iframe className="" title="YouTube video player" src="https://www.youtube.com/embed/U0nxZ-ZZ0H8?"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className='customsuitsection'>
        <div className="container">
          <div className='customsuitsectionh2'>
            <h2 >Your Suit Customize to your Taste</h2>
            <h2 className='visibilityabove'>Your Suit Customize to your Comfort</h2>
          </div>
          <div className="customsuit">
            <div className='top'>
              <div className='taste1' ><p>Choose Your Fabric-30 plus brands with 10,000 plus fabric options to choose</p></div>
              <div className='taste2' ><p>Choose Your Fitting-Medium ,Loose or Slim Fit Fittings</p></div>
              <div className='comfort1' ><p>Head Stitched Lapel & Pockets</p></div>
              <div className='comfort2' ><p>Head Stitched Lapel & Pockets Extra Sweat pads under the Jacket arm</p></div>
            </div>
            <div className='middle'>
              <div className='taste3' ><p>Choose your own lining- from funky to Simple Colors</p></div>
              <div className='taste4' ><p>Choose Your Buttons - Functional, Non-Functional or Kissing /overlapping Buttons</p></div>
              <h2 className='visibility600px'>Your Suit Customize to your Comfort</h2>
              <div className='comfort3' ><p>Half silk lining in the slack to give you comfort</p></div>
              <div className='comfort4' ><p>Elastic band on the inside waist side of slack to hold your shirts firmly</p></div>
            </div>
            <div className='bottom'>
              <div className='taste5' ><p>Choose Your Style-Peak ,Notch Lapel & others</p></div>
              <div className='taste6' ><p>Choose your initials-Your Name & initials embroidered</p></div>
              <div className='comfort5' ><p>Choose your Extra Ticket Pocket</p></div>
              <div className='comfort6' ><p>Cotton fabric for slack pockets  </p></div>
            </div>
          </div>
          <div className='customsuitbuttondiv'>
            <button className='customsuitbutton btn'>Book your Consultations</button>
          </div>
        </div>
      </section>
      <section className='processsection'>
        <div className="container">
          <div className="process">
            <div className='width'>
              <h1 className='headeing'>Our Process</h1>
              <div className='options' >
                <div className='optionsbox'>
                  <span className='optionboxno'>01</span>
                  <h3 className='textsize'>Get to Know You</h3>
                </div>
                <div className='optionsbox'>
                  <span className='optionboxno'>02</span>
                  <h3 className='textsize'>Selection & Suggestion</h3>
                </div>
                <div className='optionsbox'>
                  <span className='optionboxno'>03</span>
                  <h3 className='textsize'>Get Measured</h3>
                </div>
              </div >
              <div className="options">
                <div className='optionsbox'>
                  <span className='optionboxno'>04</span>
                  <h3 className='textsize'>Get Styled</h3>
                </div>
                <div className='optionsbox'>
                  <span className='optionboxno'>05</span>
                  <h3 className='textsize'>Get Fitted</h3>
                </div>
                <div className='suitstylingh3'> <h3 className="shun"> Styling up Shaun <br /> <span className='aerowicon'><BsArrowRightCircle /></span> Watch Now </h3>
                </div>
              </div>
            </div>
            <div className='suitstyling'>
              <iframe src="https://www.youtube.com/embed/j3qm1sOTElw?" title="YouTube video player" ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className='quotesection'>
        <div className='container'>
          <div className='quotecontainer'>
            <div className='quotehead'>
              <h1 className='quotetitle'>Reasons to work with us</h1>
              <div>
                {/* @ts-ignore  */}
                <button onClick={() => sliderRef.current.slickPrev()} ><BsArrowLeftCircle /></button>
                {/* @ts-ignore  */}
                <button onClick={() => sliderRef.current.slickNext()}><BsArrowRightCircle /></button>
              </div>
            </div>
            <div className='quoteslider'>
              <Slider ref={sliderRef} {...settings2}>
                <div className='quote'>
                  <div className='quotepara'>
                  <img src={Quotecoma} alt="" />
                  <p>"I met the people behind Milan Tailors while shopping in Hong Kong and have been a happy customer for more than three years.Qaiser provide exceptional service, and quality products; I have purchased several suits and shirts and will keep shopping. Thank You!</p>
                  </div>
                  <div className='linequote'>
                    <h1 className='line'></h1>
                    <h3 className='quoteowner'>By George Adamidis</h3>
                  </div>
                </div>
                <div className='quote'>
                <div className='quotepara'>
                  <img src={Quotecoma} alt="" />
                  <p>"I met the people behind Milan Tailors while shopping in Hong Kong and have been a happy customer for more than three years.Qaiser provide exceptional service, and quality products; I have purchased several suits and shirts and will keep shopping. Thank You!</p>
                  </div>
                  <div className='linequote'>
                    <h1 className='line'></h1>
                    <h3 className='quoteowner'>By George Adamidis</h3>
                  </div>
                </div>
              </Slider>
            </div>
            <button className='quotebutton btn'>Book your Consultations</button>
          </div>
        </div>
      </section>
      <section className='allvideossection'>
        <div className="container">
          <div className="slidevideo">
            <Slider {...settings3}>
              <div>
                <iframe title="YouTube video player" src="https://www.youtube.com/embed/OAfgpholXF0?"></iframe>
              </div>
              <div>
                <iframe title="YouTube video player" src="https://www.youtube.com/embed/Gkt3TChdZm0?"></iframe>
              </div>
              <div>
                <iframe title="YouTube video player" src="https://www.youtube.com/embed/NEXw7SX3-AA?"></iframe>
              </div>
              <div>
                <iframe title="YouTube video player" src="https://www.youtube.com/embed/-a21hJBp-qA?"></iframe>
              </div>
              <div>
                <iframe title="YouTube video player" src="https://www.youtube.com/embed/LZHjErvsEz4?"></iframe>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <footer className='contactdetails'>
        <div className='container'>
          <div className='divcenter'>
            <div className='social'>
              <img src={Logo} alt="" />
              <div className='socialbutton'>
                <h2>Socials</h2>
                <a target='_blank' href="https://www.facebook.com" ><button className='btn socialmediabutton'><BiLogoFacebook /></button></a>
                <a target='_blank' href="https://www.youtube.com" ><button className='btn socialmediabutton'><AiFillYoutube /></button></a>
                <a target='_blank' href="https://www.linkedin.com" ><button className='btn socialmediabutton'><BiLogoLinkedin /></button></a>
                <a target='_blank' href="https://www.instagram.com" ><button className='btn socialmediabutton'><AiOutlineInstagram /></button></a>
                <a target='_blank' href="https://www.twitter.com" ><button className='btn socialmediabutton'><AiOutlineTwitter /></button></a>
              </div>
            </div>
            <div className='allcontact'>
              <h1>Contact</h1>
              <h2>Europe</h2>
              <div className='contactbox'>
                <AiOutlineMail />
                <span>info@milantailors.com</span><br />
              </div>
              <div className='contactbox'>
                <IoIosCall />
                <span>+ (44)8000488973</span>
              </div>
              <h2>North America</h2>
              <div className='contactbox'>
                <AiOutlineMail />
                <span>info@milantailors.com</span><br />
              </div>
              <div className='contactbox'>
                <IoIosCall />
                <span>+ 16474793502</span>
              </div>
            </div>
            <div className='details'>
              <h1>Vision Statement</h1>
              <p>“To become the leading suiting facility at the doorstep of every Busy Professional in North America”</p>
              <h1>Business Hours</h1>
              <p>You decide about our business hours "Your Hours are Our Hours"</p>
              <h1>Location</h1>
              <p>The only location we have is the location of your convenience "Your Location is our Location"</p>
            </div>
          </div>
        </div>
        <div className='tagmark'>
          <div className="container">
            <div className='tagmarkcontent'>
              2022 All Rights Reserved © Milan Tailors
              <span>Home</span>
              <span>Contact Us</span>
              <span>Create Account</span>
              <span>Policies & Disclaimer</span>
            </div>
          </div>
        </div>
      </footer>

    </>

  );
}

export default App;
