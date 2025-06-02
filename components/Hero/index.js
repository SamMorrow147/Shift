import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'


class Hero extends Component {
    render() {
        return(
            <section id="home" className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    <div className="slide mobile-video-slide">
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            className="background-video mobile-full-video"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                top: 0,
                                left: 0,
                                zIndex: -1
                            }}
                        >
                            <source src="/ultra-compressed_765.mp4" type="video/mp4" />
                        </video>
                        <div className="container mobile-content-container">
                            <div className="row">
                                <div className="col col-md-10 col-sm-12 slide-caption mobile-slide-caption">
                                    <div className="slide-subtitle mobile-subtitle">
                                        <h4>Creative Design Agency</h4>
                                    </div>
                                    <div className="slide-title mobile-title">
                                        <h2>Shift Creative</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-links mobile-social">
                    <div className="overlay"></div>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a></li>
                    </ul>
                </div>
                <div className="white_svg mobile-svg">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </section>
        )
    }
}

export default Hero;