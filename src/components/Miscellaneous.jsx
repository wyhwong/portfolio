import styled from "styled-components";
import { Element } from "react-scroll";
// Data
import { miscellaneousData } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledCertificate = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function Miscellaneous() {
  return (
    <Element name={"Miscellaneous"} id="miscellaneous">
      <StyledCertificate className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Miscellaneous</h2>
              <div className="underline"></div>
            </Title>
          </Container>
            {miscellaneousData.map((certificates) => {
              return (
                <Row key={certificates.id} className="align-items-center mt-5">
                  <Col className="d-none d-md-block text-center">
                    <img
                      src={certificates.logo}
                      alt="GitHub Avatar"
                      loading="lazy"
                      className="mx-auto"
                      style={{ width: "15rem", height: "15rem" }}
                    />
                  </Col>
                  <Col className="d-flex flex-column text-center">
                    <Container>
                      {certificates.name && <p>{certificates.name}</p>}
                      {certificates.organization && <p>{certificates.organization}</p>}
                    </Container>
                  </Col>
                </Row>
              );
            })}
        </Container>
      </StyledCertificate>
    </Element>
  );
}
