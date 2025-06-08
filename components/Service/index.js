import React from 'react';
import ServiceSingle from '../ServiceSingle'
import BackgroundGears from '../BackgroundGears';

const Service = () => {
    const service = [
        {
            Id:"1",
            sIcon:"fi flaticon-web-design",
            heading:"WEB + SEO",
            Simg1:'images/service-single/web-design/img-1.jpg',
            Simg2:'images/service-single/web-design/img-2.jpg',
            Simg3:'images/service-single/web-design/img-3.jpg',
            des:'Built to outrun boring. From sleek one-pagers to SEO-tuned machines, we build digital experiences that grip the road and leave the competition in the dust.'
        },
        {
            Id:"2",
            sIcon:"fi flaticon-laptop",
            heading:"STRATEGY",
            Simg1:'images/service-single/development/img-1.jpg',
            Simg2:'images/service-single/development/img-2.jpg',
            Simg3:'images/service-single/development/img-3.jpg',
            des:'Brains behind the burnouts. Whether it\'s sketched on a napkin or mapped like a pit crew plan, our strategy fuels your brand with horsepower and direction.'
        },
        {
            Id:"3",
            sIcon:"fi flaticon-paint-palette",
            heading:"PHOTO + VIDEO",
            Simg1:'images/service-single/creative/img-1.jpg',
            Simg2:'images/service-single/creative/img-2.jpg',
            Simg3:'images/service-single/creative/img-3.jpg',
            des:'Visuals with velocity. We don\'t just shoot content — we capture momentum. Every frame tells your story with power and precision.'
        },
        {
            Id:"4",
            sIcon:"fi flaticon-smartphone",
            heading:"SOCIAL MEDIA",
            Simg1:'images/service-single/responsive/img-1.jpg',
            Simg2:'images/service-single/responsive/img-2.jpg',
            Simg3:'images/service-single/responsive/img-3.jpg',
            des:'Content that cuts through the noise. We craft scroll-stopping stories and throttle-paid campaigns with results that actually move the needle.'
        },
        {
            Id:"5",
            sIcon:"fi flaticon-verified",
            heading:"CREATIVE",
            Simg1:'images/service-single/branding/img-1.jpg',
            Simg2:'images/service-single/branding/img-2.jpg',
            Simg3:'images/service-single/branding/img-3.jpg',
            des:'Design that hits redline. From logos to full-blown identities, our work turns heads, sparks movement, and fuels brand obsession.'
        }
    ]

    return (
        <div id="service" className="service-area section-padding">
            <BackgroundGears opacity={0.15} />
            <div className="borderd"></div>
            <div className="container">
                <div className="col-l2">
                    <div className="section-title section-title2 text-center">
                        <span>What We Do</span>
                        <h2>We Fuel the Journey to your Destination</h2>
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