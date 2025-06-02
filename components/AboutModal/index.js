import React, { Fragment } from 'react';
import { Button, Dialog, Grid, } from '@mui/material'
import Counter from '../Counter'

const DefaultModal = ({ maxWidth, button, buttonClass }) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <Fragment>
            <Button
                className={`btn ${buttonClass}`}
                onClick={handleClickOpen}>
                {button}
                More About
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >

                <Grid className="modalBody modal-body">
                    <button className='modal-close' onClick={handleClose}><i className='fa fa-close'></i></button>
                    <div className="skill-area section-padding">
                        <div className="container">
                            <div className="col-12">
                                <div className="section-title text-center">
                                    <h2>Core Skills</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="progress yellow">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">95% <span>Brand Design</span></div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="progress blue">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">90% <span>Web Design</span></div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="progress pink">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">85% <span>UX/UI Design</span></div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="progress green">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">80% <span>Creative Direction</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-counter-area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="tp-counter-grids">
                                        <div className="grid">
                                            <div><h2>⭐ 4.9/5</h2></div>
                                            <p>Client Feedback Score</p>
                                        </div>
                                        <div className="grid">
                                            <div><h2>✅ 120+</h2></div>
                                            <p>Projects Launched</p>
                                        </div>
                                        <div className="grid">
                                            <div><h2>💬 95%</h2></div>
                                            <p>Referral Rate</p>
                                        </div>
                                        <div className="grid">
                                            <div><h2>🏆 15+</h2></div>
                                            <p>Industry Features</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default DefaultModal

