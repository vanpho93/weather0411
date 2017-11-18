import React, { Component } from 'react';

export default class WeatherForm extends Component {
    render() {
        const { cityName, temp } = this.props;
        if (cityName === null) {
            return <h3>Enter your city name!</h3>;
        }
        return <h3>{cityName} is now {temp}<sup>o</sup>C</h3>;
    }
}
