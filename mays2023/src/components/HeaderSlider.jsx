import Slider from "react-slick"
import React from "react"

const HeaderSlider = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 13000,
        dots: false,
        fade: true,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    }

    return (
        <section
            className="slider_area slider_area_3 bg_cover"
            style={{ backgroundImage: "url(assets/images/omahafountain.jpg)" }}
        >
            <Slider {...settings}>
                <div className="single_slider_3 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="slider_content_3">
                                    <h2
                                        className="title"
                                        data-animation="fadeInUp"
                                        data-delay="0.4s"
                                    >
                                        Helping today's <br /> youth make <br /> better choices{" "}
                                    </h2>
                                    <a
                                        href="#"
                                        className="main-btn main-btn-2"
                                        data-animation="fadeInUp"
                                        data-delay="0.8s"
                                    >
                                        Learn More
                                    </a>
                                </div>{" "}
                            </div>
                        </div>{" "}
                    </div>{" "}
                </div>
                <div className="single_slider_3 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="slider_content_3">
                                    <h2
                                        className="title"
                                        data-animation="fadeInUp"
                                        data-delay="0.4s"
                                    >
                                        We are <br /> passionate about <br /> youth development{" "}
                                    </h2>
                                    <a
                                        href="#"
                                        className="main-btn main-btn-2"
                                        data-animation="fadeInUp"
                                        data-delay="0.8s"
                                    >
                                        Learn More
                                    </a>
                                </div>{" "}
                                {/* slider content */}
                            </div>
                        </div>{" "}
                        {/* row */}
                    </div>{" "}
                    {/* container */}
                </div>
                <div className="single_slider_3 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="slider_content_3">
                                    <h2
                                        className="title"
                                        data-animation="fadeInUp"
                                        data-delay="0.4s"
                                    >
                                        We’ve funded <br /> 44,007 Dollars over <br /> 10 million
                                        peoples{" "}
                                    </h2>
                                    <a
                                        href="#"
                                        className="main-btn main-btn-2"
                                        data-animation="fadeInUp"
                                        data-delay="0.8s"
                                    >
                                        Learn More
                                    </a>
                                </div>{" "}
                                {/* slider content */}
                            </div>
                        </div>{" "}
                        {/* row */}
                    </div>{" "}
                    {/* container */}
                </div>
            </Slider>
        </section>
    )
}

export default HeaderSlider