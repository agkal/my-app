import React, { Component } from 'react'
import { connect } from 'react-redux';

export class ProtectedRoutes extends Component {
    
    render() {

        const isChecked = this.props.allState.isChecked;
        let  content;

        if(isChecked === false){
             content = <div>Not protected</div>;
        }
        else{
            content = <div>Protected</div>;
        }

        return (
            <div>
                {content}
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
  export default ProtectedRoutes;
