import Slider from "react-slick"
import React from "react"


const Event = () => {

  const eventSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,  
    dots: true,
    speed: 800,
    className: 'event_active'
  } 

    return (  <section
        className="event_area_2 pt-130 pb-130 bg_cover"
        style={{ backgroundImage: "url(assets/images/gray-bg.jpg)" }}
      >
        <div
          className="event_shape_1"
          style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center pb-60">
                <img src="assets/images/section_icon.png" alt="Icon" />
                <h3 className="title">Our Latest Events</h3>
              </div>
            </div>
          </div>

          <div className="row no-gutters justify-content-center">
            <div className="col-lg-10">
              <Slider {...eventSliderSettings}>
                <div className="single_event_2 d-flex flex-wrap event_color-1">
                  <div className="event_image">
                    <img src="assets/images/camping.jpg" alt="event" />
                    <div className="event_date d-flex align-items-center justify-content-center">
                      <img
                        className="shape"
                        src="assets/images/shape/shape-3.png"
                        alt="shape"
                      />
                      <span className="date">
                        <span>13</span> Aug
                      </span>
                    </div>
                  </div>
                  <div className="event_content_wrapper d-flex align-items-center justify-content-center">
                    <div className="event_content">
                      <h4 className="event_title">
                        <a href="#">6th Annual "Hood 2 the Woods" Program</a>
                      </h4>
                      <p>
                        <img src="assets/images/map-2.png" alt="map" />{" "}
                        <span>2022/08/13 | Omaha, NE</span>{" "}
                      </p>
                      <a href="#" className="more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="single_event_2 d-flex flex-wrap event_color-2">
                  <div className="event_image">
                    <img src="assets/images/event-2.jpg" alt="event" />
                    <div className="event_date d-flex align-items-center justify-content-center">
                      <img
                        className="shape"
                        src="assets/images/shape/shape-3.png"
                        alt="shape"
                      />
                      <span className="date">
                        <span>13</span> Dec
                      </span>
                    </div>
                  </div>
                  <div className="event_content_wrapper d-flex align-items-center justify-content-center">
                    <div className="event_content">
                      <h4 className="event_title">
                        <a href="#">4th Annual Schoolyard Dash 5K</a>
                      </h4>
                      <p>
                        <img src="assets/images/map-2.png" alt="map" />{" "}
                        <span>
                          2018/12/28 00:00 69 Warren Street, New York, USA
                        </span>{" "}
                      </p>
                      <a href="#" className="more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="single_event_2 d-flex flex-wrap event_color-3">
                  <div className="event_image">
                    <img src="assets/images/event-3.jpg" alt="event" />
                    <div className="event_date d-flex align-items-center justify-content-center">
                      <img
                        className="shape"
                        src="assets/images/shape/shape-3.png"
                        alt="shape"
                      />
                      <span className="date">
                        <span>13</span> Dec
                      </span>
                    </div>
                  </div>
                  <div className="event_content_wrapper d-flex align-items-center justify-content-center">
                    <div className="event_content">
                      <h4 className="event_title">
                        <a href="#">4th Annual Schoolyard Dash 5K</a>
                      </h4>
                      <p>
                        <img src="assets/images/map-2.png" alt="map" />{" "}
                        <span>
                          2018/12/28 00:00 69 Warren Street, New York, USA
                        </span>{" "}
                      </p>
                      <a href="#" className="more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div
          className="event_shape_2"
          style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}
        />
      </section>)
}

export default Event