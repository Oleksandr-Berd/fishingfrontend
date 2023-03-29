import css from "./Home.module.css";
import image from "../../Utilities/Images/home/commonFishing.jpg";
import image2 from "../../Utilities/Images/home/fishing.jpeg";
import image3 from "../../Utilities/Images/home/fishing_freshwater_thumb.jpg";
import image4 from "../../Utilities/Images/home/fly-fishing-beaver-river.jpg";
import image5 from "../../Utilities/Images/home/2820-m0014-m007-m050-asym-m008-m022-fishinggearguide-as293414344.jpeg";
import image6 from "../../Utilities/Images/home/gone_fishing.max-752x423.jpg";

export const Home = () => {
  return (
    <div className={css.container}>
      <div className={css.panelFirst}>
        <div className={css.panelTall}>
          <img src={image} alt="fishing" />
        </div>
        <div className={css.panelSmall}>
          <img src={image2} alt="fishing" />
        </div>
      </div>

      <div className={css.panelSecond}>
        <div className={css.panelSmall}>
          <img src={image3} alt="fishing" />
        </div>
        <div className={css.panelTall}>
          <img src={image4} alt="fishing" />
        </div>
      </div>

      <div className={css.panelFirst}>
        <div className={css.panelTall}>
          <img src={image5} alt="fishing" />
        </div>
        <div className={css.panelSmall}>
          <img src={image6} alt="fishing" />
        </div>
      </div>
    </div>
  );
};
