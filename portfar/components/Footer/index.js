import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <a to="/home">
                                    <img src="Images/Asset 1@3x.png" alt="Shift Creative Design"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.skype.com/en/"><i className="fa fa-skype"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p><i className="fa fa-copyright"></i>Copyright <span> 2024 Shift Creative Design. All rights reserved</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;