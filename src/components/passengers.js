import React, { Component } from 'react'
import axios from 'axios';
// import AutoGrid from './AutoGrid';
import DataGridDemo from './DataGridDemo';
import './passengers.css';

const api =  axios.create({
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
          
        const getDataValues = data => {
            let content = [];
            if(data !== null){
            for (let item of data.data ){
                content.push(<li key = {item.id}> {item.name} </li>);
            }
            }
            return content;
        };

        //console.log(this.state.totalReactPackages);

        return (
            <div>
                <h2>
                    Passengers-Airlines Details
                </h2>
                {/* <ul>{getDataValues(this.state.totalReactPackages)}</ul> */}

                {/* <AutoGrid passengerData= {this.state.totalReactPackages}/> */}
                <DataGridDemo passengerData= {this.state.totalReactPackages} />
            </div>
        )
    }
}
