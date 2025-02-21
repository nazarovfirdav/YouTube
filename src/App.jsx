import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import videos from "./data/videos";
import NavbarComponent from "./components/NavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
import VideoCard from "./components/VideoCard";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <Container fluid>
        <Row>
          <Col md={2}>
            <SidebarComponent />
          </Col>
          <Col md={10}>
            <Row>
              {videos.map((video) => (
                <Col key={video.id} md={3} sm={6} xs={12} className="mb-4">
                  <VideoCard video={video} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
