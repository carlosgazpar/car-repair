import Brands from "./components/Brands";
import MainSlider from "./components/MainSlider";
import Renovation from "./components/Renovation";
import Testimonials from "./components/Testimonials";
import WorkInprogress from "./components/WorkInprogress";
import "./styles/index.scss";
const App = () => {
  return (
    <>
      <MainSlider />
      <Renovation />
      <Testimonials />
      <Brands />
      <WorkInprogress />
    </>
  );
};

export default App;
