import renovationCar from "../assets/img/home/renovation-car.png";
import RenovationItem from "../common/RenovationItem";
import "../styles/home/renovation.scss";
import {
  faLineChart,
  faCogs,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Renovation = () => {
  return (
    <div className="renovation-section">
      <div className="container">
        <div className="renovation-img">
          <h3>YOU NEED</h3>
          <h2>RENOVATION?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            bibendum, mi sed fermentum pulvinar, enim tortor dictum.
          </p>
          <img
            src={renovationCar}
            alt="you need renovation?"
            title="you need renovation?"
          />
        </div>
        <div className="renovation-cards">
          <RenovationItem
            icon={faLineChart}
            title="25 YEARS REPUTATION"
            text="Phasellus convallis risus sit amet cursus vestibulum. Vestibulum vitae tristique felis. Vivamus euismod pharetra dolor vel tempus."
          />
          <RenovationItem
            icon={faCogs}
            title="FULL INTEGRITY"
            text="Proin vulputate egestas leo sit amet tincidunt. Sed pulvinar ullamcorper nibh. Cum sociis natoque penatibus et magnis dis."
          />
          <RenovationItem
            icon={faClock}
            title="QUICK & EFFICIENT"
            text="Etiam pellentesque pretium eros, nec pulvinar purus efficitur a. Sed accumsan tempor odio, pretium vehicula turpis egestas in."
          />
        </div>
      </div>
    </div>
  );
};

export default Renovation;
