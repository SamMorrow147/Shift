
import React, { Fragment } from 'react';
import { Dialog, Grid, } from '@mui/material'


const PortfolioSingle = ({ maxWidth, open, onClose, title, doc, image1, image2, image3, authorName, videosId, value, date }) => {


    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >

                <Grid className="modalBody modal-body">
                    <button className='modal-close' onClick={onClose}><i className='fa fa-close'></i></button>
                    <div className="tp-project-details-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tp-minimal-wrap">
                                    <div className="tp-minimal-img">
                                        <img src={image1} alt="" />
                                    </div>
                                    <h2>{title}</h2>
                                </div>
                                <div className="tp-project-details-list">
                                    <div className="row">
                                        <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="tp-project-details-text">
                                                <span>Client Name</span>
                                                <h2>{authorName}</h2>
                                            </div>
                                        </div>
                                        <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="tp-project-details-text-3">
                                                <span>Project Value</span>
                                                <h2>{value}</h2>
                                            </div>
                                        </div>
                                        <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="tp-project-details-text">
                                                <span>Date</span>
                                                <h2>{date}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-p-details-section">
                                    <p>{doc}</p>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                    <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="tp-p-details-img">
                                                <img src={image2} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="tp-p-details-img">
                                                <img src={image3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-p-details-quote">
                                    <p>Sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary net Essential book for you. </p>
                                    <span>{authorName}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default PortfolioSingle

