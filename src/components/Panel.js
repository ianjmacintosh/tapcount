import React from "react";

import "./Panel.css";

class Panel extends React.Component {
    handleClick = (e) => {
        e.stopPropagation();

        this.props.resetTime();
        this.props.resetCount();
        this.props.closePanel();
    }

    render() {
        if (this.props.isOpen) {
            return (<div className="panel" data-testid="panel-component" onClick={this.handleClick}>
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