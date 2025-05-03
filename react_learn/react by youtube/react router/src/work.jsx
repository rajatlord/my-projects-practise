import React from "react";
import "./work.css" // Make sure the CSS file is in the same folder or adjust the path

const Work = () => {
  return (
    <div>
      <div className="custom-tooltip" id="tooltip">View My Work</div>
      <div className="work-title">Selected Work</div>
      <div className="image-container">
        <div className="image-card mimi-don">
          <img src="/images/attuide.jpg" alt="My img" className="image" />
          <div className="title">Mimi don</div>
        </div>
        <div className="image-card best-licker">
          <img src="/images/hand_lick.jpeg" alt="My img" className="image" />
          <div className="title">Best licker</div>
        </div>
        <div className="image-card i-love-human">
          <img src="/images/bite.jpg" alt="My img" className="image" />
          <div className="title">I love human</div>
        </div>
        <div className="image-card goshtig">
          <img src="/images/cat-breaking-.webp" alt="My img" className="image" />
          <div className="title">Goshtig is my passion</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
