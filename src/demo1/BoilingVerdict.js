/**
 * Created by xrk on 17-5-5.
 */
import React, { Component } from 'react';

class BoilingVerdict extends Component {

    render() {
        return (
            this.props.celsius >= 100 ?
                <p>The water would boil</p>
                :
                <p>The water would not boil</p>
        );
    }
}

export default BoilingVerdict;
