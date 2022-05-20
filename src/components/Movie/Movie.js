import "./Movie.css";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";

function Movie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let data = props.data;
  return (
    <>
      <div className="movie-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          />
          <Card.Body className="body">
            <Card.Title>{data.title}</Card.Title>
            <Card.Text className="text">{data.release_date}</Card.Text>
            <Button variant="primary" onClick={handleShow}>
              More Details
            </Button>
          </Card.Body>
        </Card>
      </div>
      <ModalMovie show={show} handleClose={handleClose} data={data} />
    </>
  );
}
export default Movie;
