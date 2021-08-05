import React, { Component } from "react";
import { connect } from "react-redux";
import DataGridAirlinesDisplay from "./data-grid-airlines-display";

export class AirlinesGridData extends Component {
  render() {

    return (
      <div>
        airlines data from api
        <DataGridAirlinesDisplay airlineData={this.props.allState.sagaData} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      
    post: state.post,
    allState: state,
  };
};

AirlinesGridData = connect(mapStateToProps, null)(AirlinesGridData);
export default AirlinesGridData;
