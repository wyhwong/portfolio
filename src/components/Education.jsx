import styled from "styled-components";
import { Element } from "react-scroll";
// Data
import { educationData } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledEducation = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function Education() {
  return (
    <Element name={"Education"} id="education">
      <StyledEducation className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Education</h2>
              <div className="underline"></div>
            </Title>
          </Container>
            {educationData.map((educations) => {
              return (
                <Row key={educations.id} className="align-items-center mt-5">
                  <Col className="d-none d-md-block text-center">
                    <img
                      src={educations.logo}
                      alt="GitHub Avatar"
                      loading="lazy"
                      className="mx-auto"
                      style={{ width: "15rem", height: "15rem" }}
                    />
                  </Col>
                  <Col className="d-flex flex-column text-center">
                    <Container>
                      {educations.name && <p>{educations.name}</p>}
                      {educations.school && <p>{educations.school}</p>}
                      {educations.duration && <p>{educations.duration}</p>}
                    </Container>
                  </Col>
                </Row>
              );
            })}
        </Container>
      </StyledEducation>
    </Element>
  );
}
