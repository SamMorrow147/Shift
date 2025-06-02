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
            <section className="tp-contact-map-section">
                <div className="tp-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5648.7806761084477!2d-93.45578792345693!3d45.12099997107061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b3329a75fc44b3%3A0xab6d15df00205aba!2sMaple%20Grove%2C%20MN!5e0!3m2!1sen!2sus!4v1710861234567!5m2!1sen!2sus&zoom=8"></iframe>
                </div>
            </section>
        </section>
     )
}

export default ContactSection;
