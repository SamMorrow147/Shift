import React from 'react';
import ServiceSingle from '../ServiceSingle'

const Service = () => {
    const service = [
        {
            Id:"1",
            sIcon:"fi flaticon-web-design",
            heading:"WEB + SEO",
            Simg1:'images/service-single/web-design/img-1.jpg',
            Simg2:'images/service-single/web-design/img-2.jpg',
            Simg3:'images/service-single/web-design/img-3.jpg',
            des:'We build the cool and creative. From simple to sophisticated.'
        },
        {
            Id:"2",
            sIcon:"fi flaticon-laptop",
            heading:"STRATEGY",
            Simg1:'images/service-single/development/img-1.jpg',
            Simg2:'images/service-single/development/img-2.jpg',
            Simg3:'images/service-single/development/img-3.jpg',
            des:'From the boardroom to a bar napkin, our strategy is your success.'
        },
        {
            Id:"3",
            sIcon:"fi flaticon-paint-palette",
            heading:"PHOTO + VIDEO",
            Simg1:'images/service-single/creative/img-1.jpg',
            Simg2:'images/service-single/creative/img-2.jpg',
            Simg3:'images/service-single/creative/img-3.jpg',
            des:'Now more than ever, a picture is worth a thousand words.'
        },
        {
            Id:"4",
            sIcon:"fi flaticon-smartphone",
            heading:"SOCIAL MEDIA",
            Simg1:'images/service-single/responsive/img-1.jpg',
            Simg2:'images/service-single/responsive/img-2.jpg',
            Simg3:'images/service-single/responsive/img-3.jpg',
            des:'Creative & credible content + paid campaigns with ROI.'
        },
        {
            Id:"5",
            sIcon:"fi flaticon-verified",
            heading:"CREATIVE",
            Simg1:'images/service-single/branding/img-1.jpg',
            Simg2:'images/service-single/branding/img-2.jpg',
            Simg3:'images/service-single/branding/img-3.jpg',
            des:'We love logos. If you can dream it, we can design it.'
        }
    ]

    return (
        <div id="service" className="service-area section-padding">
            <div className="borderd"></div>
            <div className="container">
                <div className="col-l2">
                    <div className="section-title section-title2 text-center">
                        <span>What We Do</span>
                        <h2>We make the juice worth the squeeze.</h2>
                    </div>
                </div>
                <div className="row">
                    {service.map((serv, srv) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={srv}>
                            <div className="service-section">
                                <div className="services-wrapper">
                                    <div className="services-icon-wrapper">
                                        <div className="service-dot">
                                            <div className="dots"></div>
                                            <div className="dots2"></div>
                                        </div>
                                        <i className={serv.sIcon}></i>
                                    </div>
                                    <div className="service-content">
                                        <h2>{serv.heading}</h2>
                                        <p>{serv.des}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="white_svg">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </div>
    );
}
export default Service;