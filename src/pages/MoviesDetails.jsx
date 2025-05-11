import React, { useState, useEffect, use } from "react";
import { axiosInstance } from "../apis/config";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MoviesDetails() {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/${id}?api_key=0c79feb73f97e97228ca7e3a87f0ffcc`)
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container-md p-2 ">
        <div
          className="row  mx-auto border-bottom my-5 pb-3"
          style={{ width: "95%" }}
        >
          <div className="col-md-3 ">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                className="w-100 rounded-5 "
              />
            </div>
          </div>
          <div className="col-md-9">
            <div className="ps-3">
              <h1
                className="mb-0"
                style={{ fontSize: "48px", color: "#000000" }}
              >
                {movie?.original_title}
              </h1>
              <span style={{ fontSize: "12px", color: "#858585" }}>
                {new Date(movie?.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",})}
              </span>
              <p>
                Rating: {"⭐".repeat(Math.round(movie?.vote_average))} (
                {movie?.vote_average.toFixed(1)}).
              </p>
              <p
                className="mt-3"
                style={{ fontSize: "24px", color: "#000000" }}
              >
                {movie?.overview}
              </p>
              <ul
                style={{ listStyleType: "none" }}
                className="my-3 d-flex justify-content-start align-items-center flex-wrap ps-0"
              >
                {movie?.genres?.map((genre, index) => (
                  <li key={genre.id} className={index !== 0 ? "ms-2" : ""}>
                    <button
                      className="btn rounded-pill"
                      style={{
                        fontSize: "1rem",
                        color: "#000000",
                        backgroundColor: "#FFE353",
                      }}
                    >
                      {genre.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-between align-items-center flex-wrap w-50">
                <div>
                  <h5
                    style={{
                      fontSize: "1rem",
                      color: "#000000",
                      fontWeight: "700",
                    }}
                  >
                    Duration:{" "}
                    <span style={{ fontWeight: "400" }}>
                      {movie?.runtime} Min
                    </span>
                  </h5>
                </div>
                <div>
                  <h5
                    style={{
                      fontSize: "1rem",
                      color: "#000000",
                      fontWeight: "700",
                    }}
                  >
                    Languages:{" "}
                    <span style={{ fontWeight: "400" }}>
                      {movie?.spoken_languages[0].name}{" "}
                    </span>
                  </h5>
                </div>
              </div>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.production_companies[0]?.logo_path}`}
                  alt="img picture"
                  loading="lazy"
                  className="my-3"
                  style={{
                    width: "80%",
                    maxWidth: "100px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
              <button
                className="btn rounded-pill"
                style={{
                  fontSize: "1rem",
                  color: "#000000",
                  border: "solid 1px #FFE353",
                }}
              >
                website
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
