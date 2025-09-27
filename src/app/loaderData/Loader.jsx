// import "./demo.css";  // Importing Css File that is alos will work
import style from "./loader.module.css";
const Loader = () => {
  return (
    <div>
      <div className={style.myloader}></div>
      {/* <div className="myloader"></div> */}
    </div>
  );
};

export default Loader;
