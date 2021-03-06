import { Card, Modal, Tab, Form } from "react-bootstrap";
import React, { useState } from "react";
import "../index.css";

const Policy = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container-fluid top-level">
        <div className="d-flex text-center">
          <h3 className="mt-3">Policies</h3>
          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={() => setShowModal(true)}
          >
            Add Policy
          </button>
        </div>
        <Card className="policyContainer">
          <div>
            <button>{/* map over each policy */}</button>
          </div>
          <div>{/* render each policy upon selection */}</div>
        </Card>
      </div>
      {/* set modal data up */}
      <Modal
        size="sm"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="formPolicy">
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Form
                  className="mb-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* here adds a new property */}
                  <Form.Label>
                    {" "}
                    Property Name:
                    <Form.Control
                      className="PropName"
                      type="input"
                    ></Form.Control>
                  </Form.Label>
                  <Form.Label>
                    Estimated Value:
                    <Form.Control
                      className="EstimatedValue"
                      type="input"
                    ></Form.Control>
                  </Form.Label>
                  <Form.Label>
                    Personal Property Recomendation:
                    <Form.Control className="PPR" type="input"></Form.Control>
                  </Form.Label>
                  <Form.Label>
                    Date Purchased:
                    <Form.Control
                      className="PurchasedDate"
                      type="input"
                    ></Form.Control>
                  </Form.Label>
                  <Form.Label>
                    Location:
                    <Form.Control
                      className="Location"
                      type="input"
                    ></Form.Control>
                  </Form.Label>
                  <Form.Label>
                    Policy:{" "}
                    <Form.Control
                      className="Policy"
                      type="input"
                    ></Form.Control>
                  </Form.Label>
                  <Form.Control
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  ></Form.Control>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};
export default Policy;
