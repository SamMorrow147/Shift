import React from 'react'
import DefaultModal from '../AboutModal'

const About = (props) => {
    return(
        <section id="about" className="tp-about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="tp-about-wrap">
                            <div className="tp-about-img">
                                <img src="images/about.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="tp-about-text">
                            <div className="tp-about-icon-content">
                                <h2>Who We Are</h2>
                                <p>The freedom we felt riding the Black Hills my first Sturgis rally was the moment this agency was born. And as I shifted into sixth gear I knew I had the name. The hand-picked talent on this team are the most gifted (and fun) people that I've worked with during my career. They too are 'lifers' in this business. Passionate about web development, organic and paid social media campaigns, design and photo + video.</p>
                                <p>We work with brands that you see everyday at the store, as well as national organizations & local businesses of all shapes and sizes. The goal with Shift is not to be the biggest marketing agency with the most clients, but to simply be an awesome marketing agency with the most trust. A marketing partner that wants to 'win' just as much as you do. We deliver great (sometimes crazy) ideas, high-end creative, custom campaigns with ROI, all on time and within budget.</p>
                                <p>Nothing more, nothing less.</p>
                                <DefaultModal buttonClass={'template-btn'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white_svg svg_white">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </section>
    )
}

export default About;