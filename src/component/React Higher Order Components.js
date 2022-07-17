import React, {Component} from 'react';

class ReactHigherOrderComponents extends Component {

    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <button onClick={incrementCount} type="button">this is hover counter ({ count })</button>
            </div>
        );
    }
}

export default ReactHigherOrderComponents;