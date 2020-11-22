import React from "react";
import "./App.css";
import FormMovie from "/src/components/FormMovie.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>Hey !</h1>
      <h2>What's your favorite movie?</h2>
      <h3>
        Comment your choice (why do you like this movie? What made you stand
        out? ...)
      </h3>

      <FormMovie />
    </div>
  );
}
