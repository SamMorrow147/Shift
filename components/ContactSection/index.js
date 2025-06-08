import React from 'react';
import RotatingGear from '../RotatingGear';

const ContactSection = () => {
    return(
        <section id="contact" className="tp-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <RotatingGear size={85} speed={10} color="#F0F0F0" teeth={12}>
                                                <div className="info-icon">
                                                    <i className="fi flaticon-pin"></i>
                                                </div>
                                            </RotatingGear>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>Maple Grove, Minnesota</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <RotatingGear size={85} speed={10} color="#F0F0F0" teeth={12}>
                                                <div className="info-icon">
                                                    <i className="fi flaticon-mail"></i>
                                                </div>
                                            </RotatingGear>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>Greg@ShiftCreativeDesign.com</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <RotatingGear size={85} speed={10} color="#F0F0F0" teeth={12}>
                                                <div className="info-icon">
                                                     <i className="fi flaticon-phone-call"></i>
                                                </div>
                                            </RotatingGear>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>612-202-8154</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
            </div> 
        </section>
     )
}

export default ContactSection;
