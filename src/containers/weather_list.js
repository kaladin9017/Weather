import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  renderWeather (cityData) {
    console.log(cityData)
    const name = cityData.city.name
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    const wind = cityData.list.map(weather => weather.wind.speed)
    const {lon, lat} = cityData.city.coord;
    // const lat = cityData.city.coord.lat;
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="C" /></td>
        <td><Chart data={wind} color="black" units="m/s " /></td>
        <td><Chart data={humidity} color="blue" units="%" /></td>
      </tr>
    )
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>CITY</th>
            <th>TEMPERATURE (C)</th>
            <th>WIND (m/s)</th>
            <th>HUMIDITY (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}


function mapStateToProps({ weather }) {
  return {
    weather
  }
}

export default connect(mapStateToProps)(WeatherList);
