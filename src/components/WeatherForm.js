import React, { Component } from 'react';
import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtCityName: ''
        }
        this.getWeather = this.getWeather.bind(this)
    }

    getWeather() {
        axios.get(URL + this.state.txtCityName)   
        .then(res => {
            this.props.onSetWeather(this.state.txtCityName, res.data.main.temp);
            this.setState({ txtCityName: '' });
        })
        .catch(err => {
            alert(err.response.data.message);
            this.setState({ txtCityName: '' });
        });
        // this.props.onSetWeather(this.state.txtCityName, 30);
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
