import React, { Component } from 'react'
import axios from 'axios';
import DataGridPassengers from './data-grid-passengers';
import './passengers.css';

const api = axios.create({
    baseURL: 'https://api.instantwebtools.net/v1/passenger'
})

export default class Passengers extends Component {

    constructor(props) {

        super(props);

        this.state = {
            totalReactPackages: null,
            errorMessage: null
        };

    }

    componentDidMount() {

        // GET request using axios with error handling
        api.get('/')
            .then(response => this.setState({ totalReactPackages: response.data }))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });

    }

    render() {

        return (
            <div>
                <h2>
                    Passengers-Airlines Details
                </h2>
                <DataGridPassengers passengerData={this.state.totalReactPackages} />
            </div>
        )
    }
}
