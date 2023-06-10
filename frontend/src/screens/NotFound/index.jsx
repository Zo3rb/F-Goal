import "./NotFound.styles.scss";

export default function NotFound() {
  return (
    <div className="error-container">
      <div className="error-card">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          Oops! The page you are looking for cannot be found.
        </p>
        <a href="/" className="back-btn">
          Back to Home
        </a>
      </div>
    </div>
  );
}
