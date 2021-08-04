import React, { Component } from 'react'
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.instantwebtools.net/v1/airlines/'
})


export default class SearchAirlines extends Component {

    constructor(props) {

        super(props);

        this.state = {
            air_id: '',
            totalReactPackages: null,
            errorMessage: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchAirline = this.searchAirline.bind(this);
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {

        const requetObject = { id: this.state.air_id };

        this.searchAirline(requetObject);
        event.preventDefault();
    }

    searchAirline(requestObject) {

        // GET request using axios with error handling
        api.get(`/${requestObject.id}`)
            .then(response => this.setState({ totalReactPackages: response.data }))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }


    render() {

        let data = this.state.totalReactPackages;
        let content;

        if (data !== null) {

            if (data !== "") {
                content = <div>country: {data.country} <br />
                    established: {data.established}<br />
                    id: {data.id} <br />
                    name: {data.name} <br />
                    slogan: {data.slogan} <br />
                    website: {data.website} <br />
                </div>;
            } else {
                content = <div>No content found</div>
            }
        }

        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <br />
                    <label>
                        InputId:
                        <input type="text" name="air_id" value={this.state.air_id} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <br />
                {content}
            </div>
        )
    }
}