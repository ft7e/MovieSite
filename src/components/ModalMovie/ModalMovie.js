import "./ModalMovie.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

function ModalMovie(props) {
  let data = props.data;
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.overview}</Modal.Body>
        <Modal.Body>
          <img
            className="modal-img"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Add to Favorites
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalMovie;
