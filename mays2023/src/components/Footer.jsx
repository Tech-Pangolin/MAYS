const Footer = () => {
    return (
        <footer className="footer_area">
        <div className="footer_widget pt-80 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 order-md-1 order-lg-1">
                <div className="footer_about mt-50">
                  <a href="#">
                    <img src="assets/images/mayslogo-orig.png" alt="Logo" />
                  </a>
                  <p>
                    The Mays Foundation has built a recognizable reputation for
                    providing youth with the opportunity to learn and grow in a
                    safe, supportive environment, free from the bondage of the
                    streets.
                  </p>
                  <div className="footer_contact mt-20">
                    <h5 className="footer_title">Contact us</h5>
                    <p>
                      5020 Grand Avenue, <br /> Omaha, NE 68104
                    </p>
                  </div>{" "}
                  {/* footer contact */}
                </div>{" "}
                {/* footer about */}
              </div>
              <div className="col-lg-5 col-md-12 order-md-3 order-lg-2">
                <div className="footer_link_wrapper d-flex flex-wrap">
                  <div className="footer_link mt-50">
                    <h5 className="footer_title">Useful links</h5>
                    <ul className="link">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Hood to the Woods</a>
                      </li>
                      <li>
                        <a href="#">Gallery</a>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* footer link */}
                  {/* <div class="footer_link mt-50">
                              <h5 class="footer_title">Our Causes</h5>
                              <ul class="link">
                                  <li><a href="#">Water Purify</a></li>
                                  <li><a href="#">Food Collect</a></li>
                                  <li><a href="#">Health Fund</a></li>
                                  <li><a href="#">Free Education</a></li>
                                  <li><a href="#">Poor Health</a></li>
                              </ul>
                          </div>  */}
                  {/* footer link */}
                </div>{" "}
                {/* footer link wrapper */}
              </div>
              <div className="col-lg-3 col-md-6 order-md-2 order-lg-3">
                <div className="footer_subscribe mt-50">
                  <h5 className="footer_title">Subscribe</h5>
                  <p>The MAYS Foundation</p>
                  <div className="subscribe_form">
                    <form action="#">
                      <input type="text" placeholder="Email" />
                      <button>
                        <i className="fa fa-paper-plane" />
                      </button>
                    </form>
                  </div>
                </div>{" "}
                {/* footer link  */}
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container */}
        </div>{" "}
        {/* footer widget */}
        <div className="footer_copyright text-center">
          <div className="container">
            <div className="copyright">
              <p>Site Design: Copyright © Helpgrove 2019. All Rights Reserved.</p>
              <p>Site Developed by: Terra Taylor</p>
            </div>{" "}
            {/* copyright */}
          </div>{" "}
          {/* container */}
        </div>{" "}
        {/* footer copyright */}
      </footer>
    )
}

export default Footer