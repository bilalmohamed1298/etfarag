import { useContext } from "react";
import { Link } from "react-router-dom";
import { MediaContext } from "../MediaContext";

function Home() {
  let media = useContext(MediaContext);

  var imgURL = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      {media.trendingMovies.length > 0 ? (
        <div className="container mt-5 text-white">
          <div className="row g-4 my-2">
            <div className="col-md-12 align-content-center text-center">
              <h1 className="">
                Most Watched{" "}
                <span className="txt-color">
                  <Link
                    to="../movies"
                    className="text-decoration-none txt-color"
                  >
                    Movies
                  </Link>
                </span>{" "}
                Today
              </h1>
              <p className="fw-lighter opacity-50">
                Best trending movies in the last day
              </p>
            </div>

            {media.trendingMovies.map((movie, index) =>
              index < 12 ? (
                <div key={index} className="col-md-2 position-relative">
                  <div className=" position-absolute top-0 rounded-1 rate-bg pe-1 ps-0">
                    <i className="fas fa-star fa-xs mx-1"></i>
                    {movie.vote_average.toFixed(1)}
                  </div>
                  <Link
                    to={`/moviedetails/${movie.id}`}
                    className="text-decoration-none text-white"
                  >
                    <img
                      src={imgURL + movie.poster_path}
                      alt=""
                      className="w-100 rounded-3"
                    />
                    <h6 className="mt-3">{movie.title}</h6>
                  </Link>
                </div>
              ) : (
                ""
              )
            )}
          </div>

          <div className="row g-4 my-5">
            <div className="col-md-12 align-content-center text-center">
              <h1 className="">
                Most Watched{" "}
                <span className="txt-color">
                  <Link to="../tv" className="text-decoration-none txt-color">
                    TV Shows
                  </Link>
                </span>{" "}
                Today
              </h1>
              <p className=" fw-lighter opacity-50">
                Best trending tv shows in the last day
              </p>
            </div>
            {media.trendingSeries.map((serie, index) =>
              index < 12 ? (
                <div key={index} className="col-md-2 position-relative">
                  <div className=" position-absolute top-0 rounded-1 rate-bg">
                    <i className="fas fa-star fa-xs me-1"></i>
                    {serie.vote_average.toFixed(1)}
                  </div>
                  <Link
                    to={`/seriedetails/${serie.id}`}
                    className="text-decoration-none text-white"
                  >
                    <img
                      src={imgURL + serie.poster_path}
                      alt=""
                      className="w-100 rounded-3"
                    />
                    <h6 className="mt-3">{serie.name}</h6>
                  </Link>
                </div>
              ) : (
                ""
              )
            )}
          </div>

          <div className="row g-4 my-5">
            <div className="col-md-12 align-content-center text-center">
              <h1 className="">
                Popular <span className="txt-color">Artists</span>
              </h1>
              <p className=" fw-lighter opacity-50"></p>
            </div>
            {media.trendingPeople.map((people, index) =>
              index < 20 ? (
                <div key={index} className="col-md-1">
                  <Link
                    className="text-decoration-none text-white"
                    to={`/peopledetails/${people.id}`}
                  >
                    <img
                      src={
                        people.profile_path === null
                          ? "https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png"
                          : imgURL + people.profile_path
                      }
                      alt=""
                      className="w-100 rounded-3"
                    />
                    <h6 className="mt-3">{people.name}</h6>
                  </Link>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      ) : (
        <div className="txt-color min-vh-100 d-flex justify-content-center align-items-center">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
