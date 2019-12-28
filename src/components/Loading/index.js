import React from 'react';
import './index.css';
const Loader = React.memo(function MyComponent(props) {
    return (
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
});

export default Loader

