import React, { Component } from 'react'
import axios from 'axios';


export default class PostAirlines extends Component {

    constructor(props) {

        super(props);

        this.state = { air_id: '', value: '', articleId: null };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createAirline = this.createAirline.bind(this);
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {

        const requestObj = { id: this.state.air_id, name: this.state.value };

        this.createAirline(requestObj);
        event.preventDefault();
    }

    createAirline(requestObject) {
        // Simple POST request with a JSON body using axios
        const requetParameters = { id: requestObject.id, name: requestObject.name };

        axios.post('https://api.instantwebtools.net/v1/airlines', requetParameters)
            .then(response => {
                this.setState({ articleId: response.data.id });
            })
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }


    render() {

        const articleId = this.state.articleId;
        let submission;
        let errorAlert;
        const errorMessage = this.state.errorMessage;

        if (this.state.articleId === null) {
            submission = <div>click submit button</div>
        } else {
            submission = <div>Submitted with Id: {articleId}</div>;
        }

        if (errorMessage !== undefined) {
            errorAlert = alert('error: ' + errorMessage);
        }

        return (
            
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <br />
                    <label>
                        Name:
                        <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
                        <br />
                        <br />
                        InputId:
                        <input type="text" name="air_id" value={this.state.air_id} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <br />
                {submission}
                {errorAlert}
            </div>
        )
    }
}