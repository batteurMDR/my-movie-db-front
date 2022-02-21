import React from "react";
import DisplayMovies from "../Components/Design-list/DisplayMovies";

const Movies = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <DisplayMovies />
    </div>
  );
};

export default Movies;
