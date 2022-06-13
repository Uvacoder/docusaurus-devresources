import React from "react";
import ReactPlayer from "react-player/youtube";

const EmbedYT = ({ children }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
        url={children}
      />
    </div>
  );
};

export default EmbedYT;
