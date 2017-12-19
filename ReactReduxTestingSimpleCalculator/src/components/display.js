import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

const propTypes = {
};
const defaultProps = {
};
export class Display extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>Display</div>
        );
    }
}
Display.propTypes = propTypes;
Display.defaultProps = defaultProps;
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps)(Display);