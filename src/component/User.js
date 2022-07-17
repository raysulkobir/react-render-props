import React from 'react';

const User = (props) => {
    const {name} = props;
    return (
        <div>
            {name(false)}
        </div>
    );
};

export default User;