import logo from '../assets/img/home/main-logo_big.png'
import Button from "./Button";

const MainSliderItem = ({ backgroundImage, linkText, linkUrl }) => {
  return (
    <div
      className="main-slider-item"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="main-slider-overlay">
        <div className="main-slider-overlay-text">
          <img src={logo} alt="logo" />
          <h3>Mechanics Services</h3>
          <h2>Creative & professional</h2>
          <Button text={linkText} link={linkUrl} />
        </div>
      </div>
    </div>
  );
};

export default MainSliderItem;
