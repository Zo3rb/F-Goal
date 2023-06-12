import { useNavigate } from "react-router-dom";

import MoSalahImg from "../../assets/imgs/mo_salah.png";
import MostafaMoImg from "../../assets/imgs/mostafa_mo.png";

export default function LandingPlayers() {
  const navigate = useNavigate();
  return (
    <section
      id="players_section"
      className="d-md-flex justify-content-center align-items-center vh-100 vw-100"
    >
      <div className="container-md">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              style={{ maxHeight: "400px", width: "100%" }}
              src={MoSalahImg}
              alt="Mo Salah"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <img
              style={{ maxHeight: "400px", width: "100%" }}
              src={MostafaMoImg}
              alt="Mostafa Mohamed"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row">
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
      </div>
    </section>
  );
}
