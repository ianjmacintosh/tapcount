import React from "react";

class Controls extends React.Component {
    render() {
        return (<div data-testid="controls-component" id="controls">
            <h3>Controls</h3>
            <ul>
                <li>
                    <button>Reset Counter</button></li>
                <li><button>Reset Timer</button></li>
            </ul>
        </div>)
    }
}

export default Controls;