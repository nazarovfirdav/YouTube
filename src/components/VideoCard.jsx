import React from "react";
import { Card } from "react-bootstrap";

const VideoCard = ({ video }) => {
  return (
    <Card>
      <iframe
        width="100%"
        height="200"
        src={video.url}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Card.Body>
        <Card.Title>{video.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
