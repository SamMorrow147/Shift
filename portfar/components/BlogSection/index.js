import React, { useState } from 'react';
import BlogSingle from '../BlogSingle'
import Link from 'next/link'



const blog = [
    {
        Id:"1",
        heading:"Everything is easy when you think it easy at all.",
        bImg1:'images/blog/blog1/1.jpg',
        author:'images/blog/blog1/author.jpg',
        authorName:"Warner",
        date:"April 09,2021",
        des:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now.'
    },
    {
        Id:"2",
        heading:"How to estublish a team with a great way for you?",
        bImg1:'images/blog/blog1/2.jpg',
        author:'images/blog/blog1/author2.jpg',
        authorName:"Miller",
        date:"April 11,2021",
        des:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now.'
    },
    {
        Id:"3",
        heading:"A great way to establish as 3D designer for you.",
        bImg1:'images/blog/blog1/3.jpg',
        author:'images/blog/blog1/author3.jpg',
        authorName:"alia",
        date:"April 14,2021",
        des:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now.'
    },
]



const BlogSection = () => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state,setState] = useState({
        
    })

    const handleClickOpen = (item) =>{
        setOpen(true);
        setState(item)
    }

    return (
        <section id="blog" className="blog-section section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title section-title2 text-center">
                        <span>From my Blog</span>
                        <h2>Latest News</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="blog-grids clearfix">
                            {blog.map((blogs, bl) => (
                                <div className="grid" key={bl}>
                                    <div className="entry-media">
                                        <img src={blogs.bImg1} alt=""/>
                                    </div>
                                    <div className="details">
                                    <h3 onClick={()=> handleClickOpen(blogs)}>{blogs.heading}</h3>
                                        <ul className="entry-meta">
                                            <li>
                                                <img src={blogs.author} alt=""/>
                                                By <button  onClick={()=> handleClickOpen(blogs)}>{blogs.authorName}</button>
                                            </li>
                                            <li>{blogs.date}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> 
            <div className="white_svg">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
            <BlogSingle open={open} onClose={handleClose} title={state.heading} doc={state.doc} image1={state.bImg1} author={state.author} authorName={state.authorName} date={state.date}/>
        </section>
    );
}
export default BlogSection;