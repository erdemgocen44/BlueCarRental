import React from "react";
import { Container, Breadcrumb, Row, Col } from "react-bootstrap";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <Container>
        <Row>
          <Col>
            <h1>{title}</h1>
            <Breadcrumb>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                <FiHome /> Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{title}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default PageHeader;
