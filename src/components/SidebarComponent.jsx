import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaHome, FaFire, FaVideo, FaHeart } from "react-icons/fa";

const SidebarComponent = () => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item action href="/">
        <FaHome /> Home
      </ListGroup.Item>
      <ListGroup.Item action href="/">
        <FaFire /> Trending
      </ListGroup.Item>
      <ListGroup.Item action href="/">
        <FaVideo /> Subscriptions
      </ListGroup.Item>
      <ListGroup.Item action href="/">
        <FaHeart /> Favorites
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SidebarComponent;
