import React, { Component } from 'react';

export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtCityName: ''
        }
        this.getWeather = this.getWeather.bind(this)
    }

    getWeather() {
        // console.log(this.state.txtCityName);
        this.props.onSetWeather(this.state.txtCityName, 30);
        this.setState({ txtCityName: '' });
    }

    render() {
        return (
            <div>
                <br />
                <input
                    placeholder="Enter your city name"
                    className="form-control"
                    value={this.state.txtCityName}
                    onChange={e => this.setState({ txtCityName: e.target.value })}
                />
                <br />
                <button className="form-control btn btn-success" onClick={this.getWeather}>
                    Get weather
                </button>
            </div>
        );
    }
}
