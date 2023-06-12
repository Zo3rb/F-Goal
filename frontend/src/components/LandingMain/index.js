import { useNavigate } from "react-router-dom";

import MainImgBG from "../../assets/imgs/main.jpg";
import "./LandingMain.styles.scss";

export default function LandingMain() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid" id="main_section">
      <div className="row">
        <div
          className="col-lg-12 main-container"
          style={{
            background: `url(${MainImgBG}) top center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <div className="main-content-container p-sm-5 p-md-3">
            <div className="main-content">
              <h1 className="display-1">F-Goal</h1>
              <p className="lead">
                F-Goal is a fan-to-fan web application that provides all the
                latest news and information about your local soccer club.
              </p>
              <p className="lead">
                With F-Goal, you can stay up-to-date on upcoming games, player
                news and information, and more.
              </p>
              <p className="lead">
                Our simple and user-friendly interface makes it easy to navigate
                through the app and find the information you need quickly.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => navigate("/home")}
                  className="btn btn-primary btn-lg d-sm-block d-md-inline px-5 py-2 mx-3 my-sm-1 my-md-0"
                >
                  Get Started
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/blogs")}
                  className="btn btn-secondary btn-lg d-sm-block d-md-inline px-5 py-2 mx-3 my-sm-1 my-md-0"
                >
                  View Blogs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
