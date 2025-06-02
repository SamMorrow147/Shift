
import React, { Fragment } from 'react';
import Link from 'next/link'
import { Dialog, Grid, } from '@mui/material'


const BlogSingle = ({ maxWidth, open, onClose, title, doc, image1, author, authorName, date }) => {

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body tp-blog-single-section">
                    <button className='modal-close' onClick={onClose}><i className='fa fa-close'></i></button>
                    <div className="tp-blog-content clearfix">
                        <div className="post">
                            <div className="entry-media">
                                <img src={image1} alt="" />
                            </div>
                            <ul className="entry-meta">
                                <li><img src={author} alt="" /> <Link href="/">By {authorName}</Link></li>
                                <li><Link href="/"><i className="fa fa-calendar-o" aria-hidden="true"></i>{date}</Link></li>
                            </ul>
                            <h2>{title}</h2>
                            <p>{doc}</p>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </blockquote>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                        </div>

                        <div className="tag-share clearfix">
                            <div className="tag">
                                <ul>
                                    <li><Link href="/">Design</Link></li>
                                    <li><Link href="/">Development</Link></li>
                                    <li><Link href="/">Quality</Link></li>
                                </ul>
                            </div>
                            <div className="share">
                                <ul>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default BlogSingle

