import styled from "styled-components";
import { Element } from "react-scroll";
// Data
import { experienceData } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledExperience = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function Experience() {
  return (
    <Element name={"Experience"} id="experience">
      <StyledExperience className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Experience</h2>
              <div className="underline"></div>
            </Title>
          </Container>
            {experienceData.map((experiences) => {
              return (
                <Row key={experiences.id} className="align-items-center mt-5">
                  <Col className="d-none d-md-block text-center">
                    <img
                      src={experiences.logo}
                      alt="GitHub Avatar"
                      loading="lazy"
                      className="mx-auto"
                      style={{ width: "15rem", height: "15rem" }}
                    />
                  </Col>
                  <Col className="d-flex flex-column text-center">
                    <Container>
                      {experiences.name && <p>{experiences.name}</p>}
                      {experiences.company && <p>{experiences.company}</p>}
                      {experiences.duration && <p>{experiences.duration}</p>}
                    </Container>
                  </Col>
                </Row>
              );
            })}
        </Container>
      </StyledExperience>
    </Element>
  );
}
