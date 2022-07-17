import React, {Component} from 'react';

class ReactHigherOrderComponentsHover extends Component {

    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <button onMouseOver={incrementCount} type="button">this is hover counter ({ count })</button>
            </div>
        );
    }
}

export default ReactHigherOrderComponentsHover;