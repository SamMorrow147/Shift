import React, {Fragment} from 'react';
import Hero from '../components/Hero/index';
import About from '../components/about/index';
import Service from '../components/Service/index';
import ContactSection from '../components/ContactSection/index';
import Footer from '../components/Footer/index';
import Scrollbar from '../components/Scroolbar/index'
import Navbar from '../components/Navbar/index';
import BackgroundGears from '../components/BackgroundGears/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Element} from 'react-scroll'


const HomePage =() => {
    return(
        <Fragment>
            <div className="br-app">
                <BackgroundGears opacity={0.15} />
                <Navbar />
                <Element name='home'>
                    <Hero/>
                </Element>
                <Element name='about'>
                    <About/>
                </Element>
                <Element name="service">
                    <Service/>
                </Element>
                <Element name="contact">
                    <ContactSection/>
                </Element> 
                <Footer/>
                <Scrollbar/>
            </div>
        </Fragment>
    )
};
export default HomePage;


