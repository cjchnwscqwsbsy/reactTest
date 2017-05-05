/**
 * Created by xrk on 17-5-5.
 */
import React, { Component } from 'react';
import CustomTextInput from './demo2/CustomTextInput';

class AutoFocusTextInput extends Component {

    componentWillMount() {
        this.textInput.focus();
    }

    render () {
        <CustomTextInput
            ref={input => this.textInput = input}
        />
    }
}
