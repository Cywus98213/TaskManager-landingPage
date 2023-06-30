import "./style.css";
import mainPageIcon from "./icons/mainPage1.png";

function mainPage() {
  return (
    <>
      <div className="mainPage-wrapper">
        <div className="background-glow"></div>
        <div className="middle-layer">
          <p className="layer-sm"></p>
          <p className="layer-md"></p>
          <p className="layer-md"></p>
          <p className="layer-lg"></p>
          <p className="layer-md"></p>
          <p className="layer-md"></p>
          <p className="layer-esm"></p>
        </div>
        <div className="mainPage-front">
          <div className="small-greet-container">
            <p className="small-greet">Now We Are Using AI Technology.</p>
          </div>
          <div className="big-greet-container">
            <h1 className="big-greet">Unlock Your Full Potential</h1>
            <h1 className="big-greet">
              With <span className="highlight"> Layerio. </span>
              <img src={mainPageIcon} alt="" />
            </h1>
          </div>

          <div className="small-description">
            <p>
              With our website, you'll have access to a wide range of tools and
              resources designed to help you increase your productivity and
              achieve your goals.
            </p>
          </div>

          <div className="newletter-container">
            <input type="text" placeholder="Enter Email Address" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default mainPage;
