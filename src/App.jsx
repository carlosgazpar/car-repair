import Brands from "./components/Brands";
import MainSlider from "./components/MainSlider";
import Renovation from "./components/Renovation";
import Testimonials from "./components/Testimonials";
import "./styles/index.scss";
const App = () => {
  return (
    <>
      <MainSlider />
      <Renovation />
      <Testimonials />
      <Brands />
    </>
  );
};

export default App;
