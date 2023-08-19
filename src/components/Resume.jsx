import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
import { resume } from "../data";
// Components
import { Button, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

export default function Skills() {
  const { theme } = useAppContext();

  return (
    <Element name={"Resume"} id="resume">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>R&eacute;sum&eacute;</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-5 align-items-center">
            {resume && (
              <a href={resume}>
                <Button
                  size="lg"
                  variant={theme === "light" ? "outline-dark" : "outline-light"}
                  className="mt-5"
                >
                  Link to pdf
                </Button>
              </a>
            )}
          </Row>
        </Container>
      </section>
    </Element>
  );
}
