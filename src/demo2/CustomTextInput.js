/**
 * Created by xrk on 17-5-5.
 */
import React, { Component } from 'react';

class CustomTextInput extends Component {

    focus = () => {
        this.textInput.focus();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={input => this.textInput = input}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focus}
                />
            </div>
        );
    }
}

export default CustomTextInput;
