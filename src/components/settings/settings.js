import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Settings extends Component {
    render() {
        console.log("airlines: ", this.props);

        return (
            <div>
                settings
                <div>
                    {this.props.post.map(e => (<li key={e.id}>{e.name}</li>))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    debugger;
    return {
        post: state.post,
        allState: state
    };
};

Settings = connect(mapStateToProps, null)(Settings);
export default Settings;
