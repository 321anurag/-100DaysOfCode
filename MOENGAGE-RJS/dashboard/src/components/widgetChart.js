import React from "react";

class WidgetChart extends React.Component {
  render() {
    return (
      <div className="chart">
        <div className="controls">
          <nav>
            <a href="google.com">This week</a>
          </nav>
          <div>
            <span>33%</span>
          </div>
        </div>
        <div className="canvas-container">
          <div className="canvas" id="highlights">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>WeekDay</th>
                  <th>INR</th>
                </tr>
              </thead>
              <tbody>
                <tr className="color: rgb(102, 51, 204);">
                  <td>FRI</td>
                  <td>215</td>
                </tr>
                <tr className="color: rgb(34, 170, 153);">
                  <td>MON</td>
                  <td>185</td>
                </tr>
                <tr className="color: rgb(220, 57, 18);">
                  <td>SAT</td>
                  <td>215</td>
                </tr>
                <tr className="color: rgb(184, 46, 46);">
                  <td>SUN</td>
                  <td>135</td>
                </tr>
                <tr className="color: rgb(170, 170, 17);">
                  <td>THU</td>
                  <td>275</td>
                </tr>
                <tr className="color: rgb(244, 53, 158);">
                  <td>TUE</td>
                  <td>225</td>
                </tr>
                <tr className="color: rgb(59, 62, 172);">
                  <td>WED</td>
                  <td>385</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default WidgetChart;
