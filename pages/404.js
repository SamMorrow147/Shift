import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Error = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <Image src="/Images/error-404.png" alt="404 Error" width={500} height={300} />
                            </div>
                            <div className="error-message">
                                <h3>Oops! Page Not Found!</h3>
                                <p>We're sorry but we can't seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
                                <Link onClick={ClickHandler} href="/" className="template-btn"> Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;