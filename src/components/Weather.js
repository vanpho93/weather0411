import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <WeatherMessage />
                <WeatherForm />
            </div>            
        );
    }
}

// http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=
