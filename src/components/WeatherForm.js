import React, { Component } from 'react';

export default class WeatherForm extends Component {
    render() {
        return (
            <div style={{ width: 250 }}>
                <br />
                <input placeholder="Enter your city name" className="form-control" />
                <br />
                <button className="form-control btn btn-success">Get weather</button>
            </div>
        );
    }
}
