import React, { Component } from 'react'
import { connect } from 'react-redux';

export class ProtectedRoutes extends Component {
    render() {
        console.log("props navbar ",this.props.allState);
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allState: state
    };
  };
  
  ProtectedRoutes = connect(mapStateToProps, null)(ProtectedRoutes);
//ProtectedRoutes = connect(state => {return {allStates: state}}, null)(ProtectedRoutes);

  export default ProtectedRoutes;
