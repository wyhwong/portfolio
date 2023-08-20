import { useAppContext } from "../appContext";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { resume, intro_p1, intro_p2 } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledAbout = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutMe() {
  const { avatar_url } = useSelector(selectData);
  const { theme } = useAppContext();

  return (
    <Element name={"About"} id="about">
      <StyledAbout className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                {intro_p1 && <p>{intro_p1}</p>}
                {intro_p2 && <p>{intro_p2}</p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
          <Row className="mt-5 align-items-center">
            <Col></Col>
            <Col className="d-none d-md-block text-center">
              {resume && (
                <a href={resume}>
                  <Button
                    size="lg"
                    variant={theme === "light" ? "outline-dark" : "outline-light"}
                    className="mt-5"
                  >
                    R&eacute;sum&eacute;
                  </Button>
                </a>
              )}
            </Col>
          </Row>
        </Container>
      </StyledAbout>
    </Element>
  );
}
