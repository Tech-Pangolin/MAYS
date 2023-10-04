import Header from "./components/Header";
import Preloader from "./components/Preloader";
import Services from "./components/Services";
import Slider from "./components/HeaderSlider";
import About from "./components/About";
import VolunteerForm from "./components/VolunteerForm";
import Causes from "./components/Causes";
import Testemonial from "./components/Testemonial";
import Event from "./components/Event";
import Volunteer from "./components/Volunteer";
import Footer from "./components/Footer";
import HeaderSlider from "./components/HeaderSlider";

function App() {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <HeaderSlider />
      <About />
      <VolunteerForm />
      <Causes />
      <Testemonial />
      <Event />
      <Volunteer />
      <Footer />

      <div className="go-top-area">
        <div className="go-top-wrap">
          <div className="go-top-btn-wrap">
            <div className="go-top go-top-btn">
              <i className="fa fa-angle-double-up" />
              <i className="fa fa-angle-double-up" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
