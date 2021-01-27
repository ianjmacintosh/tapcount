import React from "react";
import Statistics from "./Statistics"

import "./Panel.css";

class Panel extends React.Component {
    state = {
        isPanelOpen: false,
    }

    togglePanel = (e) => {
        e.stopPropagation();

        this.setState({
            isPanelOpen: !this.state.isPanelOpen
        });
    }

    render() {
        if (this.state.isPanelOpen) {
            return (<div className={"panel " + (this.state.isPanelOpen ? "": "closed") } data-testid="panel-component" onClick={this.togglePanel}>
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