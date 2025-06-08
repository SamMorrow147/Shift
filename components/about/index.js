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
                                <img src="/Images/IMG_5017.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="tp-about-text">
                            <div className="tp-about-icon-content">
                                <h2>About</h2>
                                <p>The moment Shift was born? Somewhere deep in the Black Hills, first Sturgis rally, sixth gear wide open. That ride sparked more than adrenaline. It lit the idea for a different kind of agency. One built on freedom, momentum, and instinct.</p>
                                <p>Shift Creative is powered by a hand-picked crew of lifers in this business. People I trust, admire, and genuinely have a blast working with. Experts in web, design, social (both paid and organic), photo, and video. This team doesn't just deliver, they give a damn.</p>
                                <p>We partner with national names you pass on the shelves and local legends carving their own lane. The goal isn't to be the biggest agency. It's to be the most trusted. The one you call when you're ready to win. We bring bold ideas, sharp creative, and real results. On time. On budget. No ego. No fluff.</p>
                                <p>Just the good stuff. Every time.</p>
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