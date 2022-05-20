import "./Home.css";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import db from "../../data.json";
function Home(props) {
  const [coming, setComing] = useState(db);
  // async function getMovies() {
  //   let response = await fetch(process.env.REACT_APP_SERVER);
  //   let data = await response.json();
  //   setComing(data);
  // }
  // useEffect(() => {
  //   getMovies();
  //   //
  // }, []);
  return (
    <div className="all">
      <div className="list">
        <MovieList data={coming} />
      </div>
    </div>
  );
}
export default Home;
