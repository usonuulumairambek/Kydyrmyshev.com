import React from "react";
import "./modal.css";
function modal({ active, setActive }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Si6eExx_qZE?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
      </div>
    </div>
  );
}

export default modal;
