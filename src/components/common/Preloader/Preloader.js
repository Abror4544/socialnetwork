import s from "../../Users/Users.module.css";
import preloader from "../../../assets/images/loader.svg";

let Preloader = (props) => {
  return <img className={s.loader} src={preloader} />;
};

export default Preloader;
