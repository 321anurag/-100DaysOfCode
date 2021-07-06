import React from "react";

/** reactMaximize is a factory that exports the maximize component. */

class WidgetHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <h3>Highlights</h3>
        <select
          name="sort-option"
          onchange="sortItems(this)"
          className="sort-option form-select"
        >
          <option value="label" selected="">
            Sort by Label
          </option>
          <option value="value">Sort by Value</option>
        </select>
        <div className="btn btn-primary max-min" onclick="{maximize}">
          <i className="fa fa-arrows-alt"></i>
        </div>
      </header>
    );
  }
}
export default WidgetHeader;
