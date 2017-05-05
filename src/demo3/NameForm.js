/**
 * Created by xrk on 17-5-5.
 */
import React, { Component } from 'react';

class NameForm extends Component {

    handleSubmit =(event) => {
        alert(this.input.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={input => this.input = input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;
