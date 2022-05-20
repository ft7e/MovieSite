import "./MovieList.css";
import Movie from "../Movie/Movie";
function MovieList(props) {
  return (
    <div className="list">
      {props.data.map((element) => {
        return <Movie data={element} />;
      })}
    </div>
  );
}

export default MovieList;
