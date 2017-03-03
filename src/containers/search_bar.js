import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

// OPenWeatherAPI Format = api.openweathermap.org/data/2.5/forecast?q={city name},{country code}


class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {term: ""};

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)

  }
  onInputChange (event) {
    console.log(this.state.term)
    this.setState({term : event.target.value})

  }

  onFormSubmit (event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        value={this.state.term}
        placeholder="Get a five day forecast in your favorite city"
        onChange={this.onInputChange}
        className="form-control"
        />
        <span className="input-group-btn">
          <button type="sumbmit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
