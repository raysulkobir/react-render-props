import React, {Component} from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    incrementHoverCount = () =>{
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        const { render } = this.props;
        const { count } = this.state;
        return(
            <div>
                {render(count, this.incrementHoverCount)}
            </div>
        )
    }
}

export default Counter;