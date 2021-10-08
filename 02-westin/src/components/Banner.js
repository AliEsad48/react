import React from 'react'

const Banner = () => {
    return (
        <section clasName="hero-02 full-screen py-6" id="hero">
            <div clasName="hero-center">
                <div clasName="container">
                    <div clasName="row">
                        <div clasName="col-lg-12">
                            <div clasName="hero-content text-center">
                                <div clasName="hero-img">
                                    <img src="assets/img/man-avator.png" alt="" />
                                </div>
                                <h3 clasName="mb-0 mt-3">I'M John Doe</h3>
                                <h1 clasName="text-capitalize mb-3"><span clasName="base-color">A  </span> <span clasName="element" data-elements="UI Designer.,Web Designer.,Web Developer."></span></h1>
                                <a href="javascript:void(0);" clasName="pill-button-01">Download Cv</a>
                            </div>
                        </div>
                    </div>
                    <div clasName="scroll-down">
                        <a href="#about">
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
