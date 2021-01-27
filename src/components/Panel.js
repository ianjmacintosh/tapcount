import React from "react";

import "./Panel.css";

class Panel extends React.Component {

    render() {
        if (this.props.isPanelOpen) {
            return (<div className="panel" data-testid="panel-component" onClick={this.props.closePanel}>
            <div className="panel-content">
                {this.props.children}
            </div>
        </div>);
    } else {
        return null;
    }
}
}

export default Panel;