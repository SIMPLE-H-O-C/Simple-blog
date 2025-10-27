import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/BillBoardHero.css";

export default function BillBoardHero() {
  return (
    <section className="hero-section">
      <div className="billboard-container">
        <video
          className="billboard-video"
          src="/videos/video.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="A video showcasing inspiring stories"
          poster="/images/video-poster.jpg"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="hero-overlay">
        <div className="glass-content text-center">
          <h1 className="hero-title fw-bold">
            Touchline Launches New Documentary, “Off The Record”
          </h1>

          <div className="post-meta">
            <span className="author">
              <i className="fa fa-user"></i>Mpho
            </span>
            <span className="date">
              <i className="fa fa-calendar"></i> October 28, 2025
            </span>
          </div>

          <button
            className="btn hero-btn mt-3"
            aria-label="Read more about the stories"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
