// Imports React
import React from 'react';

// Exports Create Component
export class Create extends React.Component {
  constructor() {
    super();
    // Bind methods to onChange Events
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePoster = this.onChangePoster.bind(this);

    // State
    this.state = {
      Title: '',
      Year: '',
      Poster: ''
    };
  }

  // onSubmit Method
  onSubmit(e) {
    // Prevents users from submitting more than once
    e.preventDefault();
    alert(`Movie: ${this.state.Title} | ${this.state.Year} | ${this.state.Poster}`);
  }
  // onChangeTitle Method
  onChangeTitle(e) {
    this.setState({
      Title: e.target.value
    });
  }
  // onChangeYear Method
  onChangeYear(e) {
    this.setState({
      Year: e.target.value
    });
  }
  // onChangePoster Method
  onChangePoster(e) {
    this.setState({
      Poster: e.target.value
    });
  }

  render() {
    return (
      <div className='App container'>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Add Movie Title: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.Title}
              onChange={this.onChangeTitle}
            />
            <div className='form-group'>
              <label>Add Movie Year: </label>
              <input
                type='text'
                className='form-control'
                value={this.state.Year}
                onChange={this.onChangeYear}
              />
            </div>
            <div className='form-group'>
              <label>Movies Poster: </label>
              <textarea
                type='text'
                className='form-control'
                value={this.state.Poster}
                onChange={this.onChangePoster}></textarea>
            </div>
            <div className='form-group'>
              <input type='submit' value='Add Movie' className='btn btn-primary' />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
