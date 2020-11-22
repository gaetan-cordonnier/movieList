import React from "react";
import "./FormMovie.css";

export default class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", poster: "", comment: "" };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };
    const url = "https://post-a-form.herokuapp.com/api/movies";
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Yeah! #${res} has a good movie choice!`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding the movie.");
      });
  };

  render() {
    return (
      <div className="FormMovie">
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="name">Movie title:</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster URL:</label>
              <input
                type="poster"
                id="url"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Comment:</label>
              <input
                type="textarea"
                id="comment"
                name="comment"
                rows="6"
                cols="150"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <div className="form-data">
              <input id="button" type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
