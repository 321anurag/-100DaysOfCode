import React from "react";

class WidgetInfo extends React.Component {
  render() {
    return (
      <div className="info">
        <h4>Stats:</h4>
        <div class="info-module">
          <div className="heading">
            <span>Attribute 1</span>
            <span>65%</span>
          </div>
          <div className="progress atib-1"></div>
        </div>
        <div className="info-module">
          <div className="heading">
            <span>Attribute 2</span>
            <span>30%</span>
          </div>
          <div className="progress atib-2"></div>
        </div>
        <div className="info-module">
          <div className="heading">
            <span>Attribute 3</span>
            <span>5%</span>
          </div>
          <div className="progress atib-3"></div>
        </div>
        <nav>
          <a href="/get_highlight" target="_blank">
            <span>View API</span>
            <span className="fa fa-arrow-right fa-lg"></span>
          </a>
        </nav>
      </div>
    );
  }
}

export default WidgetInfo;
