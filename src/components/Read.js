// Imports React
import React from 'react';
// Imports Movies Component
import { Movies } from './Movies';
// Imports axios
import axios from 'axios';

// Exports Read Component
export class Read extends React.Component {
  state = {
    // movies state
    movies: []
  };

  // Lifecycle Hook
  componentDidMount() {
    axios
      // Get Request to API
      .get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
      // Get Response
      .then(res => {
        // Update movies state with data from API
        this.setState({ movies: res.data.Search });
      })
      // Return error if anything goes wrong
      .catch(err => console.log(err));
  }

  render() {
    return (
      // <div> has been replaced with a React Fragment
      <>
        <Movies movies={this.state.movies} />
      </>
    );
  }
}
