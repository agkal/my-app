import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AirlinesGridData } from './airlines-grid-data';

export class Airlines extends Component {

    handleClickSaga = () => {

        this.props.getData();
        console.log("airlines: ", this.props);
    }


    render() {

        return (
            <div>
                <input type="button" value="Dispatch method from Saga" onClick={this.handleClickSaga} />
                <br />
                <br />
                <AirlinesGridData />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {

    return {
        getData: () => dispatch({ type: "GET_DATA_SAGA" }),
    }
}

Airlines = connect(null, mapDispatchToProps)(Airlines);

export default Airlines;
