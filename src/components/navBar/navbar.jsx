import "./style.css";
import downloadIcon from "./icons/downloadIcon.svg";
import mobileMenu from "./icons/mobileMenu.svg";

function Navbar() {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <div className="navbar-logo">
            <h1 className="logo">PrioriTask</h1>
          </div>
          <ul className="navbar-links">
            <li>PRODUCT</li>
            <li>OOTD</li>
            <li>DELIVERY</li>
            <li>PROMO</li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="navbar-download-btn">
            <img className="download-icon" src={downloadIcon} alt="download" />
            Download App
          </button>
          <img className="menuIcon" src={mobileMenu} alt="Open Menu" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
