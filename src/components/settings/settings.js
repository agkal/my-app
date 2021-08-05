import React, { Component } from 'react'
import { connect } from 'react-redux';

    var isCheckedGlobal = false;

export class Settings extends Component {

    constructor(props) {

        super(props);
        this.state = { isChecked: isCheckedGlobal };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.checked
        });
        isCheckedGlobal = event.target.checked;
        debugger;

        this.props.getIsRoutesProtected();

    }

    render() {
        console.log("props: ", this.props);
        console.log("is checkded: ", this.state.isChecked);

        return (
            <div>
                settings
                <input type="checkbox"  name="isChecked" value={this.props.allState.isChecked} onChange={this.handleChange}  defaultChecked={false}  className="checkbox"  />

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {

    return {
        getIsRoutesProtected: () => dispatch({ type: "SET_ROUTES_PROTECTED", isChecked: isCheckedGlobal }),
    }
}

const mapStateToProps = state => {
    return {
        allState: state
    };
  };
  

Settings = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default Settings;
