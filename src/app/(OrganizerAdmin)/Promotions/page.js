import React from "react";
import { Col, Row } from "react-bootstrap";

function page() {
  return (
    <div>
      <div className="cards">
        <div className="card-header">
          <div>
            <h2 className="card-title">Promotion Packages</h2>
            <p className="card-desc">
              Boost your event's visibility with our promotion packages. Choose
              the package that best fits your needs and budget.
            </p>
          </div>
        </div>
        <h5 className="promation-title">Choose a promotion package</h5>
        <Row className="gx-5">
          <Col md={4}>
            <div className="pricing-cards">
              <div>
                <h5>Basic</h5>
                <h2>
                  $99 <span>per Day</span>
                </h2>
              </div>
              <p>Discover Feed</p>
              <p>Category Page</p>
              <button type="button" className="custom-btn w-100">
                Select
              </button>
            </div>
          </Col>
          <Col md={4}>
            <div className="pricing-cards">
              <div>
                <h5>Standard</h5>
                <h2>
                  $199 <span>3 Days</span>
                </h2>
              </div>
              <p>Discover Feed</p>
              <p>Category Page</p>
              <p>Homepage</p>
              <button type="button" className="custom-btn w-100">
                Select
              </button>
            </div>
          </Col>
          <Col md={4}>
            <div className="pricing-cards">
              <div>
                <h5>Premium</h5>
                <h2>
                  $299 <span>7 Days (Week)</span>
                </h2>
              </div>
              <p>Discover Feed</p>
              <p>Category Page</p>
              <p>Homepage</p>
              <p>Map Highlight</p>
              <button type="button" className="custom-btn w-100">
                Select
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default page;
