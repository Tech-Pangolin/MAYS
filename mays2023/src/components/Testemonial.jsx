import Slider from "react-slick"
import React from "react"

const Testemonial = () => {
  const [contentWrapperRef, setContentWrapperRef] = React.useState(null)
  const [imageWrapperRef, setImageWrapperRef] = React.useState(null)

  const testimonial_content_wrapper_2_settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    speed: 800,
    asNavFor: imageWrapperRef,
    className: 'testimonial_content_wrapper_2',
    ref: (slider) => setContentWrapperRef(slider)
  }

  const testimonial_image_wrapper_2_settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: contentWrapperRef,
    arrows: false,
    dots: false,
    speed: 800,
    focusOnSelect: true,
    className: 'testimonial_image_wrapper_2', 
    ref: (slider) => setImageWrapperRef(slider)
  }

  return (
    <section className="testimonial_area">
      <Slider {...testimonial_image_wrapper_2_settings}>

        <div className="single_testimonial_image_2">
          <img src="assets/images/tents.jpg" alt="testimonial" />
        </div>

        <div className="single_testimonial_image_2">
          <img src="assets/images/testimonial-2.jpg" alt="testimonial" />
        </div>

        <div className="single_testimonial_image_2">
          <img src="assets/images/testimonial-3.jpg" alt="testimonial" />
        </div>
        
      </Slider>
      <div className="testimonial_content_area">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <Slider {...testimonial_content_wrapper_2_settings}>
                <div className="single_testimonial_content text-center">
                  <i className="fa fa-quote-right" />
                  <h4 className="testimonial_title">Testimonial</h4>
                  <p>
                    I noticed a difference in my son the very next day after our
                    family assessment. He remembers what brings him joy, and he's
                    committed to reconnecting to it.{" "}
                  </p>
                  <h6 className="author_name">Tamira Smith</h6>
                </div>

                <div className="single_testimonial_content text-center">
                  <i className="fa fa-quote-right" />
                  <h4 className="testimonial_title">Testimonial</h4>
                  <p>
                    Thank you SO MUCH for bringing us our child back! You've been
                    the blessing I prayed so long for!
                  </p>
                  <h6 className="author_name">Imani Nelson</h6>
                </div>

                <div className="single_testimonial_content text-center">
                  <i className="fa fa-quote-right" />
                  <h4 className="testimonial_title">Testimonial</h4>
                  <p>
                    It's been two years since I sent Brandon on the camping trip,
                    and I still see him using the tools taught to him in his daily
                    life.
                  </p>
                  <h6 className="author_name">Ronnell Cook</h6>
                </div>

              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testemonial