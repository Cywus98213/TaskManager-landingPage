import "./style.css";
import playVideo from "./icons/playVideo.svg";

function SubHero() {
  return (
    <>
      <div className="subHero-wrapper">
        {/* <div className="background-layer"></div> */}
        <div className="subHero-Left">
          <h1>Layerio Helps You Increase Your Daily Productivity.</h1>
        </div>
        <div className="subHero-Right">
          <div className="right-section">
            <p>
              We Are Focused On Creating Products. Services And Processes That
              Are Not Only Innovative But Also With The Highest Standards Of
              Excelience.
            </p>
            <div className="right-section-btn-wrapper">
              <button className="right-section-btn">
                {" "}
                <img
                  className="right-section-btn-icon"
                  src={playVideo}
                  alt=""
                />
                How It Works?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubHero;
