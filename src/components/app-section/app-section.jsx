import "./style.css";
import circleCheck from "./icons/checkCircle.svg";
import playVideo from "./icons/playVideo.svg";
import AppDownload from "./icons/AppDownload.svg";
import mockUp from "./icons/mockup.png";
export default function AppSection() {
  return (
    <>
      <div className="app-section-wrapper">
        {/* <div className="middle-layer">
          <p className="layer-sm"></p>
          <p className="layer-md"></p>
          <p className="layer-md"></p>
          <p className="layer-lg"></p>
          <p className="layer-md"></p>
          <p className="layer-md"></p>
          <p className="layer-esm"></p>
        </div> */}
        <div className="app-intro">
          <h1>Layerio Helps You Increase Your Daily Productivity.</h1>
        </div>
        <div className="app-download-section">
          <div className="box1">
            <div className="box1-header">
              <p>IOS App</p>
            </div>
            <div className="box1-content">
              <h1>We are now available on IOS</h1>
            </div>
            <div className="box1-btn-wrapper">
              <img src={AppDownload} alt="" />
            </div>
          </div>
          <div className="box2">
            <div className="box2-feature">
              <div className="feature-line">
                <img src={circleCheck} alt="" />
                <p>
                  You Can Manage Your Time More Effectively And Efficiently.
                </p>
              </div>
              <div className="feature-line">
                <img src={circleCheck} alt="" />
                <p>
                  This App Collaboration Features, Which Let you Work Together.
                </p>
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="box3-left">
              <p>How to use the Layerio app?</p>
            </div>
            <div className="box3-right">
              <div className="box3-btn-gp">
                <button className="tutorial-btn">
                  <img className="tutorial-btn-icon" src={playVideo} alt="" />
                  Tutorial
                </button>
                <button className="learnMore-btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
