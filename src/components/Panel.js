import React from "react";

import "./Panel.css";

class Panel extends React.Component {
    render() {
        return (<div className="panel" data-testid="panel-component">
            <div className="panel-content">
                {this.props.children}
            </div>
        </div>);
    }
}

export default Panel;