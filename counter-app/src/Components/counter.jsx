import React, { Component } from "react";

class Counter extends Component {
    state = {
        count:0
    };
    render() {
        return (
        <React.Fragment>
            <span>{this.formatCount()}</span>
            <button>Increment</button>
        </React.Fragment>
        );
    }

    formatCount(){
        return this.state.count === 0 ? 'zero' :this.state.count;
    }

}

export default Counter;
