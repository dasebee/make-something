import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

const propTypes = {
  result: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
};
const defaultProps = {
    result : -1
};
export class Display extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="display-container">{this.props.result}</div>
        );
    }
}
Display.propTypes = propTypes;
Display.defaultProps = defaultProps;
const mapStateToProps = (state) => {
    return {
        result : state.result
    }
}

export default connect(mapStateToProps)(Display);