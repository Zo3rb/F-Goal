import { useNavigate } from "react-router-dom";

import AhlyImg from "../../assets/imgs/ahly.jpg";
import ZamalekImg from "../../assets/imgs/zamalek.jpg";

export default function LandingTeams() {
  const navigate = useNavigate();
  return (
    <section
      id="teams_section"
      className="d-md-flex justify-content-center align-items-center vh-100 vw-100"
    >
      <div className="container-md">
        <div className="row" style={{ backgroundColor: "#D50304" }}>
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={AhlyImg} alt="alAhly club img" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex justify-content-start text-white text-lead align-items-center">
            <ul>
              <li>All news about your favorite club</li>
              <li>Updated with accurate data</li>
              <li>Getting you closer to the bench</li>
              <li>As a supporter, fan and lover</li>
              <button
                type="button"
                onClick={() => navigate("/teams")}
                className="btn btn-primary btn-lg d-sm-block d-md-inline px-5 py-2 mx-3 my-sm-1 my-md-0 mt-md-3 ms-md-0"
              >
                Get Started
              </button>
            </ul>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "#F4F4F4" }}>
          <div
            className="col-md-6 d-flex justify-content-end text-lead align-items-center"
            style={{ color: "#D50304" }}
          >
            <ul style={{ marginRight: "3rem" }}>
              <li>All news about your favorite club</li>
              <li>Updated with accurate data</li>
              <li>Getting you closer to the bench</li>
              <li>As a supporter, fan and lover</li>
              <button
                type="button"
                onClick={() => navigate("/teams")}
                className="btn btn-primary btn-lg d-sm-block d-md-inline px-5 py-2 mx-3 my-sm-1 my-md-0 mt-md-3 ms-md-0"
              >
                Get Started
              </button>
            </ul>
          </div>
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={ZamalekImg}
              alt="alzamalek club img"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
