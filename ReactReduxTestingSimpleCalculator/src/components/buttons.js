import React, { Component } from 'react';
import PropTypes from 'prop-types';
const propTypes = {
};
const defaultProps = {
};
export class Buttons extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>Buttons</div>
        );
    }
}
Buttons.propTypes = propTypes;
Buttons.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps)(Buttons);