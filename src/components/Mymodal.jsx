import React ,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPlusCircle } from "react-icons/bs";
import "./modal.scss";
import Upload from './Upload';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upload Csv files
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span className="modal-text">Import a CSV file to add employees to board, and update information,
          ypur csv file should include a header row with field name and a column
        </span>
        <p>
        <Upload/>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Upload CSV</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Mymodal =()=> {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="danger" 
      onClick={() => setModalShow(true)}
      >
        <span><BsPlusCircle/></span>
       <span className="text-sm"> Add New Batch </span>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

 export default Mymodal;


// import React from 'react'

// const Mymodal = () => {
//   return (
//     <div>Mymodal</div>
//   )
// }

// export default Mymodal


