import { useContext } from "react";
import { Link } from "react-router-dom";
import { MediaContext } from "../MediaContext";

function Tv() {
  let media = useContext(MediaContext);
  var imgURL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <div className="min-vh-100">
        {media.trendingSeries.length > 0 ? (
          <div className="container mt-5 text-white">
            <div className="row g-4 mt-5">
              <div className="col-md-12 align-content-center">
                <h1 className="">
                  <span className="txt-color">TV Shows</span>
                </h1>
                <p className="fw-lighter opacity-50">
                  Best trending TV Shows in the last day
                </p>
              </div>

              {media.trendingSeries.map((serie, index) => (
                <div key={index} className="col-md-2 position-relative">
                  <div className=" position-absolute top-0 rounded-1 rate-bg">
                    <i className="fas fa-star fa-xs mx-1"></i>
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
              ))}
            </div>
          </div>
        ) : (
          <div className="txt-color min-vh-100 d-flex justify-content-center align-items-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tv;
