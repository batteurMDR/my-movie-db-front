import React from "react";
import CreateMoviesComponent from "../Components/Design-creation/CreateMovies";

const CreateMovies = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <CreateMoviesComponent />
    </div>
  );
};

export default CreateMovies;
