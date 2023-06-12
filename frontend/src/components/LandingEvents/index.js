import { useNavigate } from "react-router-dom";

import "./LandingEvents.styles.scss";
import CupImgBG from "../../assets/imgs/cup.png";

export default function LandingEvents() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid" id="events_section">
      <div className="row">
        <div
          className="col-lg-12 main-container"
          style={{
            background: `url(${CupImgBG}) top center no-repeat fixed`,
            backgroundSize: "cover",
          }}
        >
          <div className="main-content-container p-sm-5 p-md-3">
            <div className="main-content">
              <h2 className="display-2">Events</h2>
              <p className="lead">
                We get you closer for all upcoming events time by a time. Local
                and Globally.
              </p>
              <button
                type="button"
                onClick={() => navigate("/events")}
                className="btn btn-primary btn-lg d-sm-block d-md-inline px-5 py-2 mx-3 my-sm-1 my-md-0"
              >
                Get Checked
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
