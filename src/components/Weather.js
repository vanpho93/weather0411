import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: null,
            temp: null
        };
        this.onSetWeather = this.onSetWeather.bind(this);
    }

    onSetWeather(cityName, temp) {
        this.setState({ cityName, temp });
    }

    render() {
        const { cityName, temp } = this.state;
        return (
            <div style={{ textAlign: 'center', maxWidth: 400 }}>
                <WeatherMessage cityName={cityName} temp={temp} />
                <WeatherForm onSetWeather={this.onSetWeather} />
            </div>            
        );
    }
}

// http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=

