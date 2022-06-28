import React, { useState } from "react";

import { Form, Modal, Button } from "react-bootstrap";

import "../modal.scss";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span className="modal-text">
          You can change variable configuration only in Percentage and Target
        </span>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{props.modaltitle}</Form.Label>
            <Form.Control  placeholder={props.modaltitle} disabled/>
        </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{props.percent}</Form.Label>
            <Form.Control type="text" placeholder="Type in Percentage" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{props.target}</Form.Label>
            <Form.Control type="text" placeholder="Type in Target" />
          </Form.Group>
      
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const ConfigModal = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
        Edit
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modaltitle={props.modaltitle}
        percent={props.percent}
        target={props.percent}
      />
    </>
  );
};

export default ConfigModal;
